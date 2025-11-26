import { MAX_LEVEL, MAX_SPECIES_EXP, MAX_TOTAL_EXP, DataNames, DigimonIDs, Species } from "../data/constants.js";

export class PlayerManager {
    currStory = 0;
    // Maximum Level reached with a Digimon (Can only increase by battling)
    // DEBUG: This is set to 3 for demo purposes since the party starts at lv3, check if it need to be changed back to 1 for the official release
    maxLevel = 3;
    levelUpBoost = 1;
    #party = []; // Array of class Digimon
    #partySize;
    #activePartySize;
    // Amount of Digimon the player has defeated of each Species,
    // - Baby Digimon add 1, Child add 2, Adult 4, Perfect 8, Ultimate 16 and Ultimate2 32
    amountDefeated = {};
    // Holds the amount of items the player has to convert a Digimon (Melodies for dssxw, Data for the rest)
    // TODO: Need to initialize this to 0 for every item?
    digimonItems = [];

    constructor(partySize, activePartySize) {
        this.#partySize = partySize;
        this.#activePartySize = activePartySize;
        // Initialize the array to 0 since default value for undeclared arrays is undefined
        // TODO: Might need to rewrite this to use the DS order, but might be fine since it's always the same amount of Digimon
        this.digimonItems = new Array(Object.keys(DigimonIDs).length).fill(0);
        Object.values(Species).forEach(species => {
            this.amountDefeated[species] = 0;
        });
    }

    // TODO: Figure out if there's a better way to send this to display all the Digimon in the party
    getDigimonParty() {
        return this.#party;
    }

    getMaxPartySize() {
        return this.#partySize;
    }

    getCurrPartySize() {
        return this.#party.length;
    }

    isPartyFull() {
        return this.#party.length >= this.#partySize;
    }

    addNewDigimon(digimon) {
        // If the Digimon added was a Culumon
        if (digimon.dataName == DataNames.Culumon) {
            // Increase the amount of levels gained per win
            this.levelUpBoost++;
        }

        // TODO: Remove the Digimon from the Digi-Bank?

        // Add the Digimon to the party
        this.#party.push(digimon);
    }

    removeDigimon(index) {
        // If the Digimon removed was a Culumon
        if (this.#party[index].dataName == DataNames.Culumon) {
            // Decrease the amount of levels gained per win
            this.levelUpBoost--;
        }

        // TODO: Add the Digimon to the Digi-Bank?

        // Remove the Digimon from the party
        this.#party.splice(index, 1);
    }

    /**
     * Adds a Scan Data of the Digimon passed in, using its base id
     * This function is overwritten by every corresponding game to use the right id, so this one will only be called if a unique game is made
     * @param {*} digimon dataName of the Digimon to add a Scan Data of
     * -  NOTE: This is overwritten to access the corresponding id based on the current game
     */
    addDigimonData(digimon) {
        this.digimonItems[DigimonIDs[digimon]["base"]]++;
    }

    // Swaps 2 Digimon that are currently in the party
    swapPartyDigimon(index1, index2) {
        if (index1 < 0 || index1 >= this.#partySize || index2 < 0 || index2 >= this.#partySize) {
            return false;
        }

        if (index1 === index2) {
            return true;
        }

        let tempDigimon = this.#party[index1];
        this.#party[index2] = this.#party[index1];
        this.#party[index1] = tempDigimon;
        return true;
    }

    // species is the name of the object's property. stage is used to calculate how much "exp" is obtained
    increaseSpeciesExperience(species, stage) {
        if (this.amountDefeated[species] < MAX_SPECIES_EXP)
            this.amountDefeated[species] = Math.min(this.amountDefeated[species] + 2 ** (stage - 1), MAX_SPECIES_EXP);
        if (this.amountDefeated[Species.ANY] < MAX_TOTAL_EXP)
            this.amountDefeated[Species.ANY] = Math.min(this.amountDefeated[Species.ANY] + 2 ** (stage - 1), MAX_TOTAL_EXP);
    }

    /**
     * Levels up all applicable party Digimon
     * @param {*} levelDefeated The level of the enemy Digimon defeated
     */
    tryBattleLevelUp(levelDefeated) {
        // The maximum level any Digimon can reach with the level of the Digimon defeated
        // Save whether the current Player's Max Level is higher, or the Enemy Digimon's Level + 1 is (Level + 1 because defeating a higher Level Digimon can increase the Max Level up to 1 higher than its own)
        let maxLevelUpLevel = Math.min(Math.max(this.maxLevel, levelDefeated + 1), MAX_LEVEL);

        this.#party.forEach(digimon => {
            if (levelDefeated >= digimon.level) {
                // Level up the Digimon with the max level found and the current level up boost
                digimon.levelUp(maxLevelUpLevel, this.levelUpBoost);
                // The current Digimon levelled up past the Max Level
                if (this.maxLevel < MAX_LEVEL && digimon.level > this.maxLevel) {
                    this.maxLevel = maxLevelUpLevel;
                }
            }
        });
    }

    // TODO: Might move all the Party functions to a new Party class
    getPartyDigimon(index) {
        if (index >= 0 && index < this.#party.length) {
            return this.#party.at(index);
        }
    }

    getRandomActiveDigimon() {
        return this.getPartyDigimon(Math.floor(Math.random() * Math.min(this.getCurrPartySize(), this.#activePartySize)));
    }

    /*******************
     * BATTLE FUNCTIONS
     ******************/
    //#region Battle Functions
    dealDamage(damage, aoe) {
        let playerDigimonDefeated = false;
        if (aoe) {
            // Deal damage to all the Digimon in the active party
            for (let $i = 0; $i < this.#activePartySize && this.#party[$i] !== undefined; $i++) {
                // If the Digimon was defeated, and we haven't recorded the bool yet, update it
                if(this.#party[$i].takeDamage(damage) && !playerDigimonDefeated) {
                    playerDigimonDefeated = true;
                }
            }
        } else {
            playerDigimonDefeated = this.getRandomActiveDigimon().takeDamage(damage);
        }

        // A Digimon from the player's party was defeated, update it accordingly
        if (playerDigimonDefeated) {
            this.updateParty();
        }
    }

    /**
     * Updates the party if any Digimon have died and need to be swapped with reserve Digimon
     * TODO: DSSXW does not swap the Digimon if one dies, remember to override the behavior
     */
    updateParty() {
        // There is no Digimon on the reserve, don't execute the rest of the code
        if (this.getCurrPartySize() <= this.#activePartySize) {
            return;
        }

        let defeatedDigimon = [];
        for (let index = 0; index < this.#activePartySize; index++) {
            if (this.#party[index].currHP <= 0) {
                defeatedDigimon.push(index);
            }
        }

        // We reverse the array to start swapping from the first Digimon with the pop
        defeatedDigimon.reverse();

        for (let index = this.#activePartySize; index < this.#partySize && defeatedDigimon.length > 0; index++) {
            if (this.#party[index].currHP > 0) {
                swapPartyDigimon(index, defeatedDigimon.pop());
            }            
        }
    }

    /**
     * 
     * @returns true if all Digimon in the player's party have been defeated, false otherwise
     */
    wasPlayerDefeated() {
        let allDigimonDefeated = true;
        this.#party.forEach(digimon => {
            if (digimon.currHP > 0) {
                allDigimonDefeated = false;
                // We leave the forEach
                return;
            }
        });

        return allDigimonDefeated;
    }
    //#endregion
}
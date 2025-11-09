import { MAX_SPECIES_EXP, MAX_TOTAL_EXP, DataNames, DigimonIDs, Species } from "../constants.js";

export class PlayerManager {
    currStory = 0;
    // Maximum Level reached with a Digimon (Can only increase by battling)
    // DEBUG: This is set to 3 for demo purposes since the party starts at lv3, check if it need to be changed back to 1 for the official release
    maxLevel = 3;
    levelUpBoost = 1;
    #party = []; // Array of class Digimon
    #partySize;
    // Amount of Digimon the player has defeated of each Species,
    // - Baby Digimon add 1, Child add 2, Adult 4, Perfect 8, Ultimate 16 and Ultimate2 32
    amountDefeated = {};
    // Holds the amount of items the player has to convert a Digimon (Melodies for dssxw, Data for the rest)
    // TODO: Need to initialize this to 0 for every item?
    digimonItems = [];

    constructor(partySize) {
        this.#partySize = partySize;
        // Initialize the array to 0 since default value for undeclared arrays is undefined
        // TODO: Might need to rewrite this to use the DWDS order, but might be fine since it's always the same amount of Digimon
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

    addDigimonItem(digimon) {
        // TODO: Overwrite this to access the corresponding id based on the current game
        this.digimonItems[DigimonIDs[digimon]["base"]]++;
    }

    // species is the name of the object's property. stage is used to calculate how much "exp" is obtained
    increaseSpeciesExperience(species, stage) {
        if (this.amountDefeated[species] < MAX_SPECIES_EXP)
            this.amountDefeated[species] = Math.min(this.amountDefeated[species] + 2 ** (stage - 1), MAX_SPECIES_EXP);
        if (this.amountDefeated[Species.ANY] < MAX_TOTAL_EXP)
            this.amountDefeated[Species.ANY] = Math.min(this.amountDefeated[Species.ANY] + 2 ** (stage - 1), MAX_TOTAL_EXP);
    }

    // TODO: Might move all the Party functions to a new Party class
    getPartyDigimon(index) {
        if (index >= 0 && index < this.#party.length) {
            return this.#party.at(index);
        }
    }

    getRandomActiveDigimon() {
        // TODO: Currently, the first 3 Digimon are always active and the party is filled in order
        return this.getPartyDigimon(Math.floor(Math.random() * Math.min(this.#partySize, 3)));
    }
}
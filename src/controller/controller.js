import { View } from "../view/view.js";
import { DataNames, Locations } from "../model/data/constants.js";
import { DWDSPlayerManager } from "../model/managers/dwds classes/dwds_player_manager.js";
import { Digimon } from "../model/entities/digimon.js";
import { EncountersManager } from "../model/managers/encounters_manager.js";
import { MapsManager } from "../model/managers/maps_manager.js";
import { StoryManager } from "../model/managers/story_manager.js";
import { BattleManager } from "../model/managers/battle_manager.js";

export class Controller {
    #currLocation = "town";
    // TODO: Might have to be rethought when implementing multiple games
    #gameChosen = "dwds";
    #starterDigimonList = [DataNames.Koromon, DataNames.Tsunomon, DataNames.Tanemon];

    #view;
    #battleManager;
    #encountersManager;
    #mapsManager;
    #playerManager;
    #storyManager;

    constructor() {
        this.#playerManager = new DWDSPlayerManager(6);
        this.#battleManager = new BattleManager(this.#playerManager);
        this.#encountersManager = new EncountersManager(this.#gameChosen);
        this.#mapsManager = new MapsManager();
        this.#storyManager = new StoryManager();

        // Create the default Party boxes
        let partyDigimonTemplate = document.getElementById("party-digimon-template");
    
        for (let index = 0; index < this.#playerManager.getMaxPartySize(); index++) {
            document.getElementById("party-box").appendChild(partyDigimonTemplate.content.cloneNode(true));
        }

        this.#view = new View(this.#gameChosen, this.#playerManager.getMaxPartySize());

        if (this.#playerManager.getCurrPartySize() == 0) {
            // TODO: Change the code to be less hardcoded (Everything is still happening in the background while having no Digimon)
            this.#view.showStarterModal();
        }
    }

    //#region LOCATION FUNCTIONS
    /**
     * Moves the player from the current location to the new location
     * @param {Location} newLocation location the player is moving to
     */
    moveToLocation(newLocation) {
        let oldLocation = this.#currLocation;

        this.#view.handleLeavingLocation(this.#currLocation);

        this.handleLeavingLocation(newLocation);
        
        // Update the current location
        this.#currLocation = newLocation;

        this.handleEnteringLocation(newLocation);

        // Handle the specific behavior for each location, like moving areas for Maps
        this.#view.handleEnteringLocation(newLocation);

        switch (newLocation) {
            case Locations.Maps:
                // TODO: This handles entering a MapArea and getting the new encounters
                this.movedToNewArea();
                break;
            case Locations.Town:
                break;
            default:
                break;
        }

        // Update the player's party display. Should only be necessary after returning from a Map, but I don't know if it's checking for when it needs to be updated every time. Alternatively, I could have a boolean in gameManager to know when the party needs to be updated (If nothing changed, there is no need to run this)
        // if (this.#game.isPartyDirty()) {
        //     this.#view.updatedPlayerDigimonBattleInformation(this.#playerManager.getDigimonParty());

        //     this.#game.partyDisplayUpdated();
        // }
        switch (oldLocation) {
            case Locations.Maps:
                // We update the battle information only, the Digimon could only have suffered damage between moving to town. If the party is modified while in an area it calls its own update function
                // TODO: Might not even need this call once the Town only displays the non-battle information
                this.#view.updatedPlayerPartyBattleInformation(this.#playerManager.getDigimonParty());
                break;
            case Locations.Town:
                break;
            default:
                break;
        }
    }
    
    generateNewDigimonEncounter = () => {
        // We get the array of enemy Digimon from EncountersManager
        let enemyDigimonArray = this.#encountersManager.getNewDigimonEncounter();
        // We pass the array to the Battle System to start the battle
        this.#battleManager.startBattle(enemyDigimonArray);
        // We grab the first enemy on the array
        let firstEnemySpawned = enemyDigimonArray[0];
        // We create a Digimon object and  display its information to the player
        this.#view.setEnemyDigimon(new Digimon(firstEnemySpawned.getDataName(), firstEnemySpawned.getLevel()));
    }

    handleLeavingLocation = (location) => {
        switch (location) {
            case Locations.Maps:
                this.#battleManager.endBattle();
                break;
            case Locations.Town:
                break;
            default:
                break;
        }
    }

    handleEnteringLocation = (location) => {
        switch (location) {
            case Locations.Maps:
                // TODO: Will need a way to know which area the player is entering (when area selection is implemented)
                // this.enteredNewMapArea(new MapArea(this.#mapsManager.getCurrentMapArea().getMapDataName(), 0));
                this.changeMap(this.#mapsManager.getCurrentMapArea().getMapDataName());

                break;
            case Locations.Town:
                break;
            default:
                break;
        }
    }
    //#endregion

    //#region MAP FUNCTIONS
    movedToNewArea = () => {
        this.updatePrevNextAreaButtons();

        this.#view.movedToNewArea(this.#mapsManager.getCurrentMapName(this.#gameChosen), this.#encountersManager.getDigimonAvailable());

        // TODO: Make a button the player must press to find an encounter?
        this.generateNewDigimonEncounter();
    }

    updatePrevNextAreaButtons = () => {
        this.#view.updatePrevNextAreaButtons(this.#mapsManager.isPreviousAreaUnlocked(), this.#mapsManager.isNextAreaUnlocked());
    }

    changeArea(direction) {
        if (this.#mapsManager.isAreaUnlocked(direction)) {
            this.enteredNewMapArea(this.#mapsManager.getCurrentMapArea().getMapDataName(), this.#mapsManager.getCurrentMapArea().getAreaId() + direction);

            this.movedToNewArea();
        }
    }

    changeMap(mapDataName) {
        if (this.#mapsManager.isMapUnlocked(mapDataName)) {
            this.enteredNewMapArea(mapDataName, 0);

            return true;
        }

        return false;
    }

    enteredNewMapArea(newMapDataName, newAreaId) {
        this.#mapsManager.moveToMapArea(newMapDataName, newAreaId);

        // If the player entered a Boss area
        if (this.#storyManager.isInBossArea(this.#mapsManager.getCurrentMapArea())) {
            // Pass the bosses array to the Encounter Manager
            this.#encountersManager.enteredBossArea(this.#storyManager.getCurrentBosses());
            return;
        }

        this.#encountersManager.enteredNewArea(this.#mapsManager.getCurrentMapArea(), this.#storyManager.getCurrentStory());
    }
    //#endregion

    //#region BATTLE FUNCTIONS
    handlePlayerAttack() {
        if (this.#battleManager.playerAttack()) {
            // The player won the battle
            // Check if the Digimon defeated was from the current Map and Area from the Story task
            if (this.#mapsManager.isInMapArea(this.#storyManager.getTargetMapArea())) {
                // Tell the StoryManager a Digimon in the Story Area was defeated
                this.#storyManager.digimonDefeated();

                // TODO: It's currently hacked together, try to make it better
                // Obtained a MapArea thaat was unlocked, if any
                let mapAreaUnlocked = this.#storyManager.getLastMapAreaUnlocked();

                if (mapAreaUnlocked !== null) {
                    // Unlock the new MapArea
                    this.#mapsManager.unlockNewMapArea(mapAreaUnlocked);

                    // If a boss was defeated, we send the player back to Town to reset the Maps. Otherwise, a new area might have unlocked so update the prev/next Area buttons
                    if (this.#storyManager.wasBossDefeated()) {
                        this.moveToLocation(Locations.Town);
                    } else {
                        this.updatePrevNextAreaButtons();
                    }
                }
            }

            // TODO: Move to a place where the player triggers the next encounter? (Maybe a "NEXT" button appears after defeating a Digimon)
            this.generateNewDigimonEncounter();

            // TODO: Temporary code, need to do it less hardcoded and possibly elsewhere
            this.#view.updatePlayerPartyInformation(this.#playerManager.getDigimonParty());
        } else {
            // TODO: Update so it shows feedback for a Digimon that was defeated before showing the next one? Might not be necessary since some clickers ignore this last feedback in favor of making the game faster
            this.#view.displayUpdatedEnemyDigimonInformation(this.#battleManager.getCurrentEnemyDigimon());
            // If this returns false, the player was defeated
            if (this.#battleManager.handleEnemyAttack()) {
                this.#view.updatedPlayerPartyBattleInformation(this.#playerManager.getDigimonParty());
            } else {
                this.moveToLocation(Locations.Town);
            }
        }
    }
    //#endregion

    //#region PLAYER FUNCTIONS
    assignStarter = starterId => {
        let starterDataName = this.#starterDigimonList[starterId];
        this.#playerManager.addNewDigimon(new Digimon(starterDataName, 3));
        this.#encountersManager.setStarterDigimon(starterDataName);
        // DEBUG: Multiple starters for demo
        this.#playerManager.addNewDigimon(new Digimon(DataNames.DotAgumon, 3));
        this.#playerManager.addNewDigimon(new Digimon(DataNames.DotFalcomon, 3));

        this.#view.closeStarterModal();

        this.#view.updatePlayerPartyInformation(this.#playerManager.getDigimonParty());
    }

    closeDetailedDigimonModal = () => this.#view.closeDetailedDigimonInfoModal();

    displayDetailedDigimonInfo = index => this.#view.displayDetailedDigimonInfo(this.#playerManager.getPartyDigimon(index));
    //#endregion
}
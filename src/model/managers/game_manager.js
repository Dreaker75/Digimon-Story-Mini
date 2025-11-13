import { MapsManager as MapsManager } from './maps_manager.js';
import { StoryManager } from './story_manager.js';
import { EncountersManager as EncountersManager } from './encounters_manager.js';
import { Locations } from '../data/constants.js';
import { Digimon } from '../entities/digimon.js';
import { MapArea } from '../entities/map_area.js';

export class Game {
    // TODO: Temporary, let player choose later
    gameChosen = "dwds";
    #currLocation = "town";

    #mapsManager;
    storyManager;
    _encountersManager;
    battleSystem;
    player;

    constructor() {
        this.#mapsManager = new MapsManager();
        this.storyManager = new StoryManager(this.#mapsManager);
        this._encountersManager = new EncountersManager(this.gameChosen);
    }

    getCurrentLocation() {
        return this.#currLocation;
    }

    /**********************
     * MAP FUNCTIONS
     **********************/
    getCurrentMapName() {
        return this.#mapsManager.getCurrentMapName(this.gameChosen);
    }

    isNextAreaUnlocked() {
        return this.#mapsManager.isNextAreaUnlocked();
    }

    isPreviousAreaUnlocked() {
        return this.#mapsManager.isPreviousAreaUnlocked();
    }

    digimonDefeated() {
        // Check if the Digimon defeated was from the current Map and Area from the Story task
        if (this.#mapsManager.isInMapArea(this.storyManager.getTargetMapArea())) {
            this.storyManager.digimonDefeated();
            let mapAreaUnlocked = this.storyManager.getLastMapAreaUnlocked();

            // TODO: It's currently hacked together, try to make it better
            if (mapAreaUnlocked !== null) {
                this.#mapsManager.unlockNewMapArea(mapAreaUnlocked);
                return true;
            }

            // TODO: Check if it's a boss area?
            // Reenter the area in case it was a Boss one (Player gets sent back to town after defeating a Boss now)
            // this.enteredNewMapArea(this.#mapsManager.getCurrentMapArea());
        }

        return false;
    }

    /**********************
     * ENCOUNTER FUNCTIONS
     **********************/
    getDigimonInCurrentMapArea() {
        return this._encountersManager.getDigimonAvailable();
    }

    enteredNewMapArea(newMapDataName, newAreaId) {
        this.#mapsManager.moveToMapArea(newMapDataName, newAreaId);

        // If the player entered a Boss area
        if (this.storyManager.isInBossArea(this.#mapsManager.getCurrentMapArea())) {
            // Pass the bosses array to the Encounter Manager
            this._encountersManager.enteredBossArea(this.storyManager.getCurrentBosses());
            return;
        }

        this._encountersManager.enteredNewArea(this.#mapsManager.getCurrentMapArea(), this.storyManager.getCurrentStory());
    }

    changeArea(direction) {
        if (this.#mapsManager.isAreaUnlocked(direction)) {
            this.enteredNewMapArea(this.#mapsManager.getCurrentMapArea().getMapDataName(), this.#mapsManager.getCurrentMapArea().getAreaId() + direction);

            return true;
        }

        return false;
    }

    changeMap(mapDataName) {
        if (this.#mapsManager.isMapUnlocked(mapDataName)) {
            this.enteredNewMapArea(mapDataName, 0);

            return true;
        }

        return false;
    }

    changeLocation = (newArea) => {
        this.handleLeavingLocation(newArea);

        this.#currLocation = newArea;

        this.handleEnteringLocation(newArea);
    }
    
    generateNewDigimonEncounter = () => {
        // We get the array of enemy Digimon from EncountersManager
        let enemyDigimonArray = this._encountersManager.getNewDigimonEncounter();
        // We pass the array to the Battle System to start the battle
        this.battleSystem.startBattle(enemyDigimonArray);
        // We grab the first enemy on the array
        let firstEnemySpawned = enemyDigimonArray[0];
        // We create a Digimon object and return it to display its information to the player
        return new Digimon(firstEnemySpawned.getDataName(), firstEnemySpawned.getLevel());
    }

    wasBossDefeated() {
        return this.storyManager.wasBossDefeated();
    }

    /**********************
     * BATTLE FUNCTIONS
     **********************/
    handlePlayerAttack = () => this.battleSystem.playerAttack(); 

    /*********************
     * HELPER FUNCTIONS
     *********************/
    handleLeavingLocation = (location) => {
        switch (location) {
            case Locations.Maps:
                this.battleSystem.endBattle();
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
}
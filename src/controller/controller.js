// TODO: Might have to be rethought when implementing multiple games
import { DWDSGameManager } from "../model/managers/dwds classes/dwds_game_manager.js";
import { View } from "../view/view.js";
import { Locations } from "../model/data/constants.js";

export class Controller {
    #gameChosen = "dwds";

    #view;
    #gameManager;

    constructor() {
        this.#gameManager = new DWDSGameManager();

        // Create the default Party boxes
        let partyDigimonTemplate = document.getElementById("party-digimon-template");
    
        for (let index = 0; index < this.#gameManager.getMaxPartySize(); index++) {
            document.getElementById("party-box").appendChild(partyDigimonTemplate.content.cloneNode(true));
        }

        this.#view = new View(this.#gameChosen, this.#gameManager.getMaxPartySize());

        if (this.#gameManager.getCurrPartySize() == 0) {
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
        let oldLocation = this.#gameManager.getCurrentLocation();

        this.#view.handleLeavingLocation(this.#gameManager.getCurrentLocation());

        // Update the current location
        this.#gameManager.changeLocation(newLocation);

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
        //     this.#view.updatedPlayerDigimonBattleInformation(this.#game.getDigimonParty());

        //     this.#game.partyDisplayUpdated();
        // }
        switch (oldLocation) {
            case Locations.Maps:
                // We update the battle information only, the Digimon could only have suffered damage between moving to town. If the party is modified while in an area it calls its own update function
                // TODO: Might not even need this call once the Town only displays the non-battle information
                this.#view.updatedPlayerPartyBattleInformation(this.#gameManager.getDigimonParty());
                break;
            case Locations.Town:
                break;
            default:
                break;
        }
    }
    
    generateNewDigimonEncounter = () => this.#view.setEnemyDigimon(this.#gameManager.generateNewDigimonEncounter());
    //#endregion

    //#region MAP FUNCTIONS
    movedToNewArea = () => {
        this.updatePrevNextAreaButtons();

        this.#view.movedToNewArea(this.#gameManager.getCurrentMapName(), this.#gameManager.getDigimonInCurrentMapArea());

        // TODO: Make a button the player must press to find an encounter?
        this.generateNewDigimonEncounter();
    }

    updatePrevNextAreaButtons = () => {
        this.#view.updatePrevNextAreaButtons(this.#gameManager.isPreviousAreaUnlocked(), this.#gameManager.isNextAreaUnlocked());
    }

    changeArea(direction) {
        if (this.#gameManager.changeArea(direction)) {
            this.movedToNewArea();
        }
    }
    //#endregion

    //#region BATTLE FUNCTIONS
    handlePlayerAttack() {
        if (this.#gameManager.handlePlayerAttack()) {
            // The player won the battle
            // Tell the game we've defeated a Digimon, so it updates the Story tasks if it applies, among other things
            if (this.#gameManager.digimonDefeated()) {
                // If a boss was defeated, we send the player back to Town to reset the Maps. Otherwise, a new area might have unlocked so update the prev/next Area buttons
                if (this.#gameManager.wasBossDefeated()) {
                    this.moveToLocation(Locations.Town);
                } else {
                    this.updatePrevNextAreaButtons();
                }
            }

            // TODO: Move to a place where the player triggers the next encounter? (Maybe a "NEXT" button appears after defeating a Digimon)
            this.generateNewDigimonEncounter();

            // TODO: Temporary code, need to do it less hardcoded and possibly elsewhere
            this.#view.updatePlayerPartyInformation(this.#gameManager.getDigimonParty());
        } else {
            // TODO: Update so it shows feedback for a Digimon that was defeated before showing the next one? Might not be necessary since some clickers ignore this last feedback in favor of making the game faster
            this.#view.displayUpdatedEnemyDigimonInformation(this.#gameManager.battleSystem.getCurrentEnemyDigimon());
            // If this returns false, the player was defeated
            if (this.#gameManager.battleSystem.handleEnemyAttack()) {
                this.#view.updatedPlayerPartyBattleInformation(this.#gameManager.getDigimonParty());
            } else {
                this.moveToLocation(Locations.Town);
            }
        }
    }
    //#endregion

    //#region PLAYER FUNCTIONS
    assignStarter = starterId => {
        this.#gameManager.assignStarter(starterId);
        this.#view.closeStarterModal();

        this.#view.updatePlayerPartyInformation(this.#gameManager.getDigimonParty());
    }

    closeDetailedDigimonModal = () => this.#view.closeDetailedDigimonInfoModal();

    displayDetailedDigimonInfo = index => this.#view.displayDetailedDigimonInfo(this.#gameManager.getPartyDigimon(index));
    //#endregion
}
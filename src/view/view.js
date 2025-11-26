import { DigimonList, Locations, Names } from "../model/data/constants.js";

export class View {
    languageChosen = "japanese";
    gameChosen;

    // Locations Elements
    locationButtons = {};
    locationDivs = {};
    
    // Map Elements
    prevAreaButton;
    nextAreaButton;

    // Player information elements
    partyDigimonDivs;
    digimonDetailedInfoModal;
    digimonNameDisplay;
    digimonImageDisplay;
    digimonLevelDisplay;

    // Enemy information elements
    enemyDigimonDiv;
    
    constructor(gameChosen) {
        this.gameChosen = gameChosen;
        this.locationButtons[Locations.Maps] = document.getElementById("maps-button");
        this.locationButtons[Locations.Town] = document.getElementById("town-button")
        this.locationDivs[Locations.Maps] = document.getElementById("maps-menu-ds");
        this.locationDivs[Locations.Town] = document.getElementById("town-menu-ds");
        this.enemyDigimonDiv = document.getElementById("enemy-digimon-ds");
        this.enemyDigimonDiv.style.display = "none";
        this.prevAreaButton = document.getElementById("prev-area-button");
        this.nextAreaButton = document.getElementById("next-area-button");
        this.digimonDetailedInfoModal = document.getElementById("digimon-info-modal");
        this.digimonNameDisplay = this.digimonDetailedInfoModal.querySelector("h2");
        this.digimonImageDisplay = this.digimonDetailedInfoModal.querySelector("img");
        this.digimonLevelDisplay = document.getElementById("level-info");

        // DEBUG: Change to not be hardcoded
        document.getElementById("current-map-ds").style.backgroundImage = "url(images/maps/dataForest.png)";
        document.getElementById("current-map-ds").style.backgroundSize = "100%";

        // Store the party Digimon's divs
        this.partyDigimonDivs = document.getElementById("party-box").querySelectorAll(".party-digimon");
    }
    
    //#region LOCATION FUNCTIONS
    /**
     * Handles what happens when the player leaves a location
     * @param {Locations} location the location the player is leaving
     */
    handleLeavingLocation(location) {
        // Enable the button for the old area
        this.locationButtons[location].disabled = false;
    
        // Hide the old location's div
        this.locationDivs[location].style.display = "none";
    }
    
    handleEnteringLocation(location) {
        // Disable the button for the new map
        this.locationButtons[location].disabled = true;
        
        // Show the new location's div
        this.locationDivs[location].style.display = "block";
    }
    //#endregion

    //#region MAP FUNCTIONS
    movedToNewArea = (mapName, enemyDigimon) => {
        let availableDigimonDisplay = document.getElementById("wild-digimon-list");
        availableDigimonDisplay.textContent = "";
        document.getElementById("map-name").textContent = mapName;

        // TODO: Temporary, will show the Digimon's icons and have the ability to display more info when hovering over them in the future
        enemyDigimon.forEach(digimon => {
            document.getElementById("wild-digimon-list").textContent += Names[digimon.getDataName()][this.languageChosen] ?? digimon.getDataName() + ", ";
        });
    }

    updatePrevNextAreaButtons = (prevAreaUnlocked, nextAreaUnlocked) => {
        this.prevAreaButton.disabled = !prevAreaUnlocked;
        this.nextAreaButton.disabled = !nextAreaUnlocked;
    }
    //#endregion

    //#region PLAYER INFORMATION FUNCTIONS
    updatePlayerPartyInformation(playerParty) {
        playerParty.forEach((digimon, id) => this.updatePartyDigimonInformation(id, digimon));
        this.updatedPlayerPartyBattleInformation(playerParty);
    }
    
    updatePartyDigimonInformation (id, digimon) {
        let dataName = digimon.dataName;
        let displayName = Names[dataName][this.languageChosen] ?? dataName;
        this.partyDigimonDivs[id].querySelector(".digimon-name").textContent = displayName;
        this.partyDigimonDivs[id].querySelector("img").src = "./images/digimon/" + dataName + (DigimonList[dataName][this.gameChosen].sprite ?? "") + ".png";
        this.partyDigimonDivs[id].querySelector("img").alt = displayName + " image";
        this.partyDigimonDivs[id].style.display = "inline-block";
    }

    updatedPlayerPartyBattleInformation(playerParty) {
        playerParty.forEach((digimon, id) => {
            this.partyDigimonDivs[id].querySelector(".level").textContent = digimon.level;
            this.partyDigimonDivs[id].querySelector(".hp-info").textContent = digimon.currHP + " / " + digimon.maxHP;
            this.partyDigimonDivs[id].querySelector(".attack-info").textContent = digimon.damage;
        });
    }

    displayDetailedDigimonInfo = digimon => {
        let dataName = digimon.dataName;
        let displayName = Names[dataName][this.languageChosen] ?? dataName;
        this.digimonNameDisplay.textContent = displayName;
        this.digimonImageDisplay.src = "./images/digimon/" + dataName + (DigimonList[dataName][this.gameChosen].sprite ?? "") + ".png";
        this.digimonImageDisplay.alt = displayName + " Image";
        this.digimonLevelDisplay.textContent = digimon.level;
        this.digimonDetailedInfoModal.style.display = "block";
    }

    closeDetailedDigimonInfoModal = () => this.digimonDetailedInfoModal.style.display = "none";
    //#endregion

    //#region ENEMY INFORMATION FUNCTIONS
    displayUpdatedEnemyDigimonInformation = digimon => this.enemyDigimonDiv.querySelectorAll("p")[1].textContent = "HP " + digimon.currHP + " / " + digimon.maxHP;

    setEnemyDigimon = digimon => {
        let dataName = digimon.dataName;
        let displayName = Names[dataName][this.languageChosen] ?? dataName;
        this.enemyDigimonDiv.querySelector("img").src = "./images/digimon/" + dataName + (DigimonList[dataName][this.gameChosen].sprite ?? "") + ".png";
        this.enemyDigimonDiv.querySelector("img").alt = displayName + " Image";
        this.enemyDigimonDiv.querySelector("h3").textContent = displayName;
        this.enemyDigimonDiv.querySelectorAll("p")[0].textContent = "Level " + digimon.level;
        this.enemyDigimonDiv.querySelectorAll("p")[1].textContent = "HP " + digimon.currHP + " / " + digimon.maxHP;
        this.enemyDigimonDiv.style.display = "block";
    }
    //#endregion

    //#region STARTER FUNCTIONS
    showStarterModal = () => document.getElementById("starter-modal").style.display = "block";
    closeStarterModal = () => document.getElementById("starter-modal").style.display = "none";
    //#endregion
}
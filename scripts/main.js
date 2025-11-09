import { DWDSGameManager } from './managers/dwds classes/dwds_game_manager.js'
import { DigimonList, Locations, Names } from './constants.js'

let language_chosen = "japanese"
// var pair_game_chosen = "dawn/dusk/red/blue"

// const digimondwds = [
//     "Koromon",
//     "Tsunomon",
//     "Poyomon",
//     "Tokomon",
//     "Tanemon",
//     "Pagumon",
//     "Kapurimon",
//     "Kuramon",
//     "Puttomon",
//     "Chicomon",
//     "Dorimon",
//     "Culumon",
//     "Agumon",
//     "Veemon",
//     "Guilmon",
//     "Dorumon",
//     "Betamon",
//     "Gabumon",
//     "Patamon",
//     "Piyomon",
//     "Palmon",
//     "Tentomon",
//     "Gotsumon",
//     "Otamamon",
//     "Gomamon",
//     "Bakumon",
//     "PicoDevimon",
//     "ToyAgumon",
//     "Hagurumon",
//     "Plotmon",
//     "Wormmon",
//     "Hawkmon",
//     "Armadimon",
//     "Terriermon",
//     "Lopmon",
//     "Renamon",
//     "Impmon",
//     "Keramon",
//     "Falcomon",
//     "Penmon",
//     "Goburimon",
//     "Kumamon",
//     "Kotemon",
//     "YukiAgumon",
//     "BlackAgumon",
//     "Muchomon",
//     "Ganimon",
//     "Floramon",
//     "Gizamon",
//     "Lalamon",
//     "Aruraumon",
//     "ToyAgumon (Black)",
//     "Tsukaimon",
//     "PawnChessmon (Black)",
//     "Gaomon",
//     "DotFalcomon",
//     "Kudamon",
//     "Kamemon",
//     "Dracmon",
//     "PawnChessmon (White)",
//     "DotAgumon",
//     "Greymon",
//     "Tyrannomon",
//     "Devimon",
//     "Airdramon",
//     "Seadramon",
//     "Numemon",
//     "Kabuterimon",
//     "Angemon",
//     "Vegiemon",
//     "Ogremon",
//     "Bakemon",
//     "Sukamon",
//     "Kokatorimon",
//     "Leomon",
//     "Kuwagamon",
//     "Raremon",
//     "Gekomon",
//     "Tailmon",
//     "Wizardmon",
//     "Togemon",
//     "Guardromon",
//     "ExVeemon",
//     "Stingmon",
//     "Birdramon",
//     "Ankylomon",
//     "Gargomon",
//     "Garurumon",
//     "Growlmon",
//     "Kyubimon",
//     "Chrysallimon",
//     "Seasarmon",
//     "Evilmon",
//     "Aquilamon",
//     "Gokimon",
//     "Dinohumon",
//     "Hookmon",
//     "Grizzmon",
//     "Dorugamon",
//     "Raptordramon",
//     "Hanumon",
//     "Starmon",
//     "Kiwimon",
//     "Unimon",
//     "Sorcerymon",
//     "DarkTyrannomon",
//     "Akatorimon",
//     "PlatinumSukamon",
//     "Ikkakumon",
//     "Minotarumon",
//     "Icemon",
//     "DarkLizardmon",
//     "Flarerizamon",
//     "GeoGreymon",
//     "Gaogamon",
//     "Diatrymon",
//     "Reppamon",
//     "Sunflowmon",
//     "Gawappamon",
//     "Sangloupmon",
//     "Peckmon",
//     "Fladramon",
//     "Magnamon",
//     "Prairiemon",
//     "Kongoumon",
//     "Seahomon",
//     "Shurimon",
//     "Kenkimon",
//     "Ponchomon",
//     "MetalGreymon",
//     "Monzaemon",
//     "MetalMamemon",
//     "Andromon",
//     "Etemon",
//     "Megadramon",
//     "Piccolomon",
//     "Digitamamon",
//     "AtlurKabuterimon (Blue)",
//     "Ookuwamon",
//     "Angewomon",
//     "MegaSeadramon",
//     "Dagomon",
//     "WereGarurumon (Black)",
//     "WereGarurumon (Blue)",
//     "Vamdemon",
//     "LadyDevimon",
//     "Garudamon",
//     "Blossomon",
//     "Lillymon",
//     "AtlurKabuterimon (Red)",
//     "Cyberdramon",
//     "HolyAngemon",
//     "Paildramon",
//     "Dinobeemon",
//     "Antylamon",
//     "Arukenimon",
//     "Mummymon",
//     "MegaloGrowlmon",
//     "Rapidmon",
//     "Taomon",
//     "Parrotmon",
//     "Infermon",
//     "BlackRapidmon",
//     "Kyukimon",
//     "Dorugremon",
//     "Hangyomon",
//     "Triceramon",
//     "Deramon",
//     "Silphymon",
//     "SuperStarmon",
//     "BlackMegaloGrowlmon",
//     "Zudomon",
//     "Whamon",
//     "Mamemon",
//     "Insekimon",
//     "Gigadramon",
//     "RizeGreymon",
//     "MachGaogamon",
//     "Yatagaramon",
//     "Tyilinmon",
//     "Lilamon",
//     "Matadormon",
//     "Garbemon",
//     "HeraclesKabuterimon",
//     "SaberLeomon",
//     "MetalEtemon",
//     "MarineAngemon",
//     "GigaSeadramon",
//     "Piemon",
//     "Demon",
//     "Hououmon",
//     "Pinocchimon",
//     "Rosemon",
//     "WarGreymon",
//     "MetalGarurumon",    
//     "Mugendramon",
//     "VenomVamdemon",
//     "Omegamon",
//     "Imperialdramon (Dragon Mode)",
//     "Imperialdramon (Fighter Mode)",
//     "Imperialdramon (Paladin Mode)",
//     "Deathmon",
//     "Seraphimon",
//     "HiAndromon",
//     "Cherubimon (Zen)",
//     "Cherubimon (Aku)",
//     "Dukemon",
//     "Dukemon (Crimson Mode)",
//     "SaintGargomon",
//     "Sakuyamon",
//     "Diaboromon",
//     "Plesiomon",
//     "BelialVamdemon",
//     "Imperialdramon (Dragon Mode) (Black)",
//     "PrinceMamemon",
//     "BlackSaintGargomon",
//     "Jijimon",
//     "Babamon",
//     "Parasimon",
//     "Cannondramon",
//     "SlashAngemon",
//     "Crossmon",
//     "Dorugoramon",
//     "BanchoLeomon",
//     "Darkdramon",
//     "Deathmon (Black)",
//     "Kuzuhamon",
//     "ChaosDukemon",
//     "MetalSeadramon",
//     "Valkyrimon",
//     "Justimon",
//     "Vikemon",
//     "BlackWarGreymon",
//     "GranKuwagamon",
//     "Sleipmon",
//     "Beelzebumon",
//     "Valdurmon",
//     "Neptunemon",
//     "Chronomon (Holy Mode)"
// ]

let digimonNameDisplay;
let digimonLevelDisplay;
let digimonImageDisplay;
let partyDigimonBox;
let partyDigimonDivs;
let enemyDigimonDiv;
let digimonInfoModal;
let starterSelection;
let attackButton;

// Locations Elements
let locationButtons;
let locationDivs;

// Maps Elements
let mapsMenuDiv;
let prevAreaButton;
let nextAreaButton;

/*************************
 * Menu Functions
 *************************/
// Returns the players from the current map to the main hub (Town)
let moveToLocation = (newLocation) => {
    handleLeavingLocation(game.getCurrentLocation());

    // Update the current location
    game.changeLocation(newLocation);

    // Handle the specific behavior for each location, like moving areas for Maps
    handleEnteringLocation(game.getCurrentLocation());
}

let handleLeavingLocation = (location) => {
    // Enable the button for the old area
    locationButtons[location].disabled = false;

    // Hide the old location's div
    locationDivs[location].style.display = "none";

    switch (location) {
        case Locations.Maps:
            // TODO: This is getting called before the BattleSystem ends the battle, will have to find a better place to call this
            displayUpdatedPlayerDigimonBattleInformation();
            break;
        case Locations.Town:
            break;
        default:
            break;
    }
}

let handleEnteringLocation = (location) => {
    // Disable the button for the new map
    locationButtons[location].disabled = true;
    
    // Show the new location's div
    locationDivs[location].style.display = "block";

    switch (location) {
        case Locations.Maps:
            movedToNewArea();
            break;
        case Locations.Town:
            break;
        default:
            break;
    }
} 

/*********************
 * Modify Player Info
 *********************/
let assignStarter = starterId => {
    game.assignStarter(starterId);
    document.getElementById("starter-modal").style.display = "none";

    game.getDigimonParty().forEach((digimon, index) => {
        setPartyDigimon(index, digimon);
    });
}

let setPartyDigimon = (id, digimon) => {
    let dataName = digimon.dataName;
    let displayName = Names[dataName][language_chosen] ?? dataName;
    partyDigimonDivs[id].querySelector("h2").innerHTML = displayName + " - Lv " + digimon.level;
    partyDigimonDivs[id].querySelector("img").src = "./images/digimon/" + dataName + (DigimonList[dataName][game.gameChosen].sprite ?? "") + ".png";
    partyDigimonDivs[id].querySelector("img").alt = displayName + " Image";
    partyDigimonDivs[id].style.display = "inline-block";
    updatePartyDigimonInformation(partyDigimonDivs[id], digimon);
}

/*************************
 * Map Functions
 *************************/
let movedToNewArea = () => {
    updatePrevNextAreaButtons();

    let availableDigimonDisplay = document.getElementById("wild-digimon-list");
    availableDigimonDisplay.textContent = "";
    document.getElementById("map-name").textContent = game.getCurrentMapName();

    // TODO: FIXME! (Make it look better and/or remove it)
    game._encountersManager.getDigimonAvailable().forEach(digimon => {
        document.getElementById("wild-digimon-list").textContent += Names[digimon.getDataName()][language_chosen] ?? digimon.getDataName() + ", ";
    });

    // TODO: Make a button the player must press to find an encounter?
    generateNewDigimonEncounter();
}

let updatePrevNextAreaButtons = () => {
    prevAreaButton.disabled = !game.isPreviousAreaUnlocked();
    nextAreaButton.disabled = !game.isNextAreaUnlocked();
}

/*********************
 * Battle Functions
 *********************/
let generateNewDigimonEncounter = () => setEnemyDigimon(game.generateNewDigimonEncounter());

let setEnemyDigimon = digimon => {
    let dataName = digimon.dataName;
    let displayName = Names[dataName][language_chosen] ?? dataName;
    enemyDigimonDiv.querySelector("img").src = "./images/digimon/" + dataName + (DigimonList[dataName][game.gameChosen].sprite ?? "") + ".png";
    enemyDigimonDiv.querySelector("img").alt = displayName + " Image";
    enemyDigimonDiv.querySelector("h3").innerHTML = displayName;
    enemyDigimonDiv.querySelectorAll("p")[0].innerHTML = "Level " + digimon.level;
    enemyDigimonDiv.querySelectorAll("p")[1].innerHTML = "HP " + digimon.currHP + " / " + digimon.maxHP;
    enemyDigimonDiv.style.display = "block";
}

/****************************
 * Player Feedback Functions
 ****************************/
let displayDigimonInfo = partySlot => {
    let digimon = game.player.getPartyDigimon(partySlot);
    let dataName = digimon.dataName;
    let displayName = Names[dataName][language_chosen] ?? dataName;
    digimonNameDisplay.innerHTML = displayName;
    digimonImageDisplay.src = "./images/digimon/" + dataName + (DigimonList[dataName][game.gameChosen].sprite ?? "") + ".png";
    digimonImageDisplay.alt = displayName + " Image";
    digimonLevelDisplay.innerHTML = digimon.level;
    digimonInfoModal.style.display = "block";
}

let updatePartyDigimonInformation = (partyDigimonDiv, digimon) => {
    partyDigimonDiv.querySelector(".hp-info").innerHTML = digimon.currHP + " / " + digimon.maxHP;
    partyDigimonDiv.querySelector(".attack-info").innerHTML = digimon.damage;
}

let displayUpdatedEnemyDigimonInformation = digimon => enemyDigimonDiv.querySelectorAll("p")[1].innerHTML = "HP " + digimon.currHP + " / " + digimon.maxHP;

let displayUpdatedPlayerDigimonBattleInformation = () => game.getDigimonParty().forEach((digimon, id) => updatePartyDigimonInformation(partyDigimonDivs[id], digimon));

let closeModal = () => digimonInfoModal.style.display = "none";

const game = new DWDSGameManager();

document.addEventListener("DOMContentLoaded", _ => {
    locationButtons = {};
    locationDivs = {};

    starterSelection = document.getElementById("starter-modal");

    if (game.getCurrPartySize() == 0) {
        // TODO: Change the code to be less hardcoded (Everything is still happening in the background while having no Digimon)
        starterSelection.style.display = "block";
    }

    // DEBUG: Change to not be hardcoded
    document.getElementById("current-map-dwds").style.backgroundImage = "url(images/maps/dataForest.png)";
    document.getElementById("current-map-dwds").style.backgroundSize = "100%";

    digimonInfoModal = document.getElementById("digimon-info-modal");
    digimonNameDisplay = digimonInfoModal.querySelector("h2");
    digimonImageDisplay = digimonInfoModal.querySelector("img");
    digimonLevelDisplay = document.getElementById("level-info");
    partyDigimonBox = document.getElementById("party-box");
    let partyDigimonTemplate = document.getElementById("party-digimon-template");

    // Create the default Party boxes
    for (let index = 0; index < game.getMaxPartySize(); index++) {
        partyDigimonBox.appendChild(partyDigimonTemplate.content.cloneNode(true));
    }

    partyDigimonDivs = partyDigimonBox.querySelectorAll(".party-digimon");
    document.getElementById("close-modal").addEventListener("click", closeModal);
    enemyDigimonDiv = document.getElementById("enemy-digimon-dwds");
    enemyDigimonDiv.style.display = "none";

    /***************
     * Maps Data
     ***************/
    mapsMenuDiv = document.getElementById("maps-menu-dwds");
    let mapsButton = document.getElementById("maps-button");
    locationButtons[Locations.Maps] = mapsButton;
    locationDivs[Locations.Maps] = mapsMenuDiv;
    mapsButton.addEventListener("click", function () {
        moveToLocation(Locations.Maps);
    });
    
    let townButton = document.getElementById("town-button");
    locationButtons[Locations.Town] = townButton;
    locationDivs[Locations.Town] = document.getElementById("town-menu-dwds");
    townButton.addEventListener("click", function () {
        moveToLocation(Locations.Town);
    });

    attackButton = document.getElementById("attack-button-dwds");
    attackButton.addEventListener("click", () => {
        let battleWon = game.battleSystem.playerAttack();
        if (battleWon) {
            // The player won the battle
            // Tell the game we've defeated a Digimon, so it updates the Story tasks if it applies, among other things
            if (game.digimonDefeated()) {
                // If a boss was defeated, we send the player back to Town to reset the Maps. Otherwise, a new area might have unlocked so update the prev/next Area buttons
                if(game.wasBossDefeated()) {
                    moveToLocation(Locations.Town);
                    game.clearBossEncounter();
                } else {
                    updatePrevNextAreaButtons();
                }
            }

            // TODO: Move to a place where the player triggers the next encounter? (Maybe a "NEXT" button appears after defeating a Digimon)
            generateNewDigimonEncounter();

            // TODO: Temporary code, need to do it less hardcoded and possibly elsewhere
            setPartyDigimon(0, game.getPartyDigimon(0));
            setPartyDigimon(1, game.getPartyDigimon(1));
            setPartyDigimon(2, game.getPartyDigimon(2));
        } else {
            // TODO: Update so it shows feedback for a Digimon that was defeated before showing the next one? Might not be necessary since some clickers ignore this last feedback in favor of making the game faster
            displayUpdatedEnemyDigimonInformation(game.battleSystem.getCurrentEnemyDigimon());
            // If this returns false, the player was defeated
            if(game.battleSystem.handleEnemyAttack()) {
                displayUpdatedPlayerDigimonBattleInformation();
            } else {
                moveToLocation(Locations.Town);
            }
        }
    });

    // TODO: Rerolls the current enemy Digimon, might need tweaking in the future
    document.getElementById("flee-button-dwds").addEventListener("click", generateNewDigimonEncounter);

    prevAreaButton = document.getElementById("prev-area-button");
    nextAreaButton = document.getElementById("next-area-button");

    prevAreaButton.addEventListener("click", () => {
        if (game.changeArea(-1)) {
            movedToNewArea();
        }
    });

    nextAreaButton.addEventListener("click", () => {
        if (game.changeArea(1)) {
            movedToNewArea();
        }
    });
    
    // Call the function displayDigimonInfo(partySlot) when the button is clicked
    Array.from(partyDigimonBox.querySelectorAll("button")).forEach((button, index) => {
        button.addEventListener("click", function() { displayDigimonInfo(index) })
    });

    // Add the button function to select a starter
    Array.from(starterSelection.querySelectorAll("button")).forEach((button, index) => {
        button.addEventListener("click", function() { assignStarter(index) })
    });
});

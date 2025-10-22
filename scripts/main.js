import { DWDSGame } from './classes/dwds classes/dwds_game.js'
import { Digimon } from './classes/digimon.js'
import { AreasList, DataNames, DigimonList, Locations, Names } from './constants.js'

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
let locationButtons;
let locationDivs;

// Areas Elements
let areasMenuDiv;
let prevSectionButton;
let nextSectionButton;

/*************************
 * Menu Functions
 *************************/
// Returns the players from the current area to the main hub (Town)
let moveToLocation = (newLocation) => {
    // TODO: Will have to make this stop any behavior from the current location, like resetting battles from Areas (remove enemy Digimon, heal player Digimon, etc etc)

    // Enable the button for the old area
    locationButtons[game.currLocation].disabled = false;

    // TODO: Hide the old location's div
    locationDivs[game.currLocation].style.display = "none";

    handleLeavingLocation(game.currLocation);

    // Update the current location
    game.currLocation = newLocation;

    // Disable the button for the new area
    locationButtons[game.currLocation].disabled = true;
    
    // Show the new location's div
    locationDivs[game.currLocation].style.display = "block";

    // TODO: Might have to handle the specific behavior for each location, like moving sections for Areas
    handleEnteringLocation(game.currLocation);
}

let handleLeavingLocation = (location) => {
    switch (location) {
        case Locations.Areas:
            game.battleSystem.endBattle();
            displayUpdatedPlayerDigimonBattleInformation();
            break;
        case Locations.Town:
            break;
        default:
            break;
    }
}

let handleEnteringLocation = (location) => {
    switch (location) {
        case Locations.Areas:
            movedToNewSection();
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
    var starter = new Digimon(game.getStarterDigimon(starterId), 3);
    game.player.addNewDigimon(starter);
    game.encounter.setStarterDigimon(game.getStarterDigimon(starterId));
    setPartyDigimon(0, starter);
    document.getElementById("starter-modal").style.display = "none";

    // DEBUG: Multiple starters for demo
    game.player.addNewDigimon(new Digimon(DataNames.DotAgumon, 3));
    game.player.addNewDigimon(new Digimon(DataNames.DotFalcomon, 3));
    setPartyDigimon(1, game.player.party[1]);
    setPartyDigimon(2, game.player.party[2]);
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
 * Area Functions
 *************************/
let movedToNewSection = () => {
    updatePrevNextSectionButtons();

    let availableDigimonDisplay = document.getElementById("wild-digimon-list");
    availableDigimonDisplay.innerHTML = "";
    document.getElementById("area-name").textContent = AreasList[game.gameChosen][game.areasManager.currArea].name;

    // DEBUG: Will need to fix up the location for this line
    game.encounter.newAreaEntered(game.areasManager.currArea, game.areasManager.currSection);

    // FIXME! (Make it look better)
    game.encounter.getDigimonAvailable().forEach(digimon => {
        document.getElementById("wild-digimon-list").innerHTML += Names[digimon.digimon][language_chosen] ?? digimon.digimon + ", ";
    });

    generateNewDigimonEncounter();
}

let updatePrevNextSectionButtons = () => {
    prevSectionButton.disabled = !game.areasManager.isPreviousSectionUnlocked();
    nextSectionButton.disabled = !game.areasManager.isNextSectionUnlocked();
}

/*********************
 * Battle Functions
 *********************/
let generateNewDigimonEncounter = () => {
    let enemyDigimons = [];
    let enemySpawned = game.encounter.generateRandomEncounter();
    let enemyDigimon = new Digimon(enemySpawned.digimon, enemySpawned.level);
    enemyDigimons.push(enemyDigimon);
    setEnemyDigimon(enemyDigimon);
    game.battleSystem.startBattle(enemyDigimons);
}

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
    let digimon = game.player.party[partySlot];
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

let displayUpdatedPlayerDigimonBattleInformation = () => game.player.party.forEach((digimon, id) => updatePartyDigimonInformation(partyDigimonDivs[id], digimon));

let closeModal = () => digimonInfoModal.style.display = "none";

const game = new DWDSGame();

document.addEventListener("DOMContentLoaded", _ => {
    locationButtons = {};
    locationDivs = {};

    starterSelection = document.getElementById("starter-modal");

    if (game.player.party.length == 0) {
        starterSelection.style.display = "block";
    }

    // DEBUG: Change to not be hardcoded
    document.getElementById("current-area-dwds").style.backgroundImage = "url(images/areas/dataForest.png)";
    document.getElementById("current-area-dwds").style.backgroundSize = "100%";

    digimonInfoModal = document.getElementById("digimon-info-modal");
    digimonNameDisplay = digimonInfoModal.querySelector("h2");
    digimonImageDisplay = digimonInfoModal.querySelector("img");
    digimonLevelDisplay = document.getElementById("level-info");
    partyDigimonBox = document.getElementById("party-box");
    let partyDigimonTemplate = document.getElementById("party-digimon-template");
    for (let index = 0; index < game.player.partySize; index++) {
        partyDigimonBox.appendChild(partyDigimonTemplate.content.cloneNode(true));
    }

    partyDigimonDivs = partyDigimonBox.querySelectorAll(".party-digimon");
    document.getElementById("close-modal").addEventListener("click", closeModal);
    enemyDigimonDiv = document.getElementById("enemy-digimon-dwds");
    enemyDigimonDiv.style.display = "none";

    /***************
     * Areas Data
     ***************/
    areasMenuDiv = document.getElementById("areas-menu-dwds");
    let areasButton = document.getElementById("areas-button");
    locationButtons[Locations.Areas] = areasButton;
    locationDivs[Locations.Areas] = areasMenuDiv;
    areasButton.addEventListener("click", function () {
        moveToLocation(Locations.Areas);
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
            // TODO: Temporary code, need to do it less hardcoded and possibly elsewhere
            // The player won the battle
            generateNewDigimonEncounter();
            setPartyDigimon(0, game.player.party[0]);
            setPartyDigimon(1, game.player.party[1]);
            setPartyDigimon(2, game.player.party[2]);
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

    prevSectionButton = document.getElementById("prev-section-button");
    nextSectionButton = document.getElementById("next-section-button");

    prevSectionButton.addEventListener("click", () => {
        if (game.areasManager.changeSection(-1)) {
            movedToNewSection();
        }
    });

    nextSectionButton.addEventListener("click", () => {
        if (game.areasManager.changeSection(1)) {
            movedToNewSection();
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

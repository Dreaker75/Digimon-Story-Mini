import { MapsList, GameProgress, SpecialValues } from "../data/constants.js";
import { DigimonEncounterData } from "../entities/digimon_encounter_data.js";

export class EncountersManager {
    game;
    starterDigimon;
    spawnableDigimon;
    // Array of boss Digimon the player will face when in a boss Area
    bossDigimon;
    bossOrdinals = {};

    constructor(game) {
        this.game = game;
        this.spawnableDigimon = [];
        this.bossDigimon = [];

        GameProgress.ds.forEach((storyPart, index) => {
            if (storyPart.type == SpecialValues.bosses) {
                this.bossOrdinals[storyPart.bosses[storyPart.bosses.length - 1].dataName] = index;
            }
        });
    }

    // TODO: Might need to make a DS-specific inherited version to take into account the starting Digimon
    enteredNewArea(mapArea, currStory) {
        this.spawnableDigimon = [];
        this.bossDigimon = [];

        MapsList[this.game][mapArea.getMapDataName()].digimonPool.forEach(currDigimon => {
            // TODO: Revisit this, as it may not only need one for bosses, but for quests and non-battle stories as well (ex. Pandamon unlocking more encounters in Drain Tunnel)
            if (currDigimon.foundIn.includes(mapArea.getAreaId())) {
                if (currDigimon.requirement === undefined ||
                   ((currDigimon.requirement.starter === undefined || currDigimon.requirement.starter === this.starterDigimon) &&
                   (currDigimon.requirement.story === undefined || this.bossOrdinals[currDigimon.requirement.story] < currStory))) {
                    this.spawnableDigimon.push(new DigimonEncounterData(currDigimon.digimon, currDigimon.level));
                }
            }
        });
    }

    /**
     * Assigns the bosses that spawn in this boss area
     * 
     * @param {string[]} bosses Array of DigimonEncounterData that has each boss' Data Name and Level
     */
    enteredBossArea(bosses) {
        this.spawnableDigimon = [];
        // Get the array of Bosses to defeat, if applicable
        this.bossDigimon = [];

        bosses.forEach(boss => {
            this.bossDigimon.push(new DigimonEncounterData(boss.dataName, boss.level));
        });
    }

    /**
     * 
     * @returns An array of Digimon Data from the pool of Digimon available in the current area. Returns a random Digimon if there are no bosses to fight, otherwise returns the array of Bosses.
     */
    // Gets a new Digimon for the player to fight in this area. If there are bosses in this area, they will be spawned first
    getNewDigimonEncounter() {
        if (this.bossDigimon.length > 0) {
            // Return the array of bosses (These will be fought one at a time in the battle system)
            return this.bossDigimon;
            // Return the current boss and increment the counter
        }

        return [this.generateRandomEncounter()];
    }

    // Returns a random Digimon from the available pool in the current location
    generateRandomEncounter() {
        return this.spawnableDigimon[Math.floor(Math.random() * this.spawnableDigimon.length)];
    }

    getDigimonAvailable() {
        return this.spawnableDigimon;
    }

    setStarterDigimon(starterDigimon) {
        this.starterDigimon = starterDigimon;
    }

    isInBosssArea() {
        return this.bossDigimon.length > 0;
    }
}
import { AreasList } from "../constants.js";

export class Encounters {
    game;
    // To know whether certain Digimon in an area were unlocked (after beating a specific Boss, etc)
    storyManager;
    starterDigimon;
    spawnableDigimon = [];

    constructor(game) {
        this.game = game;
    }

    // TODO: Might need to make a DWDS-specific inherited version to take into account the starting Digimon
    newAreaEntered(area, section) {
        this.spawnableDigimon = [];
        AreasList[this.game][area].digimonPool.forEach(currDigimon => {
            if (currDigimon.foundIn.includes(section)) {
                // TODO: Add check for encounters not yet unlocked (Boss, Quests)
                if (currDigimon.requirement === undefined || currDigimon.requirement.starter === undefined || currDigimon.requirement.starter === this.starterDigimon) {
                    this.spawnableDigimon.push(currDigimon);
                }
            }
        });
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
}
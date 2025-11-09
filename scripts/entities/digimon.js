import { DigimonList } from "../constants.js";

export class Digimon {
    // String to access the Digimon's information
    dataName;
    level = 0;

    // Numbers calculated every time the Level changes
    maxHP;
    damage;

    // Battle-only variables
    currHP;

    // Initialize the Digimon with the given dataname and level
    // maxLevel is the maximum level the Player has reached with a Digimon. It will be maxLevel + 1 when defeating a wild Digimon of the same of higher level
    constructor(dataName, level = 1) {
        this.dataName = dataName;
        this.level = level;
        this.recalculateStats();
    }

    // Function to increase the Digimon's Level by a certain amount (Culumon will make it increase by more than 1 at a time)
    // - maxLevel: if this is -1, the Digimon's level can increase past the Player's Max Level. This will happen when beating an enemy in battle
    levelUp(maxLevel, levelsGained = 1) {
        // There is no change if the Digimon is already at the max level, so no need to recalculate stuff
        if (this.level == maxLevel)
            return;
        // Level up this Digimon the amount of levels specified, up to the Max Level reached
        // Don't Level a Digimon up past the MAX_LEVEL (Shouldn't be necessary, since it's checked before calling levelUp)
        this.level = Math.min(this.level + levelsGained, maxLevel);
        this.recalculateStats();
    }

    //////////////////////////////
    // BATTLE-ONLY FUNCTIONS
    //////////////////////////////
    startBattle() {
        this.currHP = this.maxHP;
    }

    takeDamage(damage) {
        this.currHP -= damage;
        if (this.currHP < 0) {
            this.currHP = 0;
        }
        return this.currHP == 0;
    }

    //////////////////////////////
    // HELPER FUNCTIONS
    //////////////////////////////
    recalculateStats() {
        this.currHP = this.maxHP = this.level * DigimonList[this.dataName].stage.value * 10;
        this.damage = this.level * DigimonList[this.dataName].stage.value;
    }
}

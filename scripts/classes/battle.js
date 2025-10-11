import { MAX_LEVEL, DigimonList } from "../constants.js";

export class Battle {
    constructor(player) {
        this.player = player;
    }

    enemyDigimon = [];
    currEnemy = 0;
    playerDamage = 0;
    isBossFight = false;
    // Reference to the Player
    player;

    startBattle(enemyDigimon) {
        this.currEnemy = 0;
        this.enemyDigimon = enemyDigimon;
        this.calculatePlayerDamage();
    }

    playerAttack() {
        console.log(this.player);
        if (this.enemyDigimon[this.currEnemy].takeDamage(this.playerDamage)) {
            // Grab the information of the Digimon defeated
            var enemyDigimonInfo = DigimonList[this.enemyDigimon[this.currEnemy].dataName];
            // Increase the Species EXP based on the Digimon defeated
            // TODO: Need to grab the appropiate Species for Digimon that change Species between games
            this.player.increaseSpeciesExperience(enemyDigimonInfo.species, enemyDigimonInfo.stage.value)

            let enemyLevel = this.enemyDigimon[this.currEnemy].level;
            // Save whether the current Player's Max Level is higher, or the Enemy Digimon's Level + 1 is (Level + 1 because defeating a higher Level Digimon can increase the Max Level up to 1 higher than its own)
            let maxLevel = Math.min(Math.max(this.player.maxLevel, enemyLevel + 1), MAX_LEVEL);

            this.player.party.forEach(digimon => {
                if (enemyLevel >= digimon.level) {
                    // Level up the Digimon with the max level found and the current level up boost
                    digimon.levelUp(maxLevel, this.player.levelUpBoost);
                    // The current Digimon levelled up past the Max Level
                    if (this.player.maxLevel < MAX_LEVEL && digimon.level > this.player.maxLevel) {
                        this.player.maxLevel = maxLevel;
                    }
                }
            });

            if (!this.isBossFight) {
                // Drop the enemy Digimon item for converting it
                this.dropDigimonItem();
            }

            this.currEnemy++;
            // Returns true if the battle is won, false otherwise
            return this.currEnemy >= this.enemyDigimon.length;
        }
    }

    enemyAttack() {
        // TODO: Add extra behavior for boss fights.
        //  1 - Random chance to attack multiple Digimon at once
        //  2 - Random chance to hit multiple times
        //  3 - Higher HP and/or Atk than normal Digimon?
        if (this.isBossFight) {

        }
        else {
            // Select a target that is still able to fight
            let targetDigimon;
            do {
                targetDigimon = this.player.getRandomActiveDigimon();
            } while (targetDigimon.currHP == 0);

            if (targetDigimon.takeDamage(this.enemyDigimon[this.currEnemy].damage)) {
                // A Digimon from the player's party died, recalculate the damage
                this.calculatePlayerDamage();
            }
        }
    }

    calculatePlayerDamage() {
        this.playerDamage = 0;
        // TODO: Currently uses even reserve Digimon's damage, might need to change to only use active ones, depends on game
        this.player.party.forEach(digimon => {
            // Don't include the damage from defeated Digimon
            if (digimon.currHP > 0) {
                this.playerDamage += digimon.damage;
            }
        });
    }

    dropDigimonItem() {
        this.player.addDigimonItem(this.enemyDigimon[this.currEnemy].dataName)
    }

    // TODO: Use to give feedback on battle, might need to be changed in the future as it feels a bit hacky at the moment
    getCurrentEnemyDigimon() {
        return this.enemyDigimon[this.currEnemy];
    }
}
import { EnemyTypes } from "../data/constants.js";
import { Digimon } from "../entities/digimon.js";
import { EnemyAttack } from "../entities/enemy_attack.js";

export class BattleManager {
    // Array of Digimon objects representing the enemy Digimon in this battle
    enemyDigimon = [];
    currEnemy = 0;
    playerDamage = 0;
    bossFight = false;
    defeatedDigimon = null;
    // Reference to the Player's party
    playerParty = [];

    /**
     * Initializes all the battle variables
     * @param enemyDigimon - a DigimonPool object (like found in constants.js)
     */
    startBattle(enemyDigimon, playerParty, bossFight = false) {
        this.currEnemy = 0;
        this.enemyDigimon = [];
        this.bossFight = bossFight;
        this.playerParty = playerParty;

        enemyDigimon.forEach(digimonData => {
            let newEnemyDigimon = new Digimon(digimonData.getDataName(), digimonData.getLevel());
            newEnemyDigimon.initializeForBattle();
            this.enemyDigimon.push(newEnemyDigimon);
        });
    }

    endBattle() {
        this.currEnemy = 0;
        this.enemyDigimon = [];
        this.playerParty.forEach(digimon => {
            digimon.initializeForBattle();
        });
    }

    playerAttack() {
        this.updatePlayerBattleInfo();

        if (this.enemyDigimon[this.currEnemy].takeDamage(this.playerDamage)) {
            // Save the Digimon defeated to return to the Controller
            this.defeatedDigimon = this.enemyDigimon[this.currEnemy];
            
            this.currEnemy++;
            // Returns true if the battle is won, false otherwise
            return this.currEnemy >= this.enemyDigimon.length;
        } else {
            this.defeatedDigimon = null;
        }
    }

    /**
     * Obtain the enemy turn
     * @returns an EnemyAttack object with how much damage and what type of attack the enemy Digimon made
     */
    getEnemyTurn() {
        if (this.bossFight) {
            // As of right now, all bosses will have a 1/4 chance to deal an aoe hit instead of a normal hit.
            // TODO: Revisit this for the final version of the game or future games
            let enemyType = EnemyTypes.normal;
            let randomNumber = Math.floor(Math.random() * 100);
            if (randomNumber < 25) {
                enemyType = EnemyTypes.aoe;
            }
            // let enemyType = (() => {
            //     switch (Math.floor(Math.random() * 2)) {
            //         case 1:
            //             return EnemyTypes.aoe;
            //         // TODO: These 2 might be too strong at the moment to implement, come back to this when the full game is done, or for DSSXW
            //         // case 2:
            //         //     return EnemyTypes.doubleHit;
            //         // case 3:
            //         //     return EnemyTypes.tripleHit;
            //         default:
            //             return EnemyTypes.normal;
            //     }
            // })();
            return new EnemyAttack(this.enemyDigimon[this.currEnemy].damage, enemyType);
        }

        return new EnemyAttack(this.enemyDigimon[this.currEnemy].damage);
    }

    updatePlayerBattleInfo() {
        // Update the damage
        this.playerDamage = 0;
        // TODO: Currently uses even reserve Digimon's damage, might need to change to only use active ones, depends on game
        this.playerParty.forEach(digimon => {
            // Don't include the damage from defeated Digimon
            if (digimon.currHP > 0) {
                this.playerDamage += digimon.damage;
            }
        });

        // If the damage is still 0, there was no Digimon alive
        if (this.playerDamage === 0) {
            // We return false to inform the player was defeated
            return false;
        }

        return true;
    }

    getDefeatedDigimon() {
        return this.defeatedDigimon;
    }

    /**
     * 
     * @returns true if the Digimon drop Scan Data / DigiMelody, false otherwise
     */
    // TODO: DSSXW will override this to include whether the Digimon dropped a DigiMelody
    didDigimonDropData() {
        // Boss Digimon don't drop Scan Data
        return !this.bossFight;
    }

    // TODO: Use to give feedback on battle, might need to be changed in the future as it feels a bit hacky at the moment
    getCurrentEnemyDigimon() {
        return this.enemyDigimon[this.currEnemy];
    }
}
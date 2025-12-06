import { EnemyTypes } from "../data/constants.js";

export class EnemyAttack {
    #attackType;
    #damage;

    constructor(damage, attackType = EnemyTypes.normal) {
        this.#attackType = attackType;
        this.#damage = damage;
    }

    getAttackType() { return this.#attackType };
    getDamage() { return this.#damage };
}
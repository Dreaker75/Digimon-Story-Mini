import { Game as GameManager } from '../game_manager.js'
import { DWDSPlayerManager } from "./dwds_player_manager.js";
import { BattleManager } from "../battle_manager.js";
import { DataNames } from "../../constants.js";
import { Digimon } from '../../entities/digimon.js';

/*
    Species amount per game

    DWDS
    AQU: 26
    BST: 33
    BRD: 25
    DAR: 35
    DRG: 33
    HOL: 35
    INS: 26
    MAC: 26
    PLN: 0
    TOTAL: 239

    DWDD
    AQU: 48
    BST: 53
    BRD: 34
    DAR: 65
    DRG: 44
    HOL: 54
    INS: 46
    MAC: 53
    PLN: 0
    TOTAL: 397
*/

export class DWDSGameManager extends GameManager {
    #starterDigimonList = [DataNames.Koromon, DataNames.Tsunomon, DataNames.Tanemon];

    constructor() {
        super();
        this.player = new DWDSPlayerManager(6);
        this.battleSystem = new BattleManager(this.player);
    }

    /**********************
     * PLAYER FUNCTIONS
     **********************/

    getMaxPartySize() {
        return this.player.getMaxPartySize();
    }

    getCurrPartySize() {
        return this.player.getCurrPartySize();
    }
    
    getDigimonParty() {
        return this.player.getDigimonParty();
    }
    
    getPartyDigimon(index) {
        return this.player.getPartyDigimon(index);
    }

    assignStarter(index) {
        let starterDataName = this.#starterDigimonList[index];
        this.player.addNewDigimon(new Digimon(starterDataName, 3));
        this._encountersManager.setStarterDigimon(starterDataName);

        // DEBUG: Multiple starters for demo
        this.player.addNewDigimon(new Digimon(DataNames.DotAgumon, 3));
        this.player.addNewDigimon(new Digimon(DataNames.DotFalcomon, 3));
    }
}

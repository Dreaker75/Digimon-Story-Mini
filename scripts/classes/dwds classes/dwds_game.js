import { Game } from '../game.js'
import { PlayerDWDS } from "./dwds_player.js";
import { Battle } from "../battle.js";
import { Encounters } from "../encounters.js";
import { DataNames } from "../../constants.js";
import { AreasManager } from '../areas_manager.js';
import { StoryManager } from '../story_manager.js';

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

export class DWDSGame extends Game {
    #starterDigimonList = [DataNames.Koromon, DataNames.Tsunomon, DataNames.Tanemon];

    player = new PlayerDWDS(6);
    // TODO: Move generic managers to the base Game class
    battleSystem = new Battle(this.player);
    encounter = new Encounters(this.game_chosen);
    areasManager = new AreasManager(this.encounter);
    storyManager = new StoryManager(this.areasManager);

    getStarterDigimon = (id) => this.#starterDigimonList[id];
}

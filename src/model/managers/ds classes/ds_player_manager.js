import { PlayerManager } from "../player_manager.js";
import { DataNames, DigimonIDs } from "../../data/constants.js";

export class DSPlayerManager extends PlayerManager {
    
    /**
     * Overwritten function from PlayerManager to add the Scan Data based on the corresponding game's id.
     * @param {*} digimon dataName of the Digimon to add
     */
    addDigimonData(digimon) {
        this._digimonItems[DigimonIDs[digimon][DataNames.ds]]++;
    }
}

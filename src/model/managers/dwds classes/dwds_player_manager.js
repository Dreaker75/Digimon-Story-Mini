import { PlayerManager } from "../player_manager.js";
import { DigimonIDs } from "../../data/constants.js";

export class DWDSPlayerManager extends PlayerManager {
    
    addDigimonItem(digimon) {
        // TODO: Overwrite this to access the corresponding id based on the current game
        this.digimonItems[DigimonIDs[digimon]["dwds"]]++;
    }
}

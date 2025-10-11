import { Player } from "../player.js";
import { DigimonIDs } from "../../constants.js";

export class PlayerDWDS extends Player {
    addDigimonItem(digimon) {
        // TODO: Overwrite this to access the corresponding id based on the current game
        this.digimonItems[DigimonIDs[digimon]["dwds"]]++;
    }
}

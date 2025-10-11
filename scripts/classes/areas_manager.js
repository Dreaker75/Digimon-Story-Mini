import { AreasList, DataNames } from "../constants.js";

export class AreasManager {
    encountersManager;
    currArea;
    currSection;
    areasUnlocked = {};

    constructor(encountersManager) {
        this.encountersManager = encountersManager;
        Array.from(Object.values(AreasList.dwds)).forEach(area => {
            this.areasUnlocked[area.dataName] = [];
            Array.from(area.sections).forEach(() => {
                this.areasUnlocked[area.dataName].push(false);
            })
        })

        this.currArea = DataNames.dataForest;
        this.currSection = 0;
        this.areasUnlocked[this.currArea][this.currSection] = true;
    }

    unlockNewSection(area, section) {
        this.areasUnlocked[area][section - 1] = true;
    }

    // direction - value to know if we're moving to the previous section of the area or the next (-1 or 1)
    changeSection(direction) {
        if ((this.currSection === 0 && direction === -1) || (this.currSection + 1 >= this.areasUnlocked[this.currArea].length && direction === 1)) {
            console.log("Error: Out of bounds");
            return;
        }

        // TODO: Check if the section is unlocked

        this.currSection += direction;
        this.encountersManager.newAreaEntered(this.currArea, this.currSection);

        // TODO: Disable Prev/Next Button if next section is locked or there is no prev/next section
    }
}
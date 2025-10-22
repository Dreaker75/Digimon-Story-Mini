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

    isNextSectionUnlocked() {
        // We check if there is another section after this one
        if (this.currSection + 1 >= this.areasUnlocked[this.currArea].length) {
            return false;
        }

        // Return whether the next section is unlocked
        return this.areasUnlocked[this.currArea][this.currSection + 1];
    }

    isPreviousSectionUnlocked() {
        // This is the first section of the area, there's no previous section
        if (this.currSection == 0) {
            return false;
        }

        // Return whether the previous section is unlocked
        return this.areasUnlocked[this.currArea][this.currSection - 1];
    }

    unlockNewSection(area, section) {
        this.areasUnlocked[area][section] = true;
    }

    // direction - value to know if we're moving to the previous section of the area or the next (-1 or 1)
    changeSection(direction) {
        if ((this.currSection === 0 && direction === -1) || (this.currSection + 1 >= this.areasUnlocked[this.currArea].length && direction === 1)) {
            console.log("Error: Out of bounds");
            return false;
        }

        // Check if the section is unlocked
        if (!this.areasUnlocked[this.currArea][this.currSection + direction]) {
            console.log("Error: Section locked");
            return false;
        }

        this.currSection += direction;
        this.encountersManager.newAreaEntered(this.currArea, this.currSection);

        // TODO: Disable Prev/Next Button if next section is locked or there is no prev/next section
        return true;
    }
}
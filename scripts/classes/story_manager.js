import { GameProgress, SpecialValues } from "../constants.js";

export class StoryManager {
    areasManager;
    storyType;
    currStory;
    amountLeft;
    targetArea;
    targetSection;
    bossOrdinals = {};

    constructor(areasManager) {
        this.areasManager = areasManager;
        // TODO: Change to account for multiple games
        // Add all bosses to the boss array, which will be a way to translate it to story progress, to check if an area or Digimon should be unlocked
        this.currStory = -1;
        GameProgress.dwds.forEach((storyPart, index) => {
            if (storyPart.type == SpecialValues.boss) {
                this.bossOrdinals[storyPart.boss] = index;
            }
        });
        
        this.nextStory();
    }

    // Returns true if the task was completed, false otherwise
    digimonDefeated() {
        if (this.areasManager.isInAreaAndSection(this.targetArea, this.targetSection)) {
            this.amountLeft--;
            if (this.amountLeft === 0) {
                this.storyTaskCompleted();
                return true;
            }
        }
        return false;
    }

    storyTaskCompleted() {
        // TODO: Change to account for multiple games
        let nextStoryTask = GameProgress.dwds[this.currStory];
        if (nextStoryTask.unlocks !== undefined) {
            this.areasManager.unlockNewSection(nextStoryTask.unlocks.area, nextStoryTask.unlocks.section);
        }

        // TODO: Might move this elsewhere
        this.nextStory();
    }

    nextStory() {
        this.currStory++;
        // TODO: Adapt based on game
        let nextStoryTask = GameProgress.dwds[this.currStory];
        this.storyType = nextStoryTask.type;

        if (this.storyType == SpecialValues.defeat) {
            this.amountLeft = nextStoryTask.amount;
        }
        else if (this.storyType == SpecialValues.boss) {
            this.amountLeft = 1;
        }

        this.targetArea = nextStoryTask.area;
        this.targetSection = nextStoryTask.section;
    }
}
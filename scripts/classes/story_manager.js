import { GameProgress, SpecialValues } from "../constants.js";

export class StoryManager {
    areasManager;
    storyType;
    currStory = 0;
    amountLeft;
    targetArea;
    targetSection;
    bossOrdinals = {};

    constructor(areasManager) {
        this.areasManager = areasManager;
        // TODO: Add all bosses to the boss array, which will be a way to translate it to story progress, to check if an area or Digimon should be unlocked
        // TODO: Change to account for multiple games
        GameProgress.dwds.forEach((storyPart, index) => {
            if (storyPart.type == SpecialValues.boss) {
                this.bossOrdinals[storyPart.boss] = index;
            }
        });
    }

    storyTaskCompleted() {
        let nextStoryTask = GameProgress.dwds[this.currStory];
        if (nextStoryTask.unlocks !== undefined) {
            this.areasManager.unlockNewSection(GameProgress.dwds[this.currStory].area, GameProgress.dwds[this.currStory].section);
        }
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
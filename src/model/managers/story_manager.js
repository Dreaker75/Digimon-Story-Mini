import { GameProgress, SpecialValues } from "../data/constants.js";
import { MapArea } from "../entities/map_area.js";

export class StoryManager {
    #gameChosen;
    #currStory;
    #storyType;
    #amountLeft;
    #targetMapArea;
    #bossDefeated;

    // Elements to return to game_manager when finishing a story task
    #mapAreaUnlocked;

    constructor(gameChosen) {
        this.#gameChosen = gameChosen;
        this.#currStory = -1;
        this.#bossDefeated = false;
        this.#mapAreaUnlocked = null;
        this.nextStory();
    }

    wasBossDefeated() { return this.#bossDefeated; }
    getCurrentStory() { return this.#currStory; }
    getTargetMapArea() { return this.#targetMapArea; }

    /**
     * 
     * @returns the last MapArea unlocked, if any, or null
     */
    getLastMapAreaUnlocked() {
        let lastMapAreaUnlocked = this.#mapAreaUnlocked;
        // Sets the mapAreaUnlocked variable to null for the future
        if (this.#mapAreaUnlocked !== null) this.#mapAreaUnlocked = null;
        return lastMapAreaUnlocked;
    }

    // Returns whether the player is currently in a boss are
    isInBossArea(currMapArea) {
        return this.#storyType === SpecialValues.bosses && this.#targetMapArea.isSameMapArea(currMapArea);
    }

    // Returns the array of bosses that need to be defeated for the current story, or an empty array if the current story is not a boss story
    getCurrentBosses() {
        if (this.#storyType === SpecialValues.bosses){
            return GameProgress[this.#gameChosen][this.#currStory].bosses;
        }
        else
            return [];
    }

    // Returns true if the task was completed, false otherwise
    digimonDefeated() {
        this.#amountLeft--;
        if (this.#amountLeft === 0) {
            this.storyTaskCompleted();
            this.nextStory();
            return true;
        }
        return false;
    }

    storyTaskCompleted() {
        // Obtain the task the player completed
        let lastStoryTask = GameProgress[this.#gameChosen][this.#currStory];
        
        this.#bossDefeated = lastStoryTask.type == SpecialValues.bosses;
        if (lastStoryTask.unlocks === undefined) {
            this.#mapAreaUnlocked = null;
        // If completing this task unlocked a new area
        } else {
            // Saves the new area that was unlocked
            this.#mapAreaUnlocked = new MapArea(lastStoryTask.unlocks.map, lastStoryTask.unlocks.area);
        }
    }

    nextStory() {
        this.#currStory++;
        let nextStoryTask = GameProgress[this.#gameChosen][this.#currStory];
        this.#storyType = nextStoryTask.type;

        if (this.#storyType == SpecialValues.defeat) {
            this.#amountLeft = nextStoryTask.amount;
        }
        else if (this.#storyType == SpecialValues.bosses) {
            this.#amountLeft = 1;
        }

        this.#targetMapArea = new MapArea(nextStoryTask.map, nextStoryTask.area);
    }
}
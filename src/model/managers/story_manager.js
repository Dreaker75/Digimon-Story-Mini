import { GameProgress, SpecialValues } from "../data/constants.js";
import { MapArea } from "../entities/map_area.js";

export class StoryManager {
    #currStory;
    storyType;
    amountLeft;
    targetMapArea;
    #bossDefeated;

    // Elements to return to game_manager when finishing a story task
    #mapAreaUnlocked;

    constructor() {
        // TODO: Change to account for multiple games
        // Add all bosses to the boss array, which will be a way to translate it to story progress, to check if an area or Digimon should be unlocked
        this.#currStory = -1;
        this.#bossDefeated = false;
        this.#mapAreaUnlocked = null;
        this.nextStory();
    }

    wasBossDefeated() {
        return this.#bossDefeated;
    }

    getCurrentStory() {
        return this.#currStory;
    }
    
    getTargetMapArea() {
        return this.targetMapArea;
    }

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
        return this.storyType === SpecialValues.bosses && this.targetMapArea.isSameMapArea(currMapArea);
    }

    // Returns the array of bosses that need to be defeated for the current story, or an empty array if the current story is not a boss story
    getCurrentBosses() {
        if (this.storyType === SpecialValues.bosses){
            return GameProgress.dwds[this.#currStory].bosses;
        }
        else
            return [];
    }

    // Returns true if the task was completed, false otherwise
    digimonDefeated() {
        this.amountLeft--;
        if (this.amountLeft === 0) {
            // TODO: If the task completed was a Boss battle, either return the player to Town or restore the normal encounters in this area
            this.storyTaskCompleted();
            this.nextStory();
            return true;
        }
        return false;
    }

    storyTaskCompleted() {
        // TODO: Change to account for multiple games
        // Obtain the task the player completed
        let lastStoryTask = GameProgress.dwds[this.#currStory];
        
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
        // TODO: Adapt based on game
        let nextStoryTask = GameProgress.dwds[this.#currStory];
        this.storyType = nextStoryTask.type;

        if (this.storyType == SpecialValues.defeat) {
            this.amountLeft = nextStoryTask.amount;
        }
        else if (this.storyType == SpecialValues.bosses) {
            this.amountLeft = 1;
        }

        this.targetMapArea = new MapArea(nextStoryTask.map, nextStoryTask.area);
    }
}
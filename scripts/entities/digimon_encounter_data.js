export class DigimonEncounterData {
    #dataName;
    #level;

    constructor(dataName, level) {
        this.#dataName = dataName;
        this.#level = level;
    }

    getDataName() {
        return this.#dataName;
    }

    getLevel() {
        return this.#level;
    }
}
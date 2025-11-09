export class MapArea {
    #mapDataName;
    #areaId;

    constructor(mapDataName, areaId) {
        this.#mapDataName = mapDataName;
        this.#areaId = areaId;
    }

    getMapDataName() {
        return this.#mapDataName;
    }

    getAreaId() {
        return this.#areaId;
    }

    moveToMapArea(mapDataName, areaId) {
        this.#mapDataName = mapDataName;
        this.moveToArea(areaId);
    }

    moveToArea(areaId) {
        this.#areaId = areaId;
    }

    isSameMapArea(otherMapArea) {
        return this.getMapDataName() === otherMapArea.getMapDataName() && this.getAreaId() == otherMapArea.getAreaId();
    }
}
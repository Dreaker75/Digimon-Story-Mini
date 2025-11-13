import { MapsList, DataNames } from "../data/constants.js";
import { MapArea } from "../entities/map_area.js";

export class MapsManager {
    currMapArea;
    mapAreasUnlocked = {};

    constructor() {
        Array.from(Object.values(MapsList.dwds)).forEach(area => {
            this.mapAreasUnlocked[area.dataName] = [];
            Array.from(area.areas).forEach(() => {
                this.mapAreasUnlocked[area.dataName].push(false);
            })
        });
        
        this.currMapArea = new MapArea(DataNames.dataForest, 0);
        this.mapAreasUnlocked[this.currMapArea.getMapDataName()][this.currMapArea.getAreaId()] = true;
    }

    getCurrentMapArea() {
        return this.currMapArea;
    }

    getCurrentMapName(currGame) {
        return MapsList[currGame][this.currMapArea.getMapDataName()].name;
    }

    isInMapArea(mapArea) {
        return this.currMapArea.isSameMapArea(mapArea);
    }

    isNextAreaUnlocked() {
        // We check if there is another area after this one
        if (this.currMapArea.getAreaId() + 1 >= this.mapAreasUnlocked[this.currMapArea.getMapDataName()].length) {
            return false;
        }

        // Return whether the next area is unlocked
        return this.mapAreasUnlocked[this.currMapArea.getMapDataName()][this.currMapArea.getAreaId() + 1];
    }

    isPreviousAreaUnlocked() {
        // This is the first area of the area, there's no previous area
        if (this.currMapArea.getAreaId() == 0) {
            return false;
        }

        // Return whether the previous area is unlocked
        return this.mapAreasUnlocked[this.currMapArea.getMapDataName()][this.currMapArea.getAreaId() - 1];
    }

    unlockNewMapArea(mapArea) {
        this.mapAreasUnlocked[mapArea.getMapDataName()][mapArea.getAreaId()] = true;
    }

    // direction - value to know if we're moving to the previous area of the area or the next (-1 or 1)
    isAreaUnlocked(direction) {
        if ((this.currMapArea.getAreaId() === 0 && direction === -1) || (this.currMapArea.getAreaId() + 1 >= this.mapAreasUnlocked[this.currMapArea.getMapDataName()].length && direction === 1)) {
            return false;
        }

        // Check if the area is unlocked
        if (!this.mapAreasUnlocked[this.currMapArea.getMapDataName()][this.currMapArea.getAreaId() + direction]) {
            return false;
        }

        return true;
    }

    isMapUnlocked(mapDataName) {
        // Check if the map is unlocked
        return this.mapAreasUnlocked[mapDataName] !== undefined && this.mapAreasUnlocked[mapDataName][0];
    }

    moveToMapArea(mapDataName, areaId) {
        this.currMapArea.moveToMapArea(mapDataName, areaId);
    }
}
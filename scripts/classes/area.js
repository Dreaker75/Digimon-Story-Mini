export class Area {
    name;
    sections;

    constructor(name, sections) {
        this.name = name;
        this.sections = sections;
    }

    unlockSection(section) {
        this.sections[section - 1] = true;
    }

    isSectionUnlocked(section = 1) {
        return this.sections[section - 1];
    }
}
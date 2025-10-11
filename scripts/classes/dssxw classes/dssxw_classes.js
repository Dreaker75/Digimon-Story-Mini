
class BattleDSSXW extends Battle {
    dropDigimonItem() {
        // Drop the DigiMelody at a 1 / 2 to the power of the Digimon's stage
        if(Math.floor(Math.random() * (2 ** DigimonList[this.enemyDigimon[this.currEnemy].dataName].stage.value)) == 0){
            super();
        }
    }
}

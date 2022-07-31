const Character = require('./character')

class Cleric extends Character {
    constructor (name, race, playerName, clericSubClass, holySymbol, deity) {
        super(name, race, playerName);
        this.clericSubClass = clericSubClass;
        this.holySymbol = holySymbol;
        this.deity = deity;
    }

    getClass() {
        return "Cleric";
    }
    getClericSubClass() {
        return this.clericSubClass;
    }
     getHolySymbol() {
         return this.holySymbol;
     }
     getDeity() {
         return this.deity;
     }
     
  }

module.exports = Cleric;
const Character = require('./character')

class Warlock extends Character {
    constructor (name, race, playerName, warlockSubClass, warlockImplement, patron) {
        super(name, race, playerName);
        this.warlockSubClass = warlockSubClass;
        this.warlockImplement = warlockImplement;
        this.patron = patron;
    }

    getClass() {
        return "Warlock";
    }
    getwarlockSubClass() {
        return this.warlockSubClass;
    }
     getwarlockImplement() {
         return this.warlockImplement;
     }
     getpatron() {
         return this.patron;
     }

        }

module.exports = Warlock;
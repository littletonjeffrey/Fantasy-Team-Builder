const Character = require('./character')

class Sorcerer extends Character {
    constructor (name, race, playerName, sorcSubClass, sorcImplement) {
        super(name, race, playerName);
        this.sorcSubClass = sorcSubClass;
        this.sorcImplement = sorcImplement;
    }

    getClass() {
        return "Sorcerer";
    }
    getSorcSubClass() {
        return this.sorcSubClass;
    }
     getSorcImplement() {
         return this.sorcImplement;
     }

        }

module.exports = Sorcerer;

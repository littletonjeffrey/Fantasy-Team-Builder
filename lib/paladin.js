const Character = require('./character')

class Paladin extends Character {
    constructor (name, race, playerName, palSubClass, palDeity) {
        super(name, race, playerName);
        this.palSubClass = palSubClass;
        this.palDeity = palDeity;
    }

    getClass() {
        return "Paladin";
    }
    getpalSubClass() {
        return this.palSubClass;
     }
     getpalDeity() {
         return this.palDeity;
     }
}

module.exports = Paladin;
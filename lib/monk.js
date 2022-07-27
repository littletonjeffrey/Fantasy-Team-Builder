const Character = require('./character')

class Monk extends Character {
    constructor (name, race, playerName, monkSubClass, monkWeapon) {
        super(name, race, playerName);
        this.monkSubClass = monkSubClass;
        this.monkWeapon = monkWeapon;
    }

    getClass() {
        return "Monk";
    }
    getmonkSubClass() {
        return this.monkSubClass;
    }
     getmonkWeapon() {
         return this.monkWeapon;
     }
}

module.exports = Monk;
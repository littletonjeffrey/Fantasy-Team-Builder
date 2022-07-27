const Character = require('./character')

class Barbarian extends Character {
    constructor (name, race, playerName, barSubClass, barWeapon) {
        super(name, race, playerName);
        this.barSubClass = barSubClass;
        this.barWeapon = barWeapon;
    }

    getClass() {
        return "Barbarian";
    }
    getbarSubClass() {
        return this.barSubClass;
    }
     getbarWeapon() {
         return this.barWeapon;
     }
}

module.exports = Barbarian;
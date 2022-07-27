const Character = require('./character')

class Artificer extends Character {
    constructor (name, race, playerName, artSubClass, artWeapon) {
        super(name, race, playerName);
        this.artSubClass = artSubClass;
        this.artWeapon = artWeapon;
    }

    getClass() {
        return "Artificer";
    }
    getartSubClass() {
        return this.artSubClass;
    }
     getartWeapon() {
         return this.artWeapon
;
     }
}

module.exports = Artificer;
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
    getBarSubClass() {
        return this.barSubClass;
    }
     getBarWeapon() {
         return this.barWeapon;
     }

     
  }     

module.exports = Barbarian;
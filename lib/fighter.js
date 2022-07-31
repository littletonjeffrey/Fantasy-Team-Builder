const Character = require('./character')

class Fighter extends Character {
    constructor (name, race, playerName, fightSubClass, fightWeapon) {
        super(name, race, playerName);
        this.fightSubClass = fightSubClass;
        this.fightWeapon = fightWeapon;
    }

    getClass() {
        return "Fighter";
    }
    getfightSubClass() {
        return this.fightSubClass;
    }
     getfightWeapon() {
         return this.fightWeapon;
     }
     
  }

module.exports = Fighter;
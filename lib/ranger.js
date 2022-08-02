const Character = require("./character");

class Ranger extends Character {
  constructor(name, race, playerName, rangSubClass, rangWeapon, favEnemy) {
    super(name, race, playerName);
    this.rangSubClass = rangSubClass;
    this.rangWeapon = rangWeapon;
    this.favEnemy = favEnemy;
  }

  getClass() {
    return "Ranger";
  }
  getRangSubClass() {
    return this.rangSubClass;
  }
  getRangWeapon() {
    return this.rangWeapon;
  }
  getFavEnemy() {
    return this.favEnemy;
  }
}

module.exports = Ranger;

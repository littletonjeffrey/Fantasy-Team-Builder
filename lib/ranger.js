const Character = require("./character");

class Ranger extends Character {
  constructor(name, race, playerName, rangSubClass, rangWeapon, favenemy) {
    super(name, race, playerName);
    this.rangSubClass = rangSubClass;
    this.weapon = weapon;
    this.favenemy = favenemy;
  }

  getClass() {
    return "Ranger";
  }
  getrangSubClass() {
    return this.rangSubClass;
  }
  getRangWeapon() {
    return this.rangWeapon;
  }
  getfavenemy() {
    return this.favenemy;
  }
}

module.exports = Ranger;

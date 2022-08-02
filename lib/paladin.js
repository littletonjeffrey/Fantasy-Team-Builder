const Character = require("./character");

class Paladin extends Character {
  constructor(name, race, playerName, palSubClass, palDeity, palWeapon) {
    super(name, race, playerName);
    this.palSubClass = palSubClass;
    this.palDeity = palDeity;
    this.palWeapon = palWeapon;
  }

  getClass() {
    return "Paladin";
  }
  getPalSubClass() {
    return this.palSubClass;
  }
  getPalDeity() {
    return this.palDeity;
  }
  getPalWeapon() {
    return this.palWeapon;
  }
}
module.exports = Paladin;

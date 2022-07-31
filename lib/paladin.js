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
  getpalSubClass() {
    return this.palSubClass;
  }
  getpalDeity() {
    return this.palDeity;
  }
  getpalWeapon() {
    return this.palWeapon;
  }
}
module.exports = Paladin;

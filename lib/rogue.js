const Character = require("./character");

class Rogue extends Character {
  constructor(name, race, playerName, rogueSubClass, rogueWeapon) {
    super(name, race, playerName);
    this.rogueSubClass = rogueSubClass;
    this.rogueWeapon = rogueWeapon;
  }

  getClass() {
    return "Rogue";
  }
  getRogueSubClass() {
    return this.rogueSubClass;
  }
  getRogueWeapon() {
    return this.rogueWeapon;
  }
}

module.exports = Rogue;

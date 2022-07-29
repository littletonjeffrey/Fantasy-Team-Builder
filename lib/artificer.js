const Character = require("./character");
const chooseClass = require("../server");

class placeholder extends Character {
  constructor(name, race, playerName, artSubClass, weapon) {
    super(name, race, playerName);
    this.artSubClass = artSubClass;
    this.icon = "filename.img";
    this.weapon = weapon;
  }

  getClass() {
    return "placeholder";
  }
  getartSubClass() {
    return this.artSubClass;
  }
  getartWeapon() {
    return this.artWeapon;
  }

  
}
module.exports = placeholder;


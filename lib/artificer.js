const Character = require("./character");
const chooseClass = require("../server");

class placeholder extends Character {
  constructor(name, race, playerName, artSubClass, artWeapon) {
    super(name, race, playerName);
    this.artSubClass = artSubClass;
    this.icon = "filename.img";
    this.artWeapon = artWeapon;
  }

  getClass() {
    return "placeholder";
  }
  getArtSubClass() {
    return this.artSubClass;
  }
  getArtWeapon() {
    return this.artWeapon;
  }

  
}
module.exports = placeholder;


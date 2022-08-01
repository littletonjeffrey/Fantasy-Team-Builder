const Character = require("./character");

class Bard extends Character {
  constructor(name, race, playerName, bardSubClass, bardImplement) {
    super(name, race, playerName);
    this.bardSubClass = bardSubClass;
    this.bardImplement = bardImplement;
  }

  getClass() {
    return "Bard";
  }
  getBardSubClass() {
    return this.bardSubClass;
  }
  getBardImplement() {
    return this.bardImplement;
  }
}

module.exports = Bard;

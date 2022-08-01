const Character = require("./character");

class Druid extends Character {
  constructor(name, race, playerName, druSubClass, owlbear) {
    super(name, race, playerName);
    this.druSubClass = druSubClass;
    this.owlbear = owlbear;
  }

  getClass() {
    return "Druid";
  }
  getDruSubClass() {
    return this.druSubClass;
  }
  getOwlbear() {
    return this.owlbear;
  }
}

module.exports = Druid;

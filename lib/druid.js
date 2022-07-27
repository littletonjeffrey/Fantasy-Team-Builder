const Character = require('./character')

class Druid extends Character {
    constructor (name, race, playerName, druSubClass, owlbear) {
        super(name, race, playerName);
        this.druSubClass = druSubClass;
        this.owlbear = owlbear;
    }

    getClass() {
        return "Druid";
    }
    getdruSubClass() {
        return this.druSubClass;
    }
     getowlbear() {
         return this.owlbear;
     }
}

module.exports = Druid;
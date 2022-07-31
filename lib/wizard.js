const Character = require('./character')

class Wizard extends Character {
    constructor (name, race, playerName, wizSubClass, wizImplement) {
        super(name, race, playerName);
        this.wizSubClass = wizSubClass;
        this.wizImplement = wizImplement;
    }

    getClass() {
        return "Wizard";
    }
    getWizSubClass() {
        return this.wizSubClass;
    }
     getWizImplement() {
         return this.wizImplement;
     }

        }

module.exports = Wizard;

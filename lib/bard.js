const Character = require('./character')

class Bard extends Character {
    constructor (name, race, playerName, bardSubClass, bardImplement) {
        super(name, race, playerName);
        this.bardSubClass = bardSubClass;
        this.bardImplement = bardImplement;
    }

    getClass() {
        return "Bard";
    }
    getbardSubClass() {
        return this.bardSubClass;
    }
     getbardImplement() {
         return this.bardImplement;
     }
}

module.exports = Bard;
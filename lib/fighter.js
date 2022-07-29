const Character = require('./character')

class Fighter extends Character {
    constructor (name, race, playerName, fightSubClass, fightWeapon) {
        super(name, race, playerName);
        this.fightSubClass = fightSubClass;
        this.fightWeapon = fightWeapon;
    }

    getClass() {
        return "Fighter";
    }
    getfightSubClass() {
        return this.fightSubClass;
    }
     getfightWeapon() {
         return this.fightWeapon;
     }
     FighterTemplate() {
        inquirer.prompt([
          {
            type: "list",
            message: "Please select a Fighter subclass?",
            name: "subclass",
            choices: ["Champion", "Battle Master", "Eldritch Knight", "Purple Dragon Knight", "Arcane Archer", "Cavalier", "Samurai", "Echo Knight", "Psi Warrior", "Rune Knight"],
          },
          {
            type: "input",
            message: "What race is this Fighter?",
            name: "race",
          },
          {
            type: "input",
            message: "What is this Fighter's name?",
            name: "charName",
          },
          {
            type: "input",
            message: "What is this Fighter's primary weapon?",
            name: "weapon",
          },
          {
            type: "input",
            message: "Who is playing this character?",
            name: "playerName",
          },
        ]);
        // TODO: figure out why .then statment is erroring
        then((data) => {
          console.log (data);
          const newFighter = new Fighter(data.subclass, data.race, data.charName, data.weapon, data.playerName)
          theInn.push(newFighter);
          console.log(theInn);
      })
    }
  }

module.exports = Fighter;
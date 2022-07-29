const Character = require('./character')

class Monk extends Character {
    constructor (name, race, playerName, monkSubClass, monkWeapon) {
        super(name, race, playerName);
        this.monkSubClass = monkSubClass;
        this.monkWeapon = monkWeapon;
    }

    getClass() {
        return "Monk";
    }
    getmonkSubClass() {
        return this.monkSubClass;
    }
     getmonkWeapon() {
         return this.monkWeapon;
     }
     MonkTemplate() {
        inquirer.prompt([
          {
            type: "list",
            message: "Please select a Monastic tradition?",
            name: "subclass",
            choices: ['Open Hand', 'Shadow', 'Four Elements', 'Long Death', 'Sun Soul', 'Drunken Master', 'Kensei', 'Mercy', 'Astral Self'],
          },
          {
            type: "input",
            message: "What race is this Monk?",
            name: "race",
          },
          {
            type: "input",
            message: "What is this Monk's name?",
            name: "charName",
          },
          {
            type: "input",
            message: "What is this Monk's primary weapon?",
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
          const newMonk = new Monk(data.subclass, data.race, data.charName, data.weapon, data.playerName)
          theInn.push(newMonk);
          console.log(theInn);
      })
    }
  }

module.exports = Monk;
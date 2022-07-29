const Character = require('./character')

class Warlock extends Character {
    constructor (name, race, playerName, warlockSubClass, warlockImplement, patron) {
        super(name, race, playerName);
        this.warlockSubClass = warlockSubClass;
        this.warlockImplement = warlockImplement;
        this.patron = patron;
    }

    getClass() {
        return "Warlock";
    }
    getwarlockSubClass() {
        return this.warlockSubClass;
    }
     getwarlockImplement() {
         return this.warlockImplement;
     }
     getpatron() {
         return this.patron;
     }
     WarlockTemplate() {
            inquirer.prompt([
              {
                type: "list",
                message: "Please select the type of patron this  Warlock's pact is with?",
                name: "subclass",
                choices: ['Archfey', 'Fiend', 'Great Old One', 'Undying', 'Celestial', 'Hexblade', 'Fathomless', 'Genie'],
              },
              {
                type: "input",
                message: "What race is this Warlock?",
                name: "race",
              },
              {
                type: "input",
                message: "What is this Warlock's name?",
                name: "charName",
              },
              {
                type: "input",
                message: "What is the name of this Warlock's patron?",
                name: "patron",
              },
              {
                type: "input",
                message: "What is this Warlock's implement?",
                name: "implement",
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
              const newWarlock = new Warlock(data.subclass, data.race, data.charName, data.weapon, data.playerName, data.patron)
              theInn.push(newWarlock);
              console.log(theInn);
          })
        }
        }

module.exports = Warlock;
const Character = require('./character')

class Sorcerer extends Character {
    constructor (name, race, playerName, sorcSubClass, sorcImplement) {
        super(name, race, playerName);
        this.sorcSubClass = sorcSubClass;
        this.sorcImplement = sorcImplement;
    }

    getClass() {
        return "Sorcerer";
    }
    getsorcSubClass() {
        return this.sorcSubClass;
    }
     getsorcImplement() {
         return this.sorcImplement;
     }
     SorcererTemplate() {
            inquirer.prompt([
              {
                type: "list",
                message: "Please select a Sorcerous Origin?",
                name: "subclass",
                choices: ['Draconic Bloodline', 'Wild Magic','Storm Sorcery','Pyromancer','Divine Soul','Shadow Magic','Aberrant Mind', 'Clockwork Soul'],
              },
              {
                type: "input",
                message: "What race is this Sorcerer?",
                name: "race",
              },
              {
                type: "input",
                message: "What is this Sorcerer's name?",
                name: "charName",
              },
              {
                type: "input",
                message: "What is this Sorcerer's implement?",
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
              const newSorcerer = new Sorcerer(data.subclass, data.race, data.charName, data.implement, data.playerName)
              theInn.push(newSorcerer);
              console.log(theInn);
          })
        }
        }

module.exports = Sorcerer;

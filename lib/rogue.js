const Character = require('./character')

class Rogue extends Character {
    constructor (name, race, playerName, rogueSubClass, rogueWeapon) {
        super(name, race, playerName);
        this.rogueSubClass = rogueSubClass;
        this.rogueWeapon = rogueWeapon;
    }

    getClass() {
        return "Rogue";
    }
    getrogueSubClass() {
        return this.rogueSubClass;
    }
     getrogueWeapon() {
         return this.rogueWeapon;
     }
     RogueTemplate() {
            inquirer.prompt([
              {
                type: "list",
                message: "Please select a Rogue's subclass?",
                name: "subclass",
                choices: ['Thief', 'Assassin', 'Arcane Trickster', 'Mastermind', 'Swashbuckler', 'Inquisitive', 'Scout', 'Phantom', 'Soulknife'],
              },
              {
                type: "input",
                message: "What race is this Rogue?",
                name: "race",
              },
              {
                type: "input",
                message: "What is this Rogue's name?",
                name: "charName",
              },
              {
                type: "input",
                message: "What is this Rogue's primary weapon?",
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
              const newRogue = new Rogue(data.subclass, data.race, data.charName, data.weapon, data.playerName)
              theInn.push(newRogue);
              console.log(theInn);
          })
        }
        }

module.exports = Rogue;

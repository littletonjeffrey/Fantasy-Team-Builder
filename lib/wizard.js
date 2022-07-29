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
     WizardTemplate() {
            inquirer.prompt([
              {
                type: "list",
                message: "Please select a Wizard's school of magic?",
                name: "subclass",
                choices: ['Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation', 'Bladeslingling', 'War Magic', 'Chronurgy Magic', 'Graviturgy Magic', 'Order of Scribes'],
              },
              {
                type: "input",
                message: "What race is this Wizard?",
                name: "race",
              },
              {
                type: "input",
                message: "What is this Wizard's name?",
                name: "charName",
              },
              {
                type: "input",
                message: "What is this Wizard's arcane implement?",
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
              const newWizard = new Wizard(data.subclass, data.race, data.charName, data.weapon, data.playerName, data.implement)
              theInn.push(newWizard);
              console.log(theInn);
          })
        }
        }

module.exports = Wizard;

const Character = require('./character')

class Barbarian extends Character {
    constructor (name, race, playerName, barSubClass, barWeapon) {
        super(name, race, playerName);
        this.barSubClass = barSubClass;
        this.barWeapon = barWeapon;
    }

    getClass() {
        return "Barbarian";
    }
    getbarSubClass() {
        return this.barSubClass;
    }
     getbarWeapon() {
         return this.barWeapon;
     }

     BarbarianTemplate() {
        inquirer.prompt([
          {
            type: "list",
            message: "Please select a Barbarian Path?",
            name: "subclass",
            choices: ["Totem Warrior", "Battlerager", "Ancestral Guardian", "Storm Herald", "Zealot", "Beast", "Wild Magic"],
          },
          {
            type: "input",
            message: "What race is this Barbarian?",
            name: "race",
          },
          {
            type: "input",
            message: "What is this Barbarian's name?",
            name: "charName",
          },
          {
            type: "input",
            message: "What is this Barbarian's primary weapon?",
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
          const newBarbarian = new Barbarian(data.subclass, data.race, data.charName, data.weapon, data.playerName)
          theInn.push(newBarbarian);
          console.log(theInn);
      })
    }
  }     

module.exports = Barbarian;
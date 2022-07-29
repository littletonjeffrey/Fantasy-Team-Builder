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
     BardTemplate() {
        inquirer.prompt([
          {
            type: "list",
            message: "Please select a Bardic College?",
            name: "subclass",
            choices: ["Lore", "Valor", "Glamour", "Swords", "Whispers", "Eloquence", "Creation"],
          },
          {
            type: "input",
            message: "What race is this Bard?",
            name: "race",
          },
          {
            type: "input",
            message: "What is this Bard's name?",
            name: "charName",
          },
          {
            type: "input",
            message: "What is this Bard's implement?",
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
          const newBard = new Bard(data.subclass, data.race, data.charName, data.implement, data.playerName)
          theInn.push(newBard);
          console.log(theInn);
      })
    }
  }

module.exports = Bard;
const theInn = require("../server");
const Character = require("./character");

class placeholder extends Character {
  constructor(name, race, playerName, artSubClass, weapon) {
    super(name, race, playerName);
    this.artSubClass = artSubClass;
    this.weapon = weapon;
  }

  getClass() {
    return "placeholder";
  }
  getartSubClass() {
    return this.artSubClass;
  }
  getartWeapon() {
    return this.artWeapon;
  }

  ArtificerTemplate() {
      inquirer.prompt([
        {
          type: "list",
          message: "Please select a placeholder subclass?",
          name: "subclass",
          choices: ["Alchemist", "Artillerist", "Battle Smith"],
        },
        {
          type: "input",
          message: "What race is this placeholder?",
          name: "race",
        },
        {
          type: "input",
          message: "What is this placeholder's name?",
          name: "charName",
        },
        {
          type: "input",
          message: "What is this placeholder's primary weapon?",
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
        const newplaceholder = new placeholder(data.subclass, data.race, data.charName, data.weapon, data.playerName)
        theInn.push(newplaceholder);
        console.log(theInn);
    })
  }
}
module.exports = placeholder;


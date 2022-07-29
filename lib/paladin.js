const Character = require('./character')

class Paladin extends Character {
    constructor (name, race, playerName, palSubClass, palDeity, palWeapon) {
        super(name, race, playerName);
        this.palSubClass = palSubClass;
        this.palDeity = palDeity;
        this.palWeapon = palWeapon;
    }

    getClass() {
        return "Paladin";
    }
    getpalSubClass() {
        return this.palSubClass;
     }
     getpalDeity() {
         return this.palDeity;
     }
     getpalWeapon() {
         return this.palWeapon;
}
PaladinTemplate() {
    inquirer.prompt([
      {
        type: "list",
        message: "Please select a Paladin's oath?",
        name: "subclass",
        choices: ['Devotion', 'Ancients', 'Vengeance', 'Oathbreaker', 'Crown', 'Conquest', 'Redemption', 'Glory', 'Watchers'],
      },
      {
        type: "input",
        message: "What race is this Paladin?",
        name: "race",
      },
      {
        type: "input",
        message: "What is this Paladin's name?",
        name: "charName",
      },
      {
        type: "input",
        message: "What is the name of this Paladin's deity?",
        name: "deity",
      },
      {
        type: "input",
        message: "What is this Paladin's primary weapon?",
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
      const newPaladin = new Paladin(data.subclass, data.race, data.charName, data.weapon, data.playerName, data.deity)
      theInn.push(newPaladin);
      console.log(theInn);
  })
}
}
module.exports = Paladin;
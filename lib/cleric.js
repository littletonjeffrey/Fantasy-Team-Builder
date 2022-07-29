const Character = require('./character')

class Cleric extends Character {
    constructor (name, race, playerName, clericSubClass, holySymbol, deity) {
        super(name, race, playerName);
        this.clericSubClass = clericSubClass;
        this.holySymbol = holySymbol;
        this.deity = deity;
    }

    getClass() {
        return "Cleric";
    }
    getClericSubClass() {
        return this.clericSubClass;
    }
     getHolySymbol() {
         return this.holySymbol;
     }
     getDeity() {
         return this.deity;
     }
     ClericTemplate() {
        inquirer.prompt([
          {
            type: "list",
            message: "Please select a Cleric domain",
            name: "subclass",
            choices: ['Knowledge', 'Life', 'Light', 'Nature', 'Tempest', 'Trickery', 'War', 'Death', 'Arcana', 'Solidarity', 'Strength', 'Ambition', 'Zeal', 'Forge', 'Grave', 'Order', 'Peace', 'Twilight'],
          },
          {
            type: "input",
            message: "What race is this Cleric?",
            name: "race",
          },
          {
            type: "input",
            message: "What is this Cleric's name?",
            name: "charName",
          },
          {
            type: "input",
            message: "Who is this Cleric's deity?",
            name: "deity",
          },
          {
            type: "input",
            message: "What is this Cleric's holy symbol?",
            name: "holySymbol",
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
          const newCleric = new Cleric(data.subclass, data.race, data.charName, data.deity, data.holySymbol, data.playerName)
          theInn.push(newCleric);
          console.log(theInn);
      })
    }
  }

module.exports = Cleric;
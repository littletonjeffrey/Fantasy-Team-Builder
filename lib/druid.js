const Character = require('./character')

class Druid extends Character {
    constructor (name, race, playerName, druSubClass, owlbear) {
        super(name, race, playerName);
        this.druSubClass = druSubClass;
        this.owlbear = owlbear;
    }

    getClass() {
        return "Druid";
    }
    getdruSubClass() {
        return this.druSubClass;
    }
     getowlbear() {
         return this.owlbear;
     }
     DruidTemplate() {
        inquirer.prompt([
          {
            type: "list",
            message: "Please select a Druid subclass?",
            name: "subclass",
            choices: ['Land', 'Moon', 'Dreams', 'Shepherd', 'Spores', 'Stars', 'Wildfire'],
          },
          {
            type: "input",
            message: "What race is this Druid?",
            name: "race",
          },
          {
            type: "input",
            message: "What is this Druid's name?",
            name: "charName",
          },
          {
            type: "input",
            message: "Can this Druid wildshape into an owlbear?",
            name: "owlbear",
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
          const newDruid = new Druid(data.subclass, data.race, data.charName, data.owlbear, data.playerName)
          theInn.push(newDruid);
          console.log(theInn);
      })
    }
  }

module.exports = Druid;
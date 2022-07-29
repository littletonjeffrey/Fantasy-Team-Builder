const Character = require('./character')

class Ranger extends Character {
    constructor (name, race, playerName, rangSubClass, rangWeapon, favenemy) {
        super(name, race, playerName);
        this.rangSubClass = rangSubClass;
        this.rangWeapon = rangWeapon;
        this.favenemy = favenemy;
    }

    getClass() {
        return "Ranger";
    }
    getrangSubClass() {
        return this.rangSubClass;
    }
    getRangWeapon() {
        return this.rangWeapon;
        }
     getfavenemy() {
         return this.favenemy;
     }
     
     RangerTemplate() {
            inquirer.prompt([
              {
                type: "list",
                message: "Please select a Ranger's subclass?",
                name: "subclass",
                choices: ['Hunter', 'Beast Master', 'Gloom Stalker', 'Horiozon Walker', 'Monster Slayer', 'Fey Wanderer', 'Swarmkeeper'],
              },
              {
                type: "input",
                message: "What race is this Ranger?",
                name: "race",
              },
              {
                type: "input",
                message: "What is this Ranger's name?",
                name: "charName",
              },
              {
                type: "input",
                message: "What type of creature is this Ranger's favored enemy?",
                name: "favenemy",
              },
              {
                type: "input",
                message: "What is this Ranger's primary weapon?",
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
              const newRanger = new Ranger(data.subclass, data.race, data.charName, data.weapon, data.playerName, data.favenemy)
              theInn.push(newRanger);
              console.log(theInn);
          })
        }
        }

module.exports = Ranger;

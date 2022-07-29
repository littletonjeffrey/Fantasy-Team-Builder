//character template
class Character {
    constructor (name, race, playerName) {
        this.name = name;
        this.race = race;
        this.playerName = playerName
    }

//Gets to be pulled
getName() { 
    return this.name;
}

getRace() {
    return this.race;
}

getPlayerName() {
    return this.playerName;
}
}

// placeholderTemplate() {
//     inquirer.prompt([
//       {
//         type: "list",
//         message: "Please select a placeholder's oath?",
//         name: "subclass",
//         choices: ['Devotion', 'Ancients', 'Vengeance', 'Oathbreaker', 'Crown', 'Conquest', 'Redemption', 'Glory', 'Watchers'],
//       },
//       {
//         type: "input",
//         message: "What race is this placeholder?",
//         name: "race",
//       },
//       {
//         type: "input",
//         message: "What is this placeholder's name?",
//         name: "charName",
//       },
//       {
//         type: "input",
//         message: "What is the name of this placeholder's deity?",
//         name: "deity",
//       },
//       {
//         type: "input",
//         message: "What is this placeholder's primary weapon?",
//         name: "weapon",
//       },
//       {
//         type: "input",
//         message: "Who is playing this character?",
//         name: "playerName",
//       },
//     ]);
//     // TODO: figure out why .then statment is erroring
//     then((data) => {
//       console.log (data);
//       const newplaceholder = new placeholder(data.subclass, data.race, data.charName, data.weapon, data.playerName, data.deity)
//       theInn.push(newplaceholder);
//       console.log(theInn);
//   })
// }
// }

module.exports = Character;


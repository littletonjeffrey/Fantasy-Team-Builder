//character template
class Character {
    constructor (charName, charClass, race, playerName) {
        this.name = charName;
        this.race = race;
        this.playerName = playerName;
        this.charClass = charClass;
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
    getCharName() {
        return this.charName;
    }
    getCharClass() {
        return this.charClass;
    };

}
module.exports = Character;
//PLACEHOLDER SNIPPETS FOR EASY INPUT

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
//     ])
//    // upon finishing the class specific questions, creates new character
// .then((data) => {
//     console.log(data);
//     const newplaceholder = new placeholder(
//       data.subclass,
//       data.race,
//       data.charName,
//       data.weapon,
//       data.playerName
//     );
//     // Adds character to the list of characters to append to the page
//     theInn.push(newplaceholder);
//     console.log(theInn);
//     //call the function again, export it into here
//     doYouWantToBuildAParty;
//   });


// {name:'placeholder', value: placeholderTemplate}, 




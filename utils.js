const theInn = require("./server");
const inquirer = require("inquirer");
module.exports = {
   
    BarbarianTemplate: function() {
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
        ])
        // TODO: figure out why .then statment is erroring
        .then((data) => {
          console.log (data);
          const newBarbarian = new Barbarian(data.subclass, data.race, data.charName, data.weapon, data.playerName)
          theInn.push(newBarbarian);
          console.log(theInn);
      })
    },ArtificerTemplate:function() {
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
        ])
        // TODO: figure out why .then statment is erroring
        .then((data) => {
          console.log (data);
          const newplaceholder = new placeholder(data.subclass, data.race, data.charName, data.weapon, data.playerName)
          theInn.push(newplaceholder);
          console.log(theInn);
          //call the function again, export it into here
      }) 
    }
}
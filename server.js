//needed packages to run application
const inquirer = require("inquirer");
const fs = require("fs");

//TO DO: create an index.js to export these variables from
//needed class variables from the library
const Character = require("./lib/character");
const Artificer = require("./lib/artificer");
const Barbarian = require("./lib/barbarian");
const Bard = require("./lib/bard");
const Druid = require("./lib/druid");
const Fighter = require("./lib/fighter");
const Monk = require("./lib/monk");
const Paladin = require("./lib/paladin");
const Ranger = require("./lib/ranger");
const Rogue = require("./lib/rogue");
const Sorcerer = require("./lib/sorcerer");
const Warlock = require("./lib/warlock");
const Wizard = require("./lib/wizard");
const { BarbarianTemplate, ArtificerTemplate } = require("./utils");
//array of classes for "routing" for loop
const classChoices = [
  Artificer,
  Barbarian,
  Bard,
  "Cleric",
  "Druid",
  "Fighter",
  "Monk",
  "Paladin",
  "Ranger",
  "Rogue",
  "Sorcerer",
  "Warlock",
  "Wizard",
];
//empty array to collect all of the party members
const theInn = [];

//functiion to pick confirm adding a new party member
doYouWantToBuildAParty();
function doYouWantToBuildAParty() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Want to add a new party member?",
        name: "buildYorNo",
        choices: ["Excelsior!", "Maybe later..."],
      },
    ])
    .then((data) => {
      console.log(data.buildYorNo);
      //if yes, send to character builder
      if (`${data.buildYorNo} === 'Excelsior!'`) {
        chooseClass();
  
        //if no, build the party
      } else {
        buildParty();
      }
    });
}
//function to pick class
function chooseClass() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What class should this character be?",
        name: "classy",
        //can call the array up above
        choices: [{name:'Artificer', value: ArtificerTemplate}, {name:'Barbarian', value: BarbarianTemplate}
        //   "Artificer",
        //   "Barbarian",
        //   "Bard",
        //   "Cleric",
        //   "Druid",
        //   "Fighter",
        //   "Monk",
        //   "Paladin",
        //   "Ranger",
        //   "Rogue",
        //   "Sorcerer",
        //   "Warlock",
        //   "Wizard",
        ],
      },
    ])
    // for loop to select appropriate class template
    .then((data) => {
      console.log(data.classy);
data.classy()

    //   for (i = 0; i <= classChoices.length; i++) {
    //     if (data.classy === classChoices[i]) {
    //       [classChoices[i] + "Template"]();
    //     }
    //   }
      // return doYouWantToBuildAParty()
    });
  // send user back to for option to build another character or stop
}

// function to build html
function buildParty() {
  var displayHTML = "";

  for (i = 0; i < theInn.length; i++) {
    displayHTML += `
       
        //  <div class="col-12 col-md-4 col-lg-4 " style = "margin-top: 10px;">
        // <div class="card" style="width: 18rem;">
        //     <div class="card-header">
        //       <h3>Name: ${theInn[i].name}</h3>
        //       <h4>Class: ${theInn[i].getClass()}</h4>
        //     `;
  }
}
//r
module.exports = theInn;
module.exports = chooseClass;

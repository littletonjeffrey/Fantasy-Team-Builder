//needed packages to run application
const inquirer = require("inquirer");
const fs = require("fs");

//TO DO: create an index.js to export these variables from
//needed class variables from the library
const Character = require("./lib/character");
const Artificer = require("./lib/artificer");
const Barbarian = require("./lib/barbarian");
const Bard = require("./lib/bard");
const Cleric = require("./lib/cleric");
const Druid = require("./lib/druid");
const Fighter = require("./lib/fighter");
const Monk = require("./lib/monk");
const Paladin = require("./lib/paladin");
const Ranger = require("./lib/ranger");
const Rogue = require("./lib/rogue");
const Sorcerer = require("./lib/sorcerer");
const Warlock = require("./lib/warlock");
const Wizard = require("./lib/wizard");
const {
  BarbarianTemplate,
  ArtificerTemplate,
  ClericTemplate,
  DruidTemplate,
  FighterTemplate,
  MonkTemplate,
  PaladinTemplate,
  RangerTemplate,
  RogueTemplate,
  SorcererTemplate,
  WarlockTemplate,
  WizardTemplate,
} = require("./utils/templates");
//array of classes for "routing" for loop
const classChoices = [
  Artificer,
  Barbarian,
  Bard,
  Cleric,
  Druid,
  Fighter,
  Monk,
  Paladin,
  Ranger,
  Rogue,
  Sorcerer,
  Warlock,
  Wizard,
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
        name: "charClass",
        choices: [
          { name: "Artificer", value: ArtificerTemplate },
          { name: "Barbarian", value: BarbarianTemplate },
          { name: "Cleric", value: ClericTemplate },
          { name: "Druid", value: DruidTemplate },
          { name: "Fighter", value: FighterTemplate },
          { name: "Monk", value: MonkTemplate },
          { name: "Paladin", value: PaladinTemplate },
          { name: "Ranger", value: RangerTemplate },
          { name: "Rogue", value: RogueTemplate },
          { name: "Sorcerer", value: SorcererTemplate },
          { name: "Warlock", value: WarlockTemplate },
          { name: "Wizard", value: WizardTemplate },
        ],
      },
    ])
    // for loop to select appropriate class template
    .then((data) => {
      console.log(data.charClass);
      data.charClass();
    });
}

// function to build character cards
function buildParty() {
  
  var cardHTML = "";

  for (i = 0; i < theInn.length; i++) {
    cardHTML += ` 
      <div class="col-12 col-md-4 col-lg-4 " style = "margin-top: 10px;">
        <div class="card" style="width: 18rem;">
          <div class="card-header">
            <p id = "playerName">Character: ${theInn[i].getCharName()}</p>
            <a href = "
          </div>  
          <div class="card-body">
          <p id = "charClass">Class: ${theInn[i].getCharClass()}</p>  
           `;
    //Test area for bugs if fails
   if (theInn[i].getCharClass() === Artificer) {
    cardHTML += `
      <ul class="list-group-flush">
        <li id="subclass">Specialty: ${theInn[i].getArtSubClass()}</li>
      </ul>
      <p id="race">Race: ${theInn[i].getRace()}</p>
      <p id="artWeapon">Weapon: ${theInn[i].getArtWeapon()}</p>
      <p id="playerName">Played by: ${theInn[i].getPlayerName()}</p>
  `;} else if (theInn[i].getCharClass() === Barbarian) {
    cardHTML += `
      <ul class="list-group-flush">
        <li id="subclass">Path Of ${theInn[i].getBarbSubClass()}</li>
      </ul>
      <p id="race">Race: ${theInn[i].getRace()}</p>
      <p id="artWeapon">Weapon: ${theInn[i].getBarbWeapon()}</p>
      <p id="playerName">Played by: ${theInn[i].getPlayerName()}</p>
  `;} else if (theInn[i].getCharClass() === Bard) {
    cardHTML += `
      <ul class="list-group-flush">
        <li id="subclass">College Of ${theInn[i].getBardSubClass()}</li>
      </ul>
      <p id="race">Race: ${theInn[i].getRace()}</p>
      <p id="artWeapon">Implement: ${theInn[i].getBardImplement()}</p>
      <p id="playerName">Played by: ${theInn[i].getPlayerName()}</p>
  `;} else if (theInn[i].getCharClass() === Cleric) {
    cardHTML += `
      <ul class="list-group-flush">
        <li id="subclass">${theInn[i].getProSubClass()} Domain</li>
      </ul>
      <p id="race">Race: ${theInn[i].getRace()}</p>
      <p id="deity">Deity: ${theInn[i].getDeity()}</p>
      <p id="weapon">Holy Symbol: ${theInn[i].getHolySymbol()}</p>
      <p id="playerName">Played by: ${theInn[i].getPlayerName()}</p>
  `;} else if (theInn[i].getCharClass() === Druid) {
    cardHTML += `
      <ul class="list-group-flush">
        <li id="subclass">Circle Of ${theInn[i].getDruSubClass()}</li>
      </ul>
      <p id="race">Race: ${theInn[i].getRace()}</p>
      <p id="weapon">Able to wildshape into an Owlbear: ${theInn[i].getOwlBear()}</p>
      <p id="playerName">Played by: ${theInn[i].getPlayerName()}</p>
  `;} else if (theInn[i].getCharClass() === Fighter) {
    cardHTML += `
      <ul class="list-group-flush">
        <li id="subclass">${theInn[i].getFightSubClass()}</li>
      </ul>
      <p id="race">Race: ${theInn[i].getRace()}</p>
      <p id="weapon">Weapon: ${theInn[i].getFightWeapon()}</p>
      <p id="playerName">Played by: ${theInn[i].getPlayerName()}</p>
  `;} else if (theInn[i].getCharClass() === Monk) {
    cardHTML += `
      <ul class="list-group-flush">
        <li id="subclass">Way Of ${theInn[i].getMonkSubClass()}</li>
      </ul>
      <p id="race">Race: ${theInn[i].getRace()}</p>
      <p id="weapon">Weapon:</p>: ${theInn[i].getMonkWeaponl()}</p>
      <p id="playerName">Played by: ${theInn[i].getPlayerName()}</p>
  `;} else if (theInn[i].getCharClass() === Paladin) {
    cardHTML += `
      <ul class="list-group-flush">
        <li id="subclass">Oath Of${theInn[i].getPalSubClass()}</li>
      </ul>
      <p id="race">Race: ${theInn[i].getRace()}</p>
      <p id="deity">Deity: ${theInn[i].getDeity()}</p>
      <p id="weapon">Weapon: ${theInn[i].getPalWeapon()}</p>
      <p id="playerName">Played by: ${theInn[i].getPlayerName()}</p>
  `;} else if (theInn[i].getCharClass() === Ranger) {
    cardHTML += `
      <ul class="list-group-flush">
        <li id="subclass">${theInn[i].getrangSubClass()}</li>
      </ul>
      <p id="race">Race: ${theInn[i].getRace()}</p>
      <p id="deity">Favored Enemy: ${theInn[i].getFavEnemy()}</p>
      <p id="weapon">Weapon: ${theInn[i].getRangWeapon()}</p>
      <p id="playerName">Played by: ${theInn[i].getPlayerName()}</p>
  `;} else if (theInn[i].getCharClass() === Rogue) {
    cardHTML += `
      <ul class="list-group-flush">
        <li id="subclass">${theInn[i].getRogueSubClass()}</li>
      </ul>
      <p id="race">Race: ${theInn[i].getRace()}</p>
      <p id="weapon">Weapon: ${theInn[i].getRogueWeapon()}</p>
      <p id="playerName">Played by: ${theInn[i].getPlayerName()}</p>
  `;} else if (theInn[i].getCharClass() === Sorcerer) {
  cardHTML += `
  <ul class="list-group-flush">
    <li id="subclass">${theInn[i].getSorcSubClass()} Origin</li>
  </ul>
  <p id="race">Race: ${theInn[i].getRace()}</p>
  <p id="weapon">Weapon: ${theInn[i].getSorcImplement()}</p>
  <p id="playerName">Played by: ${theInn[i].getPlayerName()}</p>
  `;} else if (theInn[i].getCharClass() === Warlock) {
  cardHTML += `
      <ul class="list-group-flush">
        <li id="subclass">Pact Of The ${theInn[i].getWarlockSubClass()}</li>
      </ul>
      <p id="race">Race: ${theInn[i].getRace()}</p>
      <p id="deity">Patron: ${theInn[i].getPatron()}</p>
      <p id="weapon">Implement: ${theInn[i].getWarlockImplement()}</p>
      <p id="playerName">Played by: ${theInn[i].getPlayerName()}</p>
  `;} else { (theInn[i].getCharClass() === Wizard) 
    cardHTML += `
      <ul class="list-group-flush">
        <li id="subclass">School Of ${theInn[i].getWizSubClass()}</li>
      </ul>
      <p id="race">Race: ${theInn[i].getRace()}</p>
      <p id="weapon">Implement: ${theInn[i].getWizImplement()}</p>
      <p id="playerName">Played by: ${theInn[i].getPlayerName()}</p>
  `};
}
}
            
  


module.exports = theInn;
module.exports = chooseClass;
module.exports = doYouWantToBuildAParty;

//needed packages to run application
const inquirer = require('inquirer');
const fs = require('fs');

//needed class variables from the library
const Character = require('.lib/character');
const Artificer = require('./lib/artificer');
const Barbarian = require('./lib/barbarian');
const Bard = require('./lib/bard');
const Druid = require('./lib/druid');
const Fighter = require('./lib/fighter');
const Monk = require('./lib/monk');
const Paladin = require('./lib/paladin');
const Ranger = require('./lib/ranger');
const Rogue = require('./lib/rogue');
const Sorcerer = require('./lib/sorcerer');
const Warlock = require('./lib/warlock');
const Wizard = require('./lib/wizard');

//empty array to collect all of the party members
const theInn = []

//functiion to pick confirm adding a new party member
doYouWantToBuildAParty();
function doYouWantToBuildAParty() {
    inquirer.prompt([
        {type: 'list',
        message: 'Want to add a new party member?',
        name: 'charClass',
        choices: ['Excelsior!', 'Maybe later...']
        }
    ])

    .then((buildYorNo) => {
        console.log(buildYorNo)
//if yes, send to character builder
        if (`$(buildYorNo)` === 'Excelsior!') {
            buildCharTemplate();
//if no, build the party
        } else {
            buildParty();
        }
    })
}


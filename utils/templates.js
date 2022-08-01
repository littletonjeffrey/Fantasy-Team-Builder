const theInn = require("../server");
const inquirer = require("inquirer");
const doYouWantToBuildAParty = require("../server");
module.exports = {
  BarbarianTemplate: function () {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Please select a Barbarian Path?",
          name: "barbSubclass",
          choices: [
            "The Totem Warrior",
            "The Battlerager",
            "The Ancestral Guardian",
            "The Storm Herald",
            "The Zealot",
            "The Beast",
            "Wild Magic",
          ],
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
          name: "barbWeapon",
        },
        {
          type: "input",
          message: "Who is playing this character?",
          name: "playerName",
        },
      ])

      .then((data) => {
        console.log(data);
        const newBarbarian = new Barbarian(
          data.barbSubclass,
          data.race,
          data.charName,
          data.barbWeapon,
          data.playerName
        );
        theInn.push(newBarbarian);
        console.log(theInn);
        doYouWantToBuildAParty;
      });
  },
  ArtificerTemplate: function () {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Please select a Artificer subclass?",
          name: "artSubclass",
          choices: ["Alchemist", "Artillerist", "Battle Smith"],
        },
        {
          type: "input",
          message: "What race is this Artificer?",
          name: "race",
        },
        {
          type: "input",
          message: "What is this Artificer's name?",
          name: "charName",
        },
        {
          type: "input",
          message: "What is this Artificer's primary weapon?",
          name: "artWeapon",
        },
        {
          type: "input",
          message: "Who is playing this character?",
          name: "playerName",
        },
      ])
      // upon finishing the class specific questions, creates new character
      .then((data) => {
        console.log(data);
        const newArtificer = new Artificer(
          data.artSubclass,
          data.race,
          data.charName,
          data.artWeapon,
          data.playerName
        );
        // Adds character to the list of characters to append to the page
        theInn.push(newArtificer);
        console.log(theInn);
        //call the function again, export it into here
        doYouWantToBuildAParty;
      });
  },
  BardTemplate: function () {
    inquirer.prompt([
      {
        type: "list",
        message: "Please select a Bardic College?",
        name: "bardSubclass",
        choices: [
          "Lore",
          "Valor",
          "Glamour",
          "Swords",
          "Whispers",
          "Eloquence",
          "Creation",
        ],
      },
      {
        type: "input",
        message: "What race is this Bard?",
        name: "race",
      },
      {
        type: "input",
        message: "What is this Bard's name?",
        name: "charName",
      },
      {
        type: "input",
        message: "What is this Bard's implement?",
        name: "implement",
      },
      {
        type: "input",
        message: "Who is playing this character?",
        name: "playerName",
      },
    ])
   // upon finishing the class specific questions, creates new character
   .then((data) => {
    console.log(data);
    const newBard = new Bard(
      data.bardSubclass,
      data.race,
      data.charName,
      data.implement,
      data.playerName
    );
    // Adds character to the list of characters to append to the page
    theInn.push(newBard);
    console.log(theInn);
    //call the function again, export it into here
    doYouWantToBuildAParty;
  });
  },
  ClericTemplate: function () {
    inquirer.prompt([
      {
        type: "list",
        message: "Please select a Cleric domain",
        name: "clericSubclass",
        choices: [
          "Knowledge",
          "Life",
          "Light",
          "Nature",
          "Tempest",
          "Trickery",
          "War",
          "Death",
          "Arcana",
          "Solidarity",
          "Strength",
          "Ambition",
          "Zeal",
          "Forge",
          "Grave",
          "Order",
          "Peace",
          "Twilight",
        ],
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
    ])
    .then((data) => {
      console.log(data);
      const newCleric = new Cleric(
        data.clericSubclass,
        data.race,
        data.charName,
        data.deity,
        data.holySymbol,
        data.playerName
      );
      theInn.push(newCleric);
      console.log(theInn);
      doYouWantToBuildAParty;
    });
  },
  DruidTemplate: function () {
    inquirer.prompt([
      {
        type: "list",
        message: "Please select a Druid Circle",
        name: "druSubclass",
        choices: [
          "The Land",
          "The Moon",
          "Dreams",
          "The Shepherd",
          "Spores",
          "Stars",
          "Wildfire",
        ],
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
        type: "list",
        message: "Can this Druid wildshape into an owlbear?",
        name: "owlbear",
        choices: [
          "Yes",
          "No",
          "If the DM lets me...",
        ]
      },
      {
        type: "input",
        message: "Who is playing this character?",
        name: "playerName",
      },
    ])

    .then((data) => {
      console.log(data);
      const newDruid = new Druid(
        data.druSubclass,
        data.race,
        data.charName,
        data.owlbear,
        data.playerName
      );
      theInn.push(newDruid);
      console.log(theInn);
      doYouWantToBuildAParty;
    });
  },
  FighterTemplate: function () {
    inquirer.prompt([
      {
        type: "list",
        message: "Please select a Fighter subclass?",
        name: "subclass",
        choices: [
          "Champion",
          "Battle Master",
          "Eldritch Knight",
          "Purple Dragon Knight",
          "Arcane Archer",
          "Cavalier",
          "Samurai",
          "Echo Knight",
          "Psi Warrior",
          "Rune Knight",
        ],
      },
      {
        type: "input",
        message: "What race is this Fighter?",
        name: "race",
      },
      {
        type: "input",
        message: "What is this Fighter's name?",
        name: "charName",
      },
      {
        type: "input",
        message: "What is this Fighter's primary weapon?",
        name: "weapon",
      },
      {
        type: "input",
        message: "Who is playing this character?",
        name: "playerName",
      },
    ])

    .then((data) => {
      console.log(data);
      const newFighter = new Fighter(
        data.subclass,
        data.race,
        data.charName,
        data.weapon,
        data.playerName
      );
      theInn.push(newFighter);
      console.log(theInn);
      doYouWantToBuildAParty;
    });
  },
  MonkTemplate: function () {
    inquirer.prompt([
      {
        type: "list",
        message: "Please select a Monastic tradition?",
        name: "subclass",
        choices: [
          "Open Hand",
          "Shadow",
          "Four Elements",
          "Long Death",
          "Sun Soul",
          "Drunken Master",
          "Kensei",
          "Mercy",
          "Astral Self",
        ],
      },
      {
        type: "input",
        message: "What race is this Monk?",
        name: "race",
      },
      {
        type: "input",
        message: "What is this Monk's name?",
        name: "charName",
      },
      {
        type: "input",
        message: "What is this Monk's primary weapon?",
        name: "weapon",
      },
      {
        type: "input",
        message: "Who is playing this character?",
        name: "playerName",
      },
    ])

    .then((data) => {
      console.log(data);
      const newMonk = new Monk(
        data.subclass,
        data.race,
        data.charName,
        data.weapon,
        data.playerName
      );
      theInn.push(newMonk);
      console.log(theInn);
      doYouWantToBuildAParty;
    });
  },
  PaladinTemplate: function () {
    inquirer.prompt([
      {
        type: "list",
        message: "Please select a Paladin's oath?",
        name: "subclass",
        choices: [
          "Devotion",
          "Ancients",
          "Vengeance",
          "Oathbreaker",
          "Crown",
          "Conquest",
          "Redemption",
          "Glory",
          "Watchers",
        ],
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
    ])

    .then((data) => {
      console.log(data);
      const newPaladin = new Paladin(
        data.subclass,
        data.race,
        data.charName,
        data.weapon,
        data.playerName,
        data.deity
      );
      theInn.push(newPaladin);
      console.log(theInn);
      doYouWantToBuildAParty;
    });
  },
  RangerTemplate: function () {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Please select a Ranger's subclass?",
          name: "subclass",
          choices: [
            "Hunter",
            "Beast Master",
            "Gloom Stalker",
            "Horiozon Walker",
            "Monster Slayer",
            "Fey Wanderer",
            "Swarmkeeper",
          ],
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
      ])

      .then((data) => {
        console.log(data);
        const newRanger = new Ranger(
          data.subclass,
          data.race,
          data.charName,
          data.weapon,
          data.playerName,
          data.favenemy
        );
        theInn.push(newRanger);
        console.log(theInn);
      });
  },
  RogueTemplate: function () {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Please select a Rogue's subclass?",
          name: "subclass",
          choices: [
            "Thief",
            "Assassin",
            "Arcane Trickster",
            "Mastermind",
            "Swashbuckler",
            "Inquisitive",
            "Scout",
            "Phantom",
            "Soulknife",
          ],
        },
        {
          type: "input",
          message: "What race is this Rogue?",
          name: "race",
        },
        {
          type: "input",
          message: "What is this Rogue's name?",
          name: "charName",
        },
        {
          type: "input",
          message: "What is this Rogue's primary weapon?",
          name: "weapon",
        },
        {
          type: "input",
          message: "Who is playing this character?",
          name: "playerName",
        },
      ])

      .then((data) => {
        console.log(data);
        const newRogue = new Rogue(
          data.subclass,
          data.race,
          data.charName,
          data.weapon,
          data.playerName
        );
        theInn.push(newRogue);
        console.log(theInn);
      });
  },
  SorcererTemplate: function () {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Please select a Sorcerous Origin?",
          name: "subclass",
          choices: [
            "Draconic Bloodline",
            "Wild Magic",
            "Storm Sorcery",
            "Pyromancer",
            "Divine Soul",
            "Shadow Magic",
            "Aberrant Mind",
            "Clockwork Soul",
          ],
        },
        {
          type: "input",
          message: "What race is this Sorcerer?",
          name: "race",
        },
        {
          type: "input",
          message: "What is this Sorcerer's name?",
          name: "charName",
        },
        {
          type: "input",
          message: "What is this Sorcerer's implement?",
          name: "implement",
        },
        {
          type: "input",
          message: "Who is playing this character?",
          name: "playerName",
        },
      ])

      .then((data) => {
        console.log(data);
        const newSorcerer = new Sorcerer(
          data.subclass,
          data.race,
          data.charName,
          data.implement,
          data.playerName
        );
        theInn.push(newSorcerer);
        console.log(theInn);
      });
  },
  WarlockTemplate: function () {
    inquirer.prompt([
      {
        type: "list",
        message: "Please select the type of patron this  Warlock's pact is with?",
        name: "subclass",
        choices: ['Archfey', 'Fiend', 'Great Old One', 'Undying', 'Celestial', 'Hexblade', 'Fathomless', 'Genie'],
      },
      {
        type: "input",
        message: "What race is this Warlock?",
        name: "race",
      },
      {
        type: "input",
        message: "What is this Warlock's name?",
        name: "charName",
      },
      {
        type: "input",
        message: "What is the name of this Warlock's patron?",
        name: "patron",
      },
      {
        type: "input",
        message: "What is this Warlock's implement?",
        name: "implement",
      },
      {
        type: "input",
        message: "Who is playing this character?",
        name: "playerName",
      },
    ])

    .then((data) => {
      console.log (data);
      const newWarlock = new Warlock(data.subclass, data.race, data.charName, data.weapon, data.playerName, data.patron)
      theInn.push(newWarlock);
      console.log(theInn);
  })
},
WizardTemplate: function () {
  inquirer.prompt([
    {
      type: "list",
      message: "Please select a Wizard's school of magic?",
      name: "subclass",
      choices: ['Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation', 'Bladeslingling', 'War Magic', 'Chronurgy Magic', 'Graviturgy Magic', 'Order of Scribes'],
    },
    {
      type: "input",
      message: "What race is this Wizard?",
      name: "race",
    },
    {
      type: "input",
      message: "What is this Wizard's name?",
      name: "charName",
    },
    {
      type: "input",
      message: "What is this Wizard's arcane implement?",
      name: "implement",
    },
    {
      type: "input",
      message: "Who is playing this character?",
      name: "playerName",
    },
  ])
  .then((data) => {
    console.log (data);
    const newWizard = new Wizard(data.subclass, data.race, data.charName, data.weapon, data.playerName, data.implement)
    theInn.push(newWizard);
    console.log(theInn);
})
}
};

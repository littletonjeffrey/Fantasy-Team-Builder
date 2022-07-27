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

module.exports = Character;
const fs = require('fs/promises');
const Character = require('../lib/character');

jest.useFake('fs/promises');

describe('Character', () => {
    describe('constructor', () => {
        it('should create an instance of Character', () => {
            const [charName, charClass, race, playerName] = ['Tony Stark', 'Artificer', 'Human', 'Kurt'];
            const character = new Character({charName, charClass, race, playerName});
            expect(character.charName).to.equal('Tony Stark');
            expect(character.charClass).to.equal('Artificer');
            expect(character.race).to.equal('Human'); 
            expect(character.playerName).to.equal('Kurt');
        });
        
            it('should error when creating a character', () => {
                expect(() => new Character()).to.throw('missing Character parameter');
            })
    })
});

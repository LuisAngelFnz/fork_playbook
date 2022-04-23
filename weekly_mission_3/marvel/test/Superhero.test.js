const Superhero = require('../app/Superhero');

describe('Unit Test for Superhero', () =>{
    test('Case 1: Get a Superhero', () => {
        const ironman = new Superhero(
            'Iron Man',
            'Tony Start',
            'Robert Downey jr',
        );

        expect(ironman.name).toBe('Iron Mann');
        expect(ironman.heroName).toBe('Tony Start');
        expect(ironman.actor).toBe('Robert Downey jr');

    });
});
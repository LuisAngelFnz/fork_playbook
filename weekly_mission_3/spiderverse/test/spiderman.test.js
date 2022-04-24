describe("Unit Test Suit for Spiderman class ", () => {
  const Spiderman = require('../app/Spiderman')
  
  test('Case 1) Create an Spiderman object', () => {
    
    const andrewGarfield = new Spiderman(
      name='Spiderman Sony',
      age=31,
      actor='Andrew Garfield',
      movies=2,
      studio='Sony'
    );

    expect(andrewGarfield.name).toBe('Spiderman Sony');
    expect(andrewGarfield.age).toBe(31);
    expect(andrewGarfield.actor).toBe('Andrew Garfield');
    expect(andrewGarfield.movies).toBe(2);
    expect(andrewGarfield.studio).toBe('Sony');

  });

  test('Case 2) Use method getInfo()', () => {
    const tomHolland = new Spiderman(
      name='Spiderman Marvel',
      age=25,
      actor='Tom Holland',
      movies=5,
      studio='Marvel'
    );

    expect(
      tomHolland.getInfo()
    ).toBe(
      "Hey, I'm Tom Holland from Marvel studio"
    );

  });
})
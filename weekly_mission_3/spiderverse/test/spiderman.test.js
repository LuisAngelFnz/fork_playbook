describe("Unit Test Suit for Spiderman class ", () => {
  test('Case 1) Create an Spiderman object', () => {
    
    const Spiderman = require('../app/Spiderman')
    
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
})
describe("Unit Test Suit for Spiderman class ", () => {
  test('Case 1) Create an Spiderman object', () => {
    const andrewGarfield = new Spiderman(
      'Spiderman Sony',
      31,
      'Andrew Garfield',
      2,
      'Sony'
    );

    expect(andrewGarfield.name).toBe('Spiderman Sony');

  });
})
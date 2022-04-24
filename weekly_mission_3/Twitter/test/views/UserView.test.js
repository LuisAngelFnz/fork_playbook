
describe('Test Suit for class UserView',()=>{
    
    const UserView = require('../../app/views/UserView');
    
    test('1. Return an error object when try to create a new user with an null payload',()=>{
        const payload = null;

        const result = UserView.createUser(payload);

        expect(result.error).toMatch(/payload not existe/);
    });
});
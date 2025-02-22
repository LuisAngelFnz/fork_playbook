
describe('Test Suit for class UserView',()=>{
    
    const UserView = require('../../app/views/UserView');
    
    test('1. Return an error object when try to create a new user with an null payload',()=>{
        const payload = null;

        const result = UserView.createUser(payload);

        expect(result.error).toMatch(/payload not existe/);
    });

    test('2. Return an error object when try to create a new user with a payload with invalid properties', () =>{

        const payload = {'username':null, 'name':'Luis', 'username':'lfernandez'};

        const result = UserView.createUser(payload);

        expect(result.error).toMatch(/necesitan tener un payload válido/);
    });

    test('3. Return an error object when try to create a new user with payload with missing properties',() => {

        const payload = {'username':'lfernandez'};

        const result = UserView.createUser(payload);

        expect(result.error).toMatch(/necesitan tener un payload válido/);
    });

    test('4. Create a user by a given valid payload',()=>{
        
        const payload = {'id':4, 'username':'lfernandez', 'name':'Luis'};

        const result = UserView.createUser(payload);
 
        expect(result.id).toBe(4);
        expect(result.username).toBe('lfernandez');
        expect(result.name).toBe('Luis');
    });
});

describe('Test Suit for class User', () => {
    const User = require('../../app/models/User.js');
    test('Case 1) Create object from class User',() => {

        const obj_user = new User(
            id=300,
            username='Kinser',
            name='Luis Angel',
            bio='Bio',
            dateCreated='dateCreated',
            lastUpdated='lastUpdated'
        );

        expect(obj_user.id).toBe(300);
        expect(obj_user.username).toBe('Kinser');
        expect(obj_user.name).toBe('Luis Angel');
        expect(obj_user.bio).toBe('Bio');
        expect(obj_user.dateCreated).toBe('dateCreated');
        expect(obj_user.lastUpdated).toBe('lastUpdated');

    })

});
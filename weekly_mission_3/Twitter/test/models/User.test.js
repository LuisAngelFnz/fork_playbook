
describe('Test Suit for class User', () => {
    const User = require('../../app/models/User.js');
    test('Case 1) Create object from class User',() => {

        const obj_user = new User(
            id=300,
            username='Kinser',
            name='Luis Angel',
            bio='Bio',
        );

        expect(obj_user.id).toBe(300);
        expect(obj_user.username).toBe('Kinser');
        expect(obj_user.name).toBe('Luis Angel');
        expect(obj_user.bio).toBe('Bio');
        expect(obj_user.dateCreated).not.toBeUndefined();
        expect(obj_user.lastUpdated).not.toBeUndefined();
    });

    test('Case 2) Add getters methods', () => {
        const obj_user = new User(
            id=22,
            username='user01',
            name='Angel',
            bio='Other bio'
        );

        expect(obj_user.getUsername).not.toBeUndefined();
        expect(obj_user.getBio).not.toBeUndefined();
        expect(obj_user.getDateCreated).not.toBeUndefined();
        expect(obj_user.getLastUpdated).not.toBeUndefined();
    });

});
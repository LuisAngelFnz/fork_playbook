
describe('Test Suit for class UserService', () => {
    
    const UserService = require('../../app/models/UserService');

    test('Case 1) Create object from UserService', () => {
        const obj_user_service = new UserService.create(
            id=300,
            username='Kinser',
            name='Luis Angel',
        )

        expect(obj_user_service.id).toBe(300);
        expect(obj_user_service.username).toBe('Kinser');
        expect(obj_user_service.name).toBe('Luis Angel');
    });
});
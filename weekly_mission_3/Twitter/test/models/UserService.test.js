
describe('Test Suit for class UserService', () => {
    
    const UserService = require('../../app/models/UserService');

    test('Case 1) Create object from UserService', () => {
        const obj_user_service = UserService.create(
            id=300,
            username='Kinser',
            name='Luis Angel',
        )

        expect(obj_user_service.id).toBe(300);
        expect(obj_user_service.username).toBe('Kinser');
        expect(obj_user_service.name).toBe('Luis Angel');
    });

    test('Case 2) Get all user data in list from method getInfo', ()=>{

        const obj_user_service = UserService.create(
            2,
            'lfernandez',
            'Luis Angel'
        );

        const info_users = UserService.getInfo(obj_user_service);

        expect(info_users[0]).toBe(2);
        expect(info_users[1]).toBe('lfernandez');
        expect(info_users[2]).toBe('Luis Angel');
        expect(info_users[3]).toBe('Sin bio');
    });

    test('Case 3) Update username from updateUserUsername method', ()=>{
        const obj_user_service = UserService.create(
            33,
            'lfernandez',
            'Luis Angel'
        );

        UserService.updateUserUsername(obj_user_service, 'new_lfernandez')

        expect(obj_user_service.username).toBe('new_lfernandez');
    });
});
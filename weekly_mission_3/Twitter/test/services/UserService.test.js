
describe('Test Suit for class UserService', () => {
    
    const UserService = require('../../app/services/UserService');

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

    test('Case 4) Given a list of users give me the list of usernames',()=>{

        const obj_user1 = UserService.create(1,'userName1', 'name1');
        const obj_user2 = UserService.create(2,'userName2', 'name2');
        const obj_user3 = UserService.create(3,'userName3', 'name3');

        const all_user_names = UserService.getAllUsernames([obj_user1,obj_user2,obj_user3]);

        expect(all_user_names).toContain('userName1');
        expect(all_user_names).toContain('userName2');
        expect(all_user_names).toContain('userName3');
    });
});
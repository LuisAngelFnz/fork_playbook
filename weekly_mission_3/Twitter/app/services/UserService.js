const User = require('../models/User')

class UserService{
    static create(id, username, name){
        return new User(
            id,
            username,
            name,
            'Sin bio'
        );
    }

    static getInfo(obj_user){

        return [
            obj_user.id,
            obj_user.username,
            obj_user.name,
            obj_user.bio
        ]
    }

    static updateUserUsername(obj_user, new_username){
        obj_user.setUserName = new_username;
    }

    static getAllUsernames(list_obj_users){
        return list_obj_users.map(each_user => each_user.username || 'not found' )
    }
}

module.exports = UserService
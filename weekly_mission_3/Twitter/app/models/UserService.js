const User = require('./User')

class UserService{
    static create(id, username, name){
        return new User(
            id=id,
            username=username,
            name=name
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
}

module.exports = UserService
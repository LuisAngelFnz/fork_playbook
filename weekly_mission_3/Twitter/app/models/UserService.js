const User = require('./User')

class UserService{
    static create(id, username, name){
        return new User(
            id=id,
            username=username,
            name=name
        );
    }
}

module.exports = UserService
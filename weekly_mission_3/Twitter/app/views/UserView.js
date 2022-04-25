const UserService = require('../services/UserService');

class UserView{
    
    static createUser(payload){
        if (payload === null) return {'error':'payload not existe'}
        
        const elements = ['id','username','name'];
        
        while (elements.length != 0){
            let key = elements.pop();
            if (!(payload.hasOwnProperty(key) && payload[key] != null)){
                return {'error':'necesitan tener un payload válido'}
            }
        }
        
        return UserService.create(
            payload.id,
            payload.username,
            payload.name
        )
    }
}

module.exports = UserView;
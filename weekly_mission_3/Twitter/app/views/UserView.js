class UserView{
    
    static createUser(payload){
        if (payload === null) return {'error':'payload not existe'}
        
        const elements = ['id','username','name'];
        
        while (elements){
            let key = elements.pop();
            if (! payload.hasOwnProperty(key) | payload[key] == null){
                return {'error':'necesitan tener un payload válido'}
            }
        }


    }
}

module.exports = UserView;
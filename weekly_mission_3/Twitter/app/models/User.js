class User{
    constructor(id=1, username='', name='', bio=''){
        this.id          = id;
        this.username    = username;
        this.name        = name;
        this.bio         = bio;
        this.dateCreated = new Date();
        this.lastUpdated = new Date();
    }
    get getUsername(){
        return this.username;
    }

    get getBio(){
        return this.bio;
    }

    get getDateCreated(){
        return this.dateCreated;
    }
    get getLastUpdated(){
        return this.lastUpdated;
    }

    set setUserName(username){
        this.username = username;
    }

    set setBio(bio){
        this.bio = bio;
    }
}

module.exports = User
class Person{
  constructor(name, age){
    this.name = name;
    this.age  = age;
  }
}

export default class Explorer extends Person{
  constructor(name, age, username, mission){
   super(name, age)
   this.username = username
   this.mission  = mission
  }

  getNameAndUsername(){
   return `Explorer ${this. name}, username: ${this.username}`
  }
}

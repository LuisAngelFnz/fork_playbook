import Explorer from './explorer.js'

export default class Viajero extends Explorer {
  constructor(name, age, username, mission, cycle){
    super(name, age, username, mission);
    this.cycle = cycle;
  }

  getGeneralInfo(){
    let nameAndUsername = this.getNameAndUsername()
    return `${nameAndUsername}, Ciclo ${this.cycle}`
  }
}

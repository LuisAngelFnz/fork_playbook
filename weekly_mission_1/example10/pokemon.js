export default class Pokemon {
  constructor (name){
    this.name = name;
  }

  sayHello (message){
    console.log(`Pokemon ${this.name} say Hellooooo..`);
  }
  sayMessage (greeting){
    console.log(`Mesage from pokemon: ${this.name}::: ${greeting}`);
  }
}

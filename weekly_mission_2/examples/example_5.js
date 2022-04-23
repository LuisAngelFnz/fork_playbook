// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
  name: "Perro",
  sayHelloToMyPet: function(yourPet){
    console.log(`${this.name} say's hello to ${yourPet}`)
  },
  sayByeToMyPet: function(yourPet){
    console.log(`${this.name} say's bye to ${yourPet}`)
  }
}

console.log("Ejemplo 5: Objeto con método que recibe parámetros")
myPet.sayHelloToMyPet("Masho");
myPet.sayByeToMyPet("Mashito")

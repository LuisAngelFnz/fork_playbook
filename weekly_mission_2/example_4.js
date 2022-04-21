// Ejemplo 4: Objeto con métodos
const pet = {
  name: "Masha",
  // Esta es una función que se guarda como propiedad
  sayHello: function(){
    // this.name hace referencia a la propiedad del objeto
    console.log(`${this.name} te saluda en español!`)
  },
  sayBye:() => {
    console.log(`${this.name} te dice adios!`)
  }
}

console.log("Ejemplo 4: Objeto con métodos")
pet.sayHello();
pet.sayBye();
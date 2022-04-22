// Ejemplo 3: forEach para imprimir los países en letras mayúsculas
const countries = [
  'Finland',
  'Denmark',
  'Sweden',
  'Norway',
  'Iceland'
]
console.log("Ejemplo 5: Imprimiendo la lista de países en mayúsculas")
// countries.forEach((element) => console.log(element.toUpperCase()))
console.log(String.prototype.toUpperCase);

//Chales en python si jala
//const countries_upper = countries.map(String.prototype.toUpperCase)
const upper_countries = countries.map(each => each.toUpperCase())
console.log(upper_countries)

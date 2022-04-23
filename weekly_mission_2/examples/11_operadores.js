// Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques
const ages = [24, 22, 50, 25, 32, 35, 50];
const age = ages.find((age) => age < 20);

if (age){
  console.log("Ejemplo 11: Primera edad menor a 20 es: "+ age);
}else{
  console.log('Hooo no!!!! no hay edades menor a 20')
}


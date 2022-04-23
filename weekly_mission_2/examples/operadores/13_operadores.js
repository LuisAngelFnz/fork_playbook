// Ejemplo 13: Uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación que indiques.
const names13 = [
  'Explorer 1',
  'Explorer 2',
  'Explorer 3'
]

const numer_find = 7
const result = names13.findIndex((name) => name.length = numer_find)

if (result){
  console.log("Ejemplo 13: Primer elemento cuya palabra sea mayor a 7 esta en la posición "+ result)
}else{
  console.log(`El explorer con el largo del nombre(${numer_find}) no existe`);
}


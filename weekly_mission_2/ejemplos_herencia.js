function Persona(nombrePila, apellido, edad, genero, intereses) {
  console.log('Creando persona');
  this.nombre = {
    nombrePila,
    apellido
  };
  this.edad = edad;
  this.genero = genero;
  this.intereses = intereses;
};

Persona.prototype.saludo = function() {
  alert('¡Hola! soy ' + this.nombre.nombrePila + '.');
};

function Profesor(nombrePila, apellido, edad, genero, intereses, materia) {
  console.log('Creando Profesor');

  Persona.call(this, nombrePila, apellido, edad, genero, intereses);

  this.materia = materia;
  
  return this;
}

// console.log(Profesor('Angel', 'Fernandez', 28, 'Hombre', 'Learn python', 'historia'));
console.log(Object.getOwnPropertyNames(Profesor.prototype));
console.log(Object.getOwnPropertyNames(Persona.prototype));

console.log(Persona.prototype.saludo);
console.log(Profesor.prototype.saludo);

Profesor.prototype = Object.create(Persona.prototype);

console.log(Profesor.prototype)



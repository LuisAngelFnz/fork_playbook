// Crear un objeto vacío
const obj_avoid = {}

// Crear un objeto con propiedades
const obj_properties = {
    'obj_name'            : 'any',
    'obj_last_name'       : 'your lastname',
    'obj_other_propertie' : 'yess'
}

console.log('Ejecutando objeto con propiedades');
console.log(obj_properties);

// Crear un objeto con propiedades diferentes
const obj_some_properties = {
    'name':'Luis',
    'last_name':'Fernandez',
    'hobbies':[
        'Dance',
        'Play Futbol',
    ],
    'parents':{
        'Mother':{
            'name':'Rosalia',
        },
        'Father':{
            'name':'Agustin'
        }
    }
}
console.log('Ejecutando objeto con propiedades diferentes');
console.log(obj_some_properties);

// Crear un objeto con métodos
const obj_functions_args_avoid = {
    'name':{
        'emmiter'  : 'Luis',
        'receiver' : 'Angel'
    },
    'call':function(){ //Con arrow functions no funciona ;(
        console.log(this.name);
        console.log(`Llamada entrante de ${this.name.emmiter} hacia ${this.name.receiver}`);
    }
}

console.log('Ejecutando objeto con métodos');
obj_functions_args_avoid.call()

// Crear un objeto que reciba parámetros
const obj_functions_args = {
    'name':{
        'emmiter':'Luis',
        'receiver':'Angel'
    },
    'call':function(message){
        console.log(`Llamada entrante de ${this.name.emmiter} hacia ${this.name.receiver}, con el mensaje: ${message}`);
    }
}
console.log('Ejecutando objeto con métodos y argumentos');
obj_functions_args.call('Son la 1:42 a.m. FFFF')

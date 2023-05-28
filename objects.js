// Crea un objeto llamado "producto" con las propiedades "nombre", "precio" y "cantidad". 
// Luego, escribe una función llamada "calcularTotal" que tome un objeto producto como parámetro 
// y devuelva el total a pagar (precio * cantidad).

const producto = {
    nombre : "Producto 1",
    precio : 10,
    cantidad : 2,
}


const calcularTotal = (producto) => {
    return producto.precio * producto.cantidad;
}


console.log(calcularTotal(producto));

// Implementa un objeto llamado "persona" con las propiedades "nombre", "edad" y "profesion". 
// A continuación, escribe una función llamada "presentarPersona" que tome un objeto persona como parámetro 
// y muestre en la consola una presentación de la persona.

const persona = {
    nombre : "Alejandro",
    edad : 33,
    profesion: "Developer"
}

const presentarPersona = (persona) => {
    return "Hola, me llamo " + persona.nombre + " tengo " + persona.edad + " años y soy " + persona.profesion;
}

console.log(presentarPersona(persona));

// Crea una función llamada "esMayorEdad" que reciba un objeto persona como parámetro 
// y devuelva true si la persona es mayor de edad (edad mayor o igual a 18), y false en caso contrario.

const esMayorEdad = (persona) => {
    return persona.edad >= 18;
}

console.log(esMayorEdad(persona));
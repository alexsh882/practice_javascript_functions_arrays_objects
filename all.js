// Resolver los siguientes ejercicios utilizando Funciones, Arreglos y Objetos (Si es necesario)

// 1)	Crear un programa que pida al usuario que ingrese un número y le devuelva un mensaje indicando 
// si el número es positivo,  negativo o si es 0.

const  numero = prompt("Ingresa un número");

const queNumeroEs = (numero) => {
    return numero > 0 ? alert("El número es positivo") : numero < 0 ? alert("El número es negativo") : alert("El número es 0");
}

queNumeroEs(numero);


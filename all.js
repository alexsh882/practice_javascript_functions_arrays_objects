// Resolver los siguientes ejercicios utilizando Funciones, Arreglos y Objetos (Si es necesario)

// 1)	Crear un programa que pida al usuario que ingrese un número y le devuelva un mensaje indicando 
// si el número es positivo,  negativo o si es 0.

const  numero = prompt("Ingresa un número");

const queNumeroEs = (numero) => {
    return numero > 0 ? alert("El número es positivo") : numero < 0 ? alert("El número es negativo") : alert("El número es 0");
}

queNumeroEs(numero);

// 2)	Crear un programa que pida un numero al usuario y le devuelva un mensaje diciendo si el número es primo o no.
// Aclaración: los números primos son aquellos que tienen exactamente 4 divisores.
// 2 positivos y 2 negativos y que son mayores que 1.

const numeroPrimo = prompt("Ingresa un número para saber si es primo");

const esPrimo = (numeroPrimo) => {
    
    //Un número es primo solo si es divisible entre 1 y sí mismo.
    //Por ejemplo, el número 4 no es primo porque es divisible entre 2.


    if (numeroPrimo == 0 || numeroPrimo == 1 || numeroPrimo == 4) return "El número NO es PRIMO";

    for (let i = 2; i < numeroPrimo / 2 ; i++) {
        if (numeroPrimo % i == 0) return "El número NO es PRIMO";        
    }
    // Si no pasa lo anterior, el número es primo
    return "El número es PRIMO";
}

alert(esPrimo(numeroPrimo));


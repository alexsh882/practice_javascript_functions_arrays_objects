let boton = document.querySelector('button');

boton.innerText = 'Botón';


// Crea una función llamada obtenerSuma 
// que reciba un arreglo de números como parámetro y
// devuelva la suma de todos los elementos del arreglo.

let numbers = [32,6,10,11,15,16,18,13,5,9,21,29,36];


const obtenerSuma = (array) => {
    let sumatoria = 0;
    for (let i = 0; i < array.length; i++) {
        sumatoria =  sumatoria + array[i];        
    }

    return sumatoria;

}

console.log(obtenerSuma(numbers));

//======================================================

const obtenerPares = (array) => {
    let pares = [];
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] % 2 == 0) {
            pares.push(array[i]);                    
        }
    }

    return pares;

}

console.log(obtenerPares(numbers));


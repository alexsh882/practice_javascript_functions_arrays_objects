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

//======================================================

let notas = [5,6,7,8,9,10];
let peso = [1,2,3,4,5,6];

const obtenerPromedioPonderado = (arrayNotas, arrayPesos) => {

    let sumaPonderada = 0;
    let sumaPeso = 0;

    for (let i = 0; i < arrayNotas.length; i++) {
        sumaPonderada = sumaPonderada + (arrayNotas[i] * arrayPesos[i]) 
        sumaPeso = sumaPeso + arrayPesos[i];
    }

    return sumaPonderada / sumaPeso;
}

console.log(obtenerPromedioPonderado(notas, peso));


document.title = "Práctica Js"

// Escribe una función llamada &quot;esMayorEdad&quot; que reciba una edad como parámetro y devuelva
// true si la edad es mayor o igual a 18, y false en caso contrario.

function esMayorEdad(edad) {
  return edad >= 18;
}

console.log("Función esMayorEdad:");
console.log(esMayorEdad(18));
console.log(esMayorEdad(17));


// Crea una función llamada calcularAreaRectangulo que tome dos parámetros: base y altura.
// La función debe calcular y devolver el área del rectángulo utilizando la fórmula área = base *
// altura.

console.log("");
console.log("Función calcularAreaRectangulo:");
console.log(calcularAreaRectangulo(10, 20));

function calcularAreaRectangulo(base, altura) {
  return base * altura;
}


// Implementa una función llamada &quot;esPalindromo&quot; que reciba una cadena como parámetro y
// devuelva true si la cadena es un palíndromo (se lee igual de izquierda a derecha y de derecha a
// izquierda), y false en caso contrario. Por ejemplo, para la cadena &quot;radar&quot; la función debería
// devolver true.

function esPalindromo(valor){    
  let valorReverse = valor.split('').reverse().join('');
  return valorReverse === valor;
}

console.log("");
console.log("Función esPalindromo:");
console.log(esPalindromo('radar'));
console.log(esPalindromo('otra'));
console.log(esPalindromo('neuquen'));


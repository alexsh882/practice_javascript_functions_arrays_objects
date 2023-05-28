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
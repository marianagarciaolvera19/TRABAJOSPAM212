
/*b.
Con el siguiente arreglo de productos, realiza lo siguiente:
1. Filtra los productos cuyo precio sea mayor a 1000.
2. Usa .map() para convertir el resultado en un nuevo arreglo con solo los nombres de
esos productos.*/

const productos = [
    { nombre: "Laptop", precio: 12000 },
    { nombre: "Mouse", precio: 250 },
    { nombre: "Teclado", precio: 750},
    { nombre: "Monitor", precio: 3000 }
];

let nombres = productos.filter(producto => producto.precio > 1000);
console.log("El precio de estos productos es myaor a 1000: ");
console.log(nombres); 

let solonombre = nombres.map(filtrado => filtrado.nombre);
console.log(solonombre);
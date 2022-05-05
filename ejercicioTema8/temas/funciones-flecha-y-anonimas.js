// Funciones tipo flecha (=>) y funciones anonimas 

const array = [1, 2, 3, 4, 5];

const array2 = array.map((valor) => valor * 2);  // funcion anonima

console.log(array2)

//

console.log(doble(7));
// console.log(dobleValor(7));  // funciones flecha no se puede acceder hasta que se inicialice

const dobleValor = valor => valor * 2;

console.log(dobleValor(7)); 


const array3 = array.map(dobleValor);

console.log(array3);

function doble(valor) {
    return valor * 2;
}
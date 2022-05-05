// comparar listas con .every()

const array1 = [4, 6, 7, 8, 45, -4, -6, -7, -1, -45, -8];

// const resultado = array1.every(valor => {
//     if (typeof valor > 0) {
//         return true
//     } else {
//         return false
//         }
// });

const resultado = array1.every(valor => valor > 0);

console.log(resultado);

// Comparación de listas

const ar1 = [1, 2, 3, 4, 5];
const ar2 = [1, 2, 3, 4, 5];

console.log(ar1 === ar2);

const compararArrays = (ar1, ar2) => {
    if (ar1.length !== ar2.length)
        return false
    const res = ar1.every((valor, indice) => valor === ar2[indice])
    return res
};

console.log(compararArrays(ar1, ar2));
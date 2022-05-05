// trabajar con arrays
let var1 = 45;
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "hola", true, var1];

console.log(array);

// acceder valores de array mediante indicce

console.log(array[10]);
console.log(array[0]);
console.log(array[1]);

// modificar valores de array
// .push agrega un valor al final del array
// .unshift agrega un valor al inicio del array
// .pop elimina el ultimo valor del array
// .shift elimina el primer valor del array

array.push("nuevo valor", 45, 100);
console.log(array);
array.pop();
console.log(array);
array.unshift("nuevo valor");
console.log(array);
array.shift();
console.log(array);


// .splice agrega y elimina valores del array
// .splice(indice, cantidad de elementos a eliminar, valor a agregar)
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "hola", true, var1];

array3.splice(3, 2, "nuevo valor", "nuevo valor 2");
console.log(array3);


const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "hola", true, var1];
array4.splice(2, 0, "nuevo valor", "nuevo valor 2");
console.log(array4);
array4.splice(2, 2);
console.log(array4);
array4.splice(10, 3);
console.log(array4);
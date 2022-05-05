// unir dos listas .concat()

const lista1 = ["hola", 2, false, null];
const lista2 = ["adios", 3, true, undefined];

console.log(lista1.concat(lista2));
console.log(lista1);
console.log(lista2);

const lista3 = lista1.concat(lista2);
console.log(lista3);

// unir dos lista con el factor de propagacion

console.log(...lista3);

const lista4 = [...lista1, ...lista2];
console.log(lista4);

// error comun en factor de propagacion
const lista5 = [lista1, lista2];
console.log(lista5);
// .some() da true si alguno de los elementos de un array cumple la condición

const array = [3, 6, 45, 34556, 67, 2, -23, 66];

const res = array.some(valor => valor < 0);

console.log(res);

const res2 = array.some(valor => valor === 3);

console.log(res2);

const listaObjetos = [
    { nombre: 'Juan', edad: 16 },
    { nombre: 'Pedro', edad: 45 },
    { nombre: 'Maria', edad: 53 },
    { nombre: 'Luis', edad: 23 },
    { nombre: 'Jose', edad: 78 },
]

const existePersonaEdad = listaObjetos.some(persona => persona.edad <= 18);

console.log(existePersonaEdad);

const existePersonaNombre = listaObjetos.some(persona => persona.nombre === 'Maria');

console.log(existePersonaNombre);

 
// obtener lista  a partir de objeto iterable

const str = "Hola soy tu amigo";

console.log(str[5]);

const ar_str = Array.from(str);
console.log(ar_str);

const set = new Set([2, 3, "Hola", 4]);
const ar_set = Array.from(set);
console.log(ar_set);


// .keys da lista de indices

const keys = array.keys();
console.log(keys);

const ar_keys = Array.from(keys);
console.log(ar_keys);

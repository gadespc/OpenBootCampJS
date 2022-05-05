const array = ["Cádiz, Madrid, Barcelona, Sevilla, Zaragoza"];

const val = array.forEach(valor => {
    console.log(valor)
});

console.log(val);

const newArray = array.map((valor, indice) => {
    console.log(indice)
    return `${indice + 1} - ${valor}`
});

console.log(newArray);

const listaObjetos = [
    { nombre: "Juan", edad: 20 },
    { nombre: "Pedro", edad: 30 },
    { nombre: "Ana", edad: 40 },
    { nombre: "María", edad: 50 },
    { nombre: "José", edad: 60 },
    { nombre: "Luis", edad: 70 },
    { nombre: "Javier", edad: 80 },
    { nombre: "Antonio", edad: 90 },
]

// const personasMayores = listaObjetos.filter(persona => {
//     if (persona.edad > 50) {
//         return true
//     } else {
//         return false
//     }
// });

const personasMayores = listaObjetos.filter(persona => persona.edad > 50);
console.log(personasMayores);

const nuevaLista = listaObjetos.filter(persona => persona.nombre !== "Juan");
console.log(nuevaLista);

// Reduce

const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const suma = valores.reduce((acumul, current, i, arrayOriginal) => {
    // console.log(acumul);
    // console.log(current);
    // console.log(i);
    // console.log(arrayOriginal);
    return acumul + current;
});

console.log(suma);
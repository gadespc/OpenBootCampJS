// .sort()
const array = [4, 30, 34, 12, 5, 7, 9, 10, 1, 2, 3];

console.log(array);

console.log(array.sort((a, b) => a - b));
console.log(array.sort((a, b) => b - a));

//  .sort() en array de objetos
const listaObjetos = [
    { nombre: "Javier", edad: 80 },
    { nombre: "Pedro", edad: 30 },
    { nombre: "Luis", edad: 70 },
    { nombre: "Ana", edad: 40 },
    { nombre: "María", edad: 50 },
    { nombre: "José", edad: 60 },
    { nombre: "Juan", edad: 20 },
    { nombre: "Antonio", edad: 90 },
]

listaObjetos.sort((a, b) => a .edad - b.edad);

console.log(listaObjetos);



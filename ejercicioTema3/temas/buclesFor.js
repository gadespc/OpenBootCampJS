// Bucles For

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// for of

for (let valor of array) {
    console.log(valor);
}

// for each

array.forEach(valor => {
    console.log(valor);
})

// for in 

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    developer: true
}

for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}
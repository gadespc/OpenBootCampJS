// Trabajando con Objetos
const obj = {
    id: 1,
    name: 'Juan',
    age: 30,
    libros_favoritos: ['El señor de los anillos', 'El hobbit'],
    isActive: true,
    address: {
        street: 'Calle falsa 123',
        city: 'Ciudad falsa',
        country: 'Pais falso'
    }
}

console.log(obj.address.street);

const propIsActive = 'isActive';
console.log(obj[propIsActive]);

const obj2 = obj;  // dos objetos apuntando a la misma memoria
console.log(obj2);

obj2.nombre = 'Juanito';
console.log(obj2.nombre);

let val1 = 4;
let val2 = val1;

val2 = 6;
console.log(val1);
console.log(val2);


const obj3 = { ...obj }; // clonando el objeto pasa a ser independiente

obj3.nombre = "Marcelo";

console.log(obj.nombre);
console.log(obj3.nombre);

/////////////
// ordenar listas de objetos en funcion de una propiedad
const listaPeliculas = [
    { titulo: 'El señor de los anillos', anio: '2001' },
    { titulo: 'El hobbit', anio: '2012' },
    { titulo: 'El padrino', anio: '1972' },
    { titulo: 'El padrino 2', anio: '1974' },
    { titulo: 'El padrino 3', anio: '1978' },
    { titulo: 'El efecto mariposa', anio: '2004' },
];

console.log(listaPeliculas);
// .sort()
listaPeliculas.sort((a, b) => a.anio - b.anio); // ordena de menor a mayor
console.log(listaPeliculas);




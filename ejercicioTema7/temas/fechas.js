// trabajando con fechas
const fecha = new Date();
console.log(fecha);

const fecha2 = new Date(2020, 0, 1, 12, 12, 12, 12);
console.log(fecha2);

const fecha3 = new Date(-100000000000000);
console.log(fecha3);

const fecha4 = new Date("October 13, 1956 12:23:13");
console.log(fecha4);

const fecha5 = new Date(-100000000000000);
console.log(fecha5);

console.log(fecha > fecha3);

console.log(fecha3 === fecha5); // ERROR no se pueden comparar fechas así

console.log(fecha3.getTime() === fecha5.getTime()); // para comparar pasar a milisegundoscon getTime()


// obtener el dia , mes y año

console.log(fecha2.getDate());
console.log(fecha2.getMonth() + 1);
console.log(fecha2.getFullYear());

//mostrar fecha en string

console.log(fecha2);
console.log(fecha2.toLocaleDateString('en-GB'));


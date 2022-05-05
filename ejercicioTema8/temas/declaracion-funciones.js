// funciones

const nom = "Jony"

function mostrar(nombre) {
    console.log(`Hola ${nombre}`);
}

mostrar(nom);

/// despedirse y cambiar con dato primitivo

let nombre2 = "Juan";
console.log(nombre2)

despedirse(nombre2)
console.log(nombre2)

function despedirse(nombre) {
    nombre = "Pedro";
    console.log(`Adios ${nombre}`);
}

// 

let persona = {
    nombre: "Juan", apellido: "Perez"
}
console.log(persona);

saludarPersona(persona);

console.log(persona);

function saludarPersona(objeto) {
    objeto.apellido = "Gomez";
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}

mostrar();

//////

function imprimeNumero(numero = 10) {  // parámetro por defecto
    console.log(numero);
}

imprimeNumero();

//////

function imprimir(...parametros) {
    console.log(parametros);
}

imprimir(1, 3, 4, 5, "hooola", {persona});

//////

function suma(...nums) {
    return nums.reduce((a, b) => a + b)
}

const s = suma(1, 2, 3, 4, 55, 34, 1)

console.log(s);

//////

let variable = "hola";  //scope llega a todo el codigo

function multiplicar(a = 0, b = 0) {
    console.log(variable)
    let variableInterna = "adios"; //scope solo llega a la funcion
    return a * b;
}

console.log(multiplicar(2, 3));
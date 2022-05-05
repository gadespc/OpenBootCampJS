// operador .valueOf() obtener valores numericos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf());
console.log(a.valueOf() + b.valueOf());


let str = new String('Hola soy un string');
console.log(str);
console.log(str.valueOf());

// NaN (Not a Number) Infinity
let num = Number('Adiós');
console.log(num);
console.log(isNaN(num));

let numerador = 19;
let divisor = 0;

let divisor_2 = null;

console.log(numerador / divisor);
console.log(numerador / divisor_2);

// numeros hexadecimales

let hex = 0xFF;
console.log(parseInt(hex, 16));


//convertir string a valores numericos con Number(), parseInt(), parseFloat()

let numero = '5.89';
let num2 = 17.2;

console.log(typeof numero);
console.log(numero + num2); //error
console.log(Number(numero) + num2);
console.log(parseInt(numero) + num2); //convertir a entero
console.log(parseFloat(numero) + num2);

// Obtener valores maximos y minimos de javascript

let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);
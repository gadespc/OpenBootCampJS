// Operaciones aritmeticas  

let a = 3.5;
let b = 4.8;

//Suma 
console.log(a + b);
//Resta
console.log(a - b);
//Multiplicacion
console.log(a * b);
//Division
console.log(a / b);
//Modulo
console.log(a % b);
//Incremento
a++;
console.log(a);
//Decremento
a--;
console.log(a);

// Representacion de numeros en strings

console.log(typeof a);
let a_s = a.toString();
console.log(a_s);
console.log(typeof a_s);

// Redondeo de numero flotante

let c = 3.3;
let d = c * 3;

console.log(d);
console.log(d.toFixed(2));
console.log(typeof d.toFixed(2));

// .toPrecision(x)

console.log(d.toPrecision(3));
console.log(typeof d.toPrecision(3));

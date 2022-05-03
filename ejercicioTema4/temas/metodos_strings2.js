// Metodos de cadenas de texto parte 2

let input = "Escorpio";

let db = "escorpio";

// to lower case - to upper case

console.log(input.toLowerCase() === db.toLowerCase());
console.log(input.toUpperCase() === db.toUpperCase());
console.log(input === db);

// concatenar cadenas de caracteres

let str1 = "Hola, soy la primera cadena de caracteres.";
let str2 = "Y yo soy la segunda.";

console.log(str1.concat(" ", str2));
console.log(str1 + " " + str2);
console.log(`${str1} ${str2}`);

// Eliminar espacios al principio y al final

let str3 = "    Hola, soy la primera cadena de caracteres.    ";
console.log(str3.length)
console.log(str3.trim().length);

// Obtener caracter en una posicion

let str4 = "Hola, soy el string numero 4.";

console.log(str4.charAt(0));
console.log(str4[0]);

// Obtener posicion de palabra en string

let str5 = "Hola, soy el string numero 5.";
console.log(str5.indexOf("string"));
console.log(str5.charAt(13))
console.log(str5.lastIndexOf("el"));
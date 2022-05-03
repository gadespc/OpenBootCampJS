
let str = "Hola soy un string";
console.log(str.length);

let slice_str = str.slice(5, 11);
console.log(slice_str);

let substring_str = str.substring(5, 11);
console.log(substring_str);

let substr_str = str.substr(5, 11);
console.log(substr_str);

// reemplazar contenido de string

let cadena = "Hola soy un pc";
console.log(cadena.replace("pc", "PC"));
console.log(cadena);
console.log(cadena.replace("pc", "OVNI"));

let textoLargo = "Texto lago para tener un buen texto largo como todos los textos largos del mundo , suelen tener muchas palabras y caracteres";
console.log(textoLargo.replace(/largo/g, "pequeño"));
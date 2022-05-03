// tema 4 strings

let str = "Hola mundo";
let str_comillas = "Hola 'mundo'";

console.log(str.length);
console.log(str.charAt(9));
console.log(str);
console.log(str_comillas);


// comillas invertidas  

let str_backticks = `Hola mundo con backticks`;

console.log(str_backticks);

let nom = "Jony";
let saludo = `Hola ${nom} bienvenido: ${str}`;

console.log(saludo);


// plantillas html

let plantilla = `
<html>
    <body>
        <h1>Hola ${nom}</h1>
    </body>
</html>`;

console.log(plantilla);

// introduccion de variables en html
let libros = ["El señor de los anillos", "El principito", "El hobbit"];

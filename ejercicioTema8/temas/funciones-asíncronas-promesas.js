// Funciones asíncronas

function miAsinc() {
    // Llamada a base de datos externa
}

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2) // hacer que i sea 0 o 1
    // Si todo va bien
    if (i !== 0) {
    resolve('Todo va bien');
    } else {
    // Si algo va mal
    reject('Algo va mal');
    }
});

miPromesa
    .then(() => console.log('Todo va bien'))
    .catch(() => console.log('Algo va mal'))
    .finally(() => console.log('Siempre se ejecuta'));

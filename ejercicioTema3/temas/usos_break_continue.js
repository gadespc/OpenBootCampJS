// usos de break y continue
let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {
    if (lista[i] === 5) {
        continue;
    }

    if (lista[i] > 7) {
        break;
    }
    console.log(lista[i]);
}

// ambitos de bucle


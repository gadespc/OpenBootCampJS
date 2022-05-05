// 

const miFuncion = val => {
    if (typeof val === 'number') {
    return val * 2
    }
    // return 'No es un numero'
    throw new Error('Debe ser un numero')
}

// const elDoble = miFuncion("s")

const numero = "n"

try {
    const elDoble = miFuncion(numero)
    console.log(elDoble)
} catch (e) {
    console.log(`${e}`)	
} finally {
    console.log("Se ejecuta de igual manera")    
}



// InternalError, SyntaxError, ReferenceError, RangeError, TypeError, URIError
// 
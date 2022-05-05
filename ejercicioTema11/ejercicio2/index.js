class Figura {

    constructor(color) {
        this._color = color;
    } 

    get color() {
        return this._color;
    }

    set color(color) {
        this._color = color;
    }
    
}

class Circulo extends Figura {
    constructor(color, radio) {
        super(color);
        this._radio = radio;
    }
}

class Rectangulo extends Figura {
    constructor(color, base, altura) {
        super(color);
        this._base = base;
        this._altura = altura;
    }
}

const cuadrado = new Figura('rojo');
console.log(cuadrado.color);
cuadrado.color = 'verde';
console.log(cuadrado.color);
const circulo = new Circulo('rojo', 10);
console.log(circulo.color);
console.log(circulo.radio);
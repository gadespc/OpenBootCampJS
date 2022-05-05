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
    
    calcularArea() {
        return -1;
    }
}

class Circulo extends Figura {
    constructor(color, radio) {
        super(color);
        this._radio = radio;
    }

    calcularArea() {
        return Math.PI * this._radio ** 2;
    }    
}

class Rectangulo extends Figura {
    constructor(color, base, altura) {
        super(color);
        this._base = base;
        this._altura = altura;
    }

    calcularArea() {
        return this._base * this._altura;
    }
}

const cuadrado = new Figura('rojo');
console.log(cuadrado.color);
cuadrado.color = 'verde';
console.log(cuadrado.color);
const circulo = new Circulo('rojo', 10);
console.log(circulo.color);
console.log(circulo._radio);
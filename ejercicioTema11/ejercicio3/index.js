class Figura {
 
    constructor(color) {
        let _color = color;
        this.getColor = () => {
            return _color;
        }
    
        this.setColor = (color) => {
            _color = color;
        }
    } 

    calcularArea() {
        return -1;
    }
}

class Circulo extends Figura {
    constructor(color, rad) {
        super(color);
        this.radio = rad;
    }

    calcularArea() {
        return Math.PI * this.radio ** 2;
    }    
}

class Rectangulo extends Figura {
    constructor(color, bas, alt) {
        super(color);
        this.base = bas;
        this.altura = alt;
    }

    calcularArea() {
        return this.base * this.altura;
    }
}

const cuadrado = new Figura('rojo');
console.log(cuadrado.getColor());
cuadrado.setColor('verde');
console.log(cuadrado.getColor());

const circulo = new Circulo('rojo', 10);
console.log(circulo.getColor());
console.log(circulo.radio);
console.log(circulo.calcularArea());
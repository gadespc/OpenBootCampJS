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
}

class Circulo extends Figura {
    constructor(color, rad) {
        super(color);
        this.radio = rad;
    }  
}

class Rectangulo extends Figura {
    constructor(color, bas, alt) {
        super(color);
        this.base = bas;
        this.altura = alt;
    }
}

const cuadrado = new Figura('rojo');
console.log(cuadrado.getColor());
cuadrado.setColor('verde');
console.log(cuadrado.getColor());

const circulo = new Circulo('rojo', 10);
console.log(circulo.getColor());
console.log(circulo.radio);



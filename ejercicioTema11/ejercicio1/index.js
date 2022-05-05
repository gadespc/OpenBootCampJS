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

// const cuadrado = new Figura('rojo');
// console.log(cuadrado.color);
// cuadrado.color = 'verde';
// console.log(cuadrado.color);
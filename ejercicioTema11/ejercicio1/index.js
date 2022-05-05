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

const figura1 = new Figura('rojo');
console.log(figura1.getColor());
figura1.setColor('verde');
console.log(figura1.getColor());

class Rectangle{
    constructor(length, breadth){
        this.length = length;
        this.breadth = breadth;
    }
    
    getArea(){
        let area = this.length * this.breadth;
        console.log(`Area of shape is ${area}`)
    }
}

class Square extends Rectangle{
    constructor(side){
        super(side, side);
    }
    getPerimeter(){
        let perimeter = this.length * 4
        console.log(`Primeter of shape is ${perimeter}`);
    }
}

let shape = new Square(5);
shape.getPerimeter();
shape.getArea();
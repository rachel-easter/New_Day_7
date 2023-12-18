"use strict";
class Circle {
    constructor() {
        this.a = 12;
        this.b = 20;
    }
    area() {
        return Math.PI * this.a * this.a;
    }
}
class Rectangle {
    constructor() {
        this.a = 12; //length
        this.b = 20; //breadth
    }
    area() {
        return this.a * this.b;
    }
}
const circle = new Circle();
console.log(circle.area());
const rectangle = new Rectangle();
console.log(rectangle.area());

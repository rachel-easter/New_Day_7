//Interface:
//Interface with class and function usage
interface Calculation{
    a:number,//radius
    b:number
    area():number
}
class Circle implements Calculation{
    a=12;
    b=20;
    area():number{
    return Math.PI*this.a*this.a;
    }

    
}
class Rectangle implements Calculation{
    a=12;//length
    b=20;//breadth
    area():number{
    return this.a*this.b ;
    }

    
}
const circle=new Circle();
console.log(circle.area());
const rectangle=new Rectangle();
console.log(rectangle.area());
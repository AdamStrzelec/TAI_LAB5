class Complex{
    private re: number;
    private im: number;

    constructor(re: number, im: number){
        this.re = re;
        this.im = im;
    }

    add(obj: Complex) : Complex{
        return new Complex(this.re + obj.re, this.im + obj.im);
    }

    sub(obj: Complex) : Complex{
        return new Complex(this.re - obj.re, this.im - obj.im);
    }

    module(){
        return Math.sqrt(Math.pow(this.re,2) + Math.pow(this.im,2));
    }

    toString(){
        console.log(this.re + ' + ' + this.im);
    }
}

let a: Complex = new Complex(2,3);
let b: Complex = new Complex(4,5);

console.log(a.add(b));
console.log(a.sub(b));
console.log(a.module());
a.toString();
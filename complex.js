"use strict";
class Complex {
    constructor(re, im) {
        this.re = re;
        this.im = im;
    }
    add(obj) {
        return new Complex(this.re + obj.re, this.im + obj.im);
    }
    sub(obj) {
        return new Complex(this.re - obj.re, this.im - obj.im);
    }
    module() {
        return Math.sqrt(Math.pow(this.re, 2) + Math.pow(this.im, 2));
    }
    toString() {
        console.log(this.re + ' + ' + this.im);
    }
}
let a = new Complex(2, 3);
let b = new Complex(4, 5);
console.log(a.add(b));
console.log(a.sub(b));
console.log(a.module());
a.toString();

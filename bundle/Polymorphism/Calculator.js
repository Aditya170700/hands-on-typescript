"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    constructor(a, b) {
        this.a = 0;
        this.b = 0;
        this.a = a;
        this.b = b;
    }
    calculate() {
        console.log(`Operasi 2 bilangan (${this.a} dan ${this.b})`);
    }
}
exports.Calculator = Calculator;

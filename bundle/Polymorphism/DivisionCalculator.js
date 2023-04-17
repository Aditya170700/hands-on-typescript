"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivisionCalculator = void 0;
const Calculator_1 = require("./Calculator");
class DivisionCalculator extends Calculator_1.Calculator {
    constructor(a, b) {
        super(a, b);
        this.a = 0;
        this.b = 0;
        this.a = a;
        this.b = b;
    }
    calculate() {
        console.log(`${this.a} / ${this.b} = ${this.a / this.b}`);
    }
}
exports.DivisionCalculator = DivisionCalculator;

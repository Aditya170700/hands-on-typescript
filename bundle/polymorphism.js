"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AdditionCalculator_1 = require("./Polymorphism/AdditionCalculator");
const DivisionCalculator_1 = require("./Polymorphism/DivisionCalculator");
const MultiplicationCalculator_1 = require("./Polymorphism/MultiplicationCalculator");
const SubtractionCalculator_1 = require("./Polymorphism/SubtractionCalculator");
let add = new AdditionCalculator_1.AdditionalCalculator(1, 1);
let subtract = new SubtractionCalculator_1.SubtractionCalculator(3, 1);
let multiply = new MultiplicationCalculator_1.MultiplicationCalculator(3, 3);
let divide = new DivisionCalculator_1.DivisionCalculator(3, 2);
function proses(calc) {
    calc.calculate();
}
proses(add);
proses(subtract);
proses(multiply);
proses(divide);

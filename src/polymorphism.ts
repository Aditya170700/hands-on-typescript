import { AdditionalCalculator } from "./Polymorphism/AdditionCalculator";
import { Calculator } from "./Polymorphism/Calculator";
import { DivisionCalculator } from "./Polymorphism/DivisionCalculator";
import { MultiplicationCalculator } from "./Polymorphism/MultiplicationCalculator";
import { SubtractionCalculator } from "./Polymorphism/SubtractionCalculator";

let add = new AdditionalCalculator(1, 1);
let subtract = new SubtractionCalculator(3, 1);
let multiply = new MultiplicationCalculator(3, 3);
let divide = new DivisionCalculator(3, 2);

function proses(calc: Calculator) {
  calc.calculate();
}

proses(add);
proses(subtract);
proses(multiply);
proses(divide);

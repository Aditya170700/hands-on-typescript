import { Calculator } from "./Calculator";

export class AdditionalCalculator extends Calculator {
  a = 0;
  b = 0;

  constructor(a: number, b: number) {
    super(a, b);

    this.a = a;
    this.b = b;
  }

  calculate(): void {
    console.log(`${this.a} + ${this.b} = ${this.a + this.b}`);
  }
}

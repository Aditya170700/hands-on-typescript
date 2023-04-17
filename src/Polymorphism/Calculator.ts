export class Calculator {
  a = 0;
  b = 0;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  calculate(): void {
    console.log(`Operasi 2 bilangan (${this.a} dan ${this.b})`);
  }
}
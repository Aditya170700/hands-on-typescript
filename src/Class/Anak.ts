import { Induk } from "./Induk";

export class Anak extends Induk {
  nama = "Anak Induk";

  constructor (param: string) {
    // constructor di children, harus memanggil constructor parent dengan method super()
    super(`${param} untuk induk`);
    console.log(param);
  }

  printNamaInduk(): void {
    // akses properti namaInduk milik Induk
    console.log(this.namaInduk);
  }

  // override method printAlamat milik Induk
  printAlamat(): void {
      console.log("Alamat anak induk");
  }

  printAlamatInduk(): void {
    // akses method printAlamat milik Induk
    super.printAlamat();
  }

  getNamaPanggilanAnak(): void {
      console.log("Anakku");
  }
}
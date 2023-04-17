class Induk {
  namaInduk = "Induk Anak";

  constructor (param: string) {
    console.log(param);
  }

  printAlamat(): void {
    console.log("Alamat induk");
  }
}

class Anak extends Induk {
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
}

let anak = new Anak("Ini param dari objek anak");

console.log(anak.nama);

anak.printNamaInduk();
anak.printAlamat();
anak.printAlamatInduk();

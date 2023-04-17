class Induk {
  namaInduk = "Induk Anak";

  printAlamat(): void {
    console.log("Alamat induk");
  }
}

class Anak extends Induk {
  nama = "Anak Induk";

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

let anak = new Anak();

console.log(anak.nama);

anak.printNamaInduk();
anak.printAlamat();
anak.printAlamatInduk();

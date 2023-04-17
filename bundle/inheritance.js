"use strict";
class Induk {
    constructor(param) {
        this.namaInduk = "Induk Anak";
        console.log(param);
    }
    printAlamat() {
        console.log("Alamat induk");
    }
}
class Anak extends Induk {
    constructor(param) {
        // constructor di children, harus memanggil constructor parent dengan method super()
        super(`${param} untuk induk`);
        this.nama = "Anak Induk";
        console.log(param);
    }
    printNamaInduk() {
        // akses properti namaInduk milik Induk
        console.log(this.namaInduk);
    }
    // override method printAlamat milik Induk
    printAlamat() {
        console.log("Alamat anak induk");
    }
    printAlamatInduk() {
        // akses method printAlamat milik Induk
        super.printAlamat();
    }
}
let anak = new Anak("Ini param dari objek anak");
console.log(anak.nama);
anak.printNamaInduk();
anak.printAlamat();
anak.printAlamatInduk();

"use strict";
class Induk {
    constructor() {
        this.namaInduk = "Induk Anak";
    }
    printAlamat() {
        console.log("Alamat induk");
    }
}
class Anak extends Induk {
    constructor() {
        super(...arguments);
        this.nama = "Anak Induk";
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
let anak = new Anak();
console.log(anak.nama);
anak.printNamaInduk();
anak.printAlamat();
anak.printAlamatInduk();

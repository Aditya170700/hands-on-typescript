"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Anak = void 0;
const Induk_1 = require("./Induk");
class Anak extends Induk_1.Induk {
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
exports.Anak = Anak;

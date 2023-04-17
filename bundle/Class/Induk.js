"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Induk = void 0;
// kelas abstract harus ada keyword abstract
class Induk {
    constructor(param) {
        this.namaInduk = "Induk Anak";
        console.log(param);
    }
    printAlamat() {
        console.log("Alamat induk");
    }
}
exports.Induk = Induk;

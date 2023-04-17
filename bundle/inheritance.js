"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Anak_1 = require("./Class/Anak");
let anak = new Anak_1.Anak("Ini param dari objek anak");
console.log(anak.nama);
anak.printNamaInduk();
anak.printAlamat();
anak.printAlamatInduk();
anak.getNamaPanggilanAnak();

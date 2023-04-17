import { Anak } from "./Class/Anak";

let anak = new Anak("Ini param dari objek anak");

console.log(anak.nama);

anak.printNamaInduk();
anak.printAlamat();
anak.printAlamatInduk();
anak.getNamaPanggilanAnak();
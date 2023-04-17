// kelas abstract harus ada keyword abstract
export abstract class Induk {
  namaInduk = "Induk Anak";

  constructor (param: string) {
    console.log(param);
  }

  printAlamat(): void {
    console.log("Alamat induk");
  }

  // kalo punya method abstract, harus di override kelas turunanya
  abstract getNamaPanggilanAnak(): void;
}
"use strict";
class Manusia {
    constructor() {
        this.nama = "Aditya";
    }
    setNama(nama) {
        this.nama = nama;
    }
    getNama() {
        return this.nama;
    }
}
let m = new Manusia();
m.setNama("Ricki");
console.log({ nama: m.getNama() });

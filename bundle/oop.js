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
// instance dari class manusia
let m = new Manusia();
m.setNama("Ricki");
console.log({ nama: m.getNama() });
function getObject(m) {
    // 
}
// sama dengan object m
let n = {
    nama: "Aditya",
    setNama(nama) {
        this.nama = nama;
    },
    getNama() {
        return this.nama;
    }
};
getObject(n);

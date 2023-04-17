class Manusia {
  nama = "Aditya";

  setNama(nama : string) : void {
    this.nama = nama;
  }

  getNama() : string {
    return this.nama;
  }
}

// instance dari class manusia
let m = new Manusia();

m.setNama("Ricki");
console.log({nama : m.getNama()});

function getObject(m : Manusia) {
  // 
}

// sama dengan object m
let n = {
  nama: "Aditya",
  setNama(nama : string) : void {
    this.nama = nama;
  },
  getNama() : string {
    return this.nama;
  }
}

getObject(n);

//Destrukturisasi
//Before ES6
/*let sayur = ["Koll","Sayur Ubi","Sayur Leilem"];

let sayur1 = sayur[0];
let sayur2 = sayur[1];
let sayur3 = sayur[2];

console.log(sayur1);
console.log(sayur2);
console.log(sayur3);
*/

// ES6
let sayur = ["Leilem","Sambiki","Kangkung","Koll","Acar"];
let [sayur1,sayur2,sayur3, ,sayur5] = sayur;


console.log(sayur1);
console.log(sayur2);
console.log(sayur3);

// Bisa memilih element mana yang tidak ingin di simpan
console.log(sayur5)

// Menukar Nilai
let a = 30;
let b = 45;

[a,b] = [b,a];

// Destrukturisasi Objek

let gusti ={
    umur : 22,
    tinggi : 170,
    status : "Jombolo"
}

//Menambahkan titik dua setalah nama properti
let { umur : age,tinggi,status} = gusti;

console.log(age)
console.log(tinggi)
console.log(status)

//Destrukturisasi Objek Bertingkat // ( Belum Mengerti)
let murid = {
    kelas: "12a",
    nama: ["ani", "yahya", "sinto"],
    prestasi: {
      olahraga: "juara 1",
      akademik: "juara 2"
    }
  };
  
  let {
    prestasi: { olahraga }
  } = murid;
  
  console.log(olahraga);
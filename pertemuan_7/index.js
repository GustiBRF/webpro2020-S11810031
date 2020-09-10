//JavaScript Conditional
let nilaiAndi = 95;

if (nilaiAndi > 80) {
  console.log("SANGAT MEMUASKAN");
} else if (nilaiAndi >= 60 && nilaiAndi <= 80) {
  console.log("MEMUASKAN");
} else {
  console.log("JANGAN MENYERAH, COBA LAGI!");
}

//JavaScript Conditional Switch Case
let jamKerja;
let hari = "minggu";

switch (hari) {
  case "senin":
    jamKerja = "Jam Kerja = 8 AM to 5 PM";
    break;
  case "selasa":
    jamKerja = "Jam Kerja = 8 AM to 3 PM";
    break;
  case "rabu":
    jamKerja = "Jam Kerja = 8 AM to 4 PM";
    break;
  case "kamis":
    jamKerja = "Jam Kerja = 8 AM to 2 PM";
    break;
  case "jumat":
    jamKerja = "Jam Kerja = 8 AM to 12 PM";
    break;
  default:
    jamKerja = "LIBUR AKHIR PEKAN";
}
console.log(jamKerja);

//JavaScript Loop For

for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
//JavaScript Loop (For In)

const buku = {
    judul: "Harry Potter and The Philosopher's Stone",
    pengarang: "J. K. Rowling",
    tahun: 1997
 };
 for (a in buku) {
   console.log(a, ':', buku[a]);
 }

//JavaScript Loop (For Of)
const bukuForOf = ["Game of Thrones: A Song of Ice and Fire",  
"Harry Potter and The Philosopher's Stone", 
"Lord of The Rings: The Fellowship of The Ring"
];

for (x of bukuForOf) {
console.log(x);
}

//JavaScript Loop (While)
/*let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}
*/

//JavaScript Loop (Do While)
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 10);
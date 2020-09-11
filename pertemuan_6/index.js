//Objek

const mahasiswa1=["Gusti","Bagus",22,false];
//literal
const mhs1 = {
    namaD : "Gusti",
    namaB : "Bagus",
    umur : 22,
    lulus : false,
    alamat : {
        kecamatan : "Wanea",
        kelurahan : "Pakowa",
    },
    IPSemester : [3.46,3.81,3.99,3.99],
    hitungIPK : function(){
        let total = 0;
        this.IPSemester.forEach(function(el){
            total = total + el;
        })
        return total / 4
    }
};
console.log(mhs1.alamat.kelurahan);
console.log(mhs1.IPSemester[2]);
console.log(mhs1.hitungIPK())
//new
/*const mhs2 = new Object();
mhs2.namaDpn = "Gusti" ;
mhs2.namaBlkg =  "Bagus";
*/

//Mengakses properti Objek
//Dot Notation
//console.log(mhs1.umur)

//Bracket notation
//console.log(mhs1["namaD"])


 
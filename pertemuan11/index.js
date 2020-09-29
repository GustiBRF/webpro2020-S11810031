// Arrow Function

// Contoh deklarasi Function lama
function ucapkanRindu(){

    return "Jangan Rindu Itu Berat, Biar Aku Saja";
};

console.log(ucapkanRindu())

//Contoh Deklarasi Arrow Function 
//with parameter
const perkalian = (angka1,angka2)=>{
    const hasil=angka1*angka2;
    return hasil;
}
console.log(perkalian(10,5));

//not with parameter
const rujak =()=>{
    const bahanRjk = ["Stroberi","Semangka","Leci"];
    return bahanRjk;
}
console.log(rujak())

//implicit Return Value

const salam = (nama) => `Hi ${nama}`;

console.log(salam("Kenangan, Apa Kabar ?"));

//Exercise
//Convert to ES6 Syntax

const yearUntiliRetirement = (year,firstName) =>{
    const age=22;
    const retire = 65-age;

    if (retire > 0){
        console.log(`${firstName} retired in ${retire} years` );
    }
    else{
        console.log(`${firstName} is already retired`);
    }
}

console.log(yearUntiliRetirement(2060,"Gusti"))
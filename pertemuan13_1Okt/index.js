//Rest & Spread Operator

/*const hitung = (a,b,c,d,e) => {
    const angka = [a,b,c,d,e];
    let total=0;
    for(let i=0 ; i<5;i++){
        total=total+angka[i]
    }
    return total;
}
;*/
//Res
/*const hitung = (param1,param2, ...params) => {

    console.log(param1);
    console.log(param2);
    console.log(params);

    let total=0;
    params.forEach((el) => {
        total=total+el
    })
    return total
}
console.log(hitung(1,2,3,4,5)) */

//Spread Operations

//1.Duplikasi Array
/*const angka = [1,2,3,4,5];
const angka2 = [...angka];

console.log(angka)*/
//2.Spread
const angka1 = [1,2,3,4,5];
const angka2 = [6,7,8,9,10];

const gabung5 = angka1.concat(angka2);
console.log(gabung5)

const gabung6 = [...angka1,...angka2];
console.log(gabung6)


let orang = {
    nama : "Gusti",
    umur : 22,
};
orang.job = " President"
orang = {...orang,pekerjaan : "Pendeta", pendidikan :"S3"}

console.log(orang)

const obj1 = {a :1};
const obj2 = {b :2};

const objG = {...obj1,...obj2}
console.log(objG)
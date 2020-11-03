// TEST 02

// Soal No 1

const calculateAge = (birthYear) => {
    return 2020-birthYear;
}

const yearUntilRetriment = (object) => {

    const age = calculateAge(object.year)
    const retriment = 60 - age;

    if (retriment > 0){
        console.log(`${object.firstName} retires in ${retriment} ${year}`)
    }
    else{
        console.log(`${object.firstName} is already retired`)
    }

    yearUntiliRetirement({year : 1987, firstName: 'John'});
}

// Soal No 2

const addNumber = (a,b,c,d,e,f,g) => {
    const numbers = [a,b,c,d,e,f,g]
    const sum=0;

    for(const i=0; i<numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}


// Soal No 3

const phi=3.14;
let power = 2;
let radius = 0;

const calculateArea = (obj) => {
    return phi*Math.pow(obj.radius,obj.power);
};

radius = 21;
const area21 = (radius,power) => radius-power;

radius = 7;
const area7 = (radius,power) => radius-power;

console.log(`area with radius 21 + ${area21} and area with 7 radius ${area7}`);

// Soal No 4

const makeAjaxRequest = (url,method) =>{
    if(!method){
        method ='GET'
    }
    console.log(url,method)
}
makeAjaxRequest('www.google.com');

//Bagian 2

//Soal 1

const warnaKesukaan = (warna = "putih" ) =>{
    return "warna kesukaan saya adalah" + warna
}
console.log(warnaKesukaan())

// Soal 2
let namabuah1 = [ 'apel','mangga'];
let namabuah2 = [ 'sirsak','semangka'];

const semuaNamaBuah=[...namabuah1,...namabuah2];
console.log(semuaNamaBuah)
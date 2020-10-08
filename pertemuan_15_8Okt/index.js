// Destructuring

// Memecah item atau properti pada array object ke dalam variable yang berbeda

// Array

const colors = [ "Merah","Kuning","Hijau"];

let = [satu,dua,tiga]=colors;
console.log(satu,dua,tiga);

// Obejct

const user = {
    name : "Jong",
    gender : "Male",
    age : 33,
};

//let {name,gender,age,born="Manado"}=user;
//console.log(name,gender,age,born)

let  { name, age : umur } = user;
console.log(name,umur)

const display =( {name} )=> {
    console.log(`nama saya adalah ${name}`);
}
display(user)

// Array Object

const users = [
    {id : 1, name1 : "johe"},
    {id : 2, name1 : "joga"},
    {id : 3, name1 : "joho"},
]

let [,,{name1}] = users;

console.log(name1)

// Kombinasi dengan Rest Operator

const warna = ["pink","abu","coklat","ijo"];

//let [satu, ..lainnya] = warna


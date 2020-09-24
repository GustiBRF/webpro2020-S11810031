// Var,  Let, Const

/*var nama = "Gusti";
var nama = "Bagus";

console.log(nama);*/
// Permasalah terdapat di tidak adanya error, variable nama tetap ditampilkan, tidak boleh deklarasi variable sama ( Kelemahan  var 1)

//Var Problem 2 ( Scope (Function Scope & Block Scope(yang bagus)))

/*(function tes(){
    for (var i= 0 ; i < 10 ; i++){
        console.log(i);
    }

})()*/ //<<< IFFE
//tes()
//console.log(tes)

for (let i= 0 ; i < 10 ; i++){
    console.log(i);
}

// Template Literal
const person = {
    firsN : "Gusti",
    lastN : "Bagus",
    age : 22,
};
console.log("My Name is " + person.firsN + " " + person.lastN);

console.log(`Hallo ${person.firsN} ${person.lastN} ,umur saya ${person.age}`)


// Arrow Function


/*const calcAge = (year)=>{
    return 2020-year;
}*/

//Multiple Arguments
/*const calcAge = (birth,current) =>{
    return current-birth;
};

const calcAge2 = ()=>{
    return 2020-1998;
}
console.log(calcAge2())

const years = [1998,1999,2000]

const calAge3 = years.map(function (el){
    return 2020 - el;
})

const calAge4 = years.map((el => 2020 - el))

console.log(calAge3);
*/

// Default Parameter
const calcAge = (birth,current=2020) => current-birth;

console.log(calcAge(1998))
const account ={
   
     nama : "Gusti",
     expenses : [],
    
}

// Push Description & Amount di dalam properti expenses
const addExpenses = function(desc,amnt){
    account.expenses.push({description :desc, amount: amnt});
}


// Memberikan Nilai di dalam Object account.expenses
addExpenses("Beli Makan",50000) 
addExpenses("Ongkir",10000)

//fungsi yang melakukan penjumalah terhadap " Amount di expenses"
const getAccountSummary = function(){
    let totalExpenses=0;
    account.expenses.forEach(function(el){
        totalExpenses=totalExpenses+el.amount;
    })
    return totalExpenses,

     console.log("Total Pengeluaran "+ account.nama + " adalah " + totalExpenses)
}

//Menampilkan nilai di funsing getAccountSummary
getAccountSummary()


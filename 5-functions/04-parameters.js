// 



let greeting = function (name) {
    console.log(`Hello, ${name}!`);
}

greeting('Becky');



// ...........................................................
let printMyName = function(fName, lName){
    let fullName = fName + " " + lName;
    console.log (`Hello, My Name is ${fullName}.`);
}
printMyName('Dan', 'Helmkamp');

// ............................................................

/*let calculateBalance = function (debits, credits){
//    parameter debits = [numbers]
//    parameter credits = [numbers]
    let total = 0;

    for(i in debits){
        total -= debits[i];
    }
    console.log(total);
}

let myDeb = [150.00, 34.00, 23.98]

calculateBalance(myDeb)*/

// .................................................................

let calculateBalance = function (debits, credits){
    //    parameter debits = [numbers]
    //    parameter credits = [numbers]
        let total = 0;
    
        for(debit of debits){
        
            total -= debit;
        }
        for (credit of credits){
            total += credit;
        }
        console.log(total);
    }
    
    let myDeb = [150.00, 34.00, 23.98]
    let myCred = [1000.00, 50.00, 25.00]
    
    calculateBalance(myDeb, myCred)
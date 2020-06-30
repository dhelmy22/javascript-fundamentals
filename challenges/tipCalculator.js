// 
// 
/*
    make a tip calc using a function
    that takes in the BILL (number)
    have it Return the TIP (number)
    Capture that returned tip in a variable
    Print that variable

*/

let tip = (total) => {
    return total * 0.2;
}

let tipAmount = tip(10);
console.log(tipAmount);

// ................................................

let tipCalc = function(billTotal) {
    tipAmt = billTotal * .15;
    return tipAmt;
};

tipCalc(30);



let returnToSender = () => {
    return 'Not Here';
}
let value = returnToSender();

console.log(value);
// ...................................................

let what = () => returnToSender();

let hmm = what();

console.log(hmm);
// .........................................

function whatCanIDo() {
    return 6;
};

// ..............................................

let tipCalc = function(billTotal) {
    return tipAmt = billTotal * .15;
    
};

console.log (tipCalc(30));
/*
let myname = "carson";

function someProcess() {
    const myName = "X-AESH-12";
    console.log(myName);
}
console.log(myname);

someProcess();
*/

let y = 12;
function scopey(){
    y = 33;
    console.log(y);
}

console.log(y);
scopey();
console.log(y);
/*
var slope = 12;
function varTest(){
    var slope = 56;
    if (true) {
        var slope = 9001;
        console.log(slope);
    }
    console.log(slope);
}
varTest();
console.log(slope);
*/

let slope = 12;
function varTest(){
    let slope = 56;
    if (true) {
        let slope = 9001;
        console.log(slope);
    }
    console.log(slope);
}
varTest();
console.log(slope);
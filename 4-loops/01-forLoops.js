let i = 7;

for (i = 0; i < 10; i++) {
    console.log('nice');
}
// increment i
// verify conditional (hop up if true, leave if false) ^ example above

// example below is how you will probably see the loop in the real world

for (let i = 0; i < 10; i++) {
    console.log('nice');
}
// for loop controller ie: (1; 2; 3)
// position 1 var declaration and/or initialization
// position 2 condition to run the loop (needs to be true)
// position 3 incrementation or change to allow the condition to fail
// -------------------------------------------------------------------------------------------
// challenge: using a for loop, console log from 1 to 20 counting by 2's

for (i = 0; i <= 20; i = i + 2){
    console.log(i);
}
// i += 2 also works       ^^^^^^^


// count from 10 to 0

for(let z = 10; z >= 0; z -= 1){
    console.log(z);
}

//  z-- works also      ^^^^^
// --------------------------------------------------------------------
let name = "PatrickStarrIsReallyCoolIWouldLikeToLiveUnderARockTooYo";
// INDEX
let pCharacter = name[name.length - 1];
console.log(pCharacter);

// Challenge:
// use a for loop, create a name variable, console log each character

let challenge = 'dan';

for (let x=0; x < challenge.length; x++ ){
    console.log(challenge[x]);
}

for (let c of challenge){
    console.log(c);
}
// --------------------------------------------------------------------------
let invoice = [3.1, 4.1, 89.98, 3.50];
let total = 0;

for (let r = 0; r < invoice.length; r++){
    total = total + invoice[r];
}
console.log(total);

// Create a function, when invoked, lists numbers between 1 - 10


for (let x = 1; x <= 10; x++ ) {
    console.log(x);
}

function count(){
    for (let x = 1; x <= 10; x++ ) {
        console.log(x);
    }
}
count();
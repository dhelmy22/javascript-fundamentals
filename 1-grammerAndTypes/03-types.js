// Booleans
let isOn = true;

let isRaining = false;

// Null
let empty = null;

// Undefined
let undef = undefined;

console.log(undef);

let whatAmI;
console.log(whatAmI);

// Numbers

let degrees = 90;
console.log(degrees);

let ratherLarge = 999999999;     
console.log(ratherLarge);

let whatIsGoingOnHere = 9999999999999999; 
console.log(whatIsGoingOnHere);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 +10) / 10;
console.log(numbersAreHard);

let created = Number('123');
console.log(created);

// Strings
let stringOne = "doubleydoos";
let stringTwo = 'singleydoos';

let first = 1050 + 100;
let second = '150' + 100;
let third = 1050 + '100';
let last = '1050' + '100';
console.log(first, second, third, last);

// Objects
let frodo = {
    race: 'Hobbit',
    rings: 1,
    cloak: true,
    primaryWeapon: {
        name: 'sting',
        attack: 30,
        damage: false,
    }
};
console.log(typeof frodo);

// Array
let groceryList = ['banana', 'kiwi', 'coconut'];

let aThing = [23, {isOn: true}, ['wallaby']];

// console.log(typeof aThing);

console.log(aThing instanceof Array);

// STRINGS: Methods

let userTitle = "                      a DaY in tHE lIfe of dev                     "
console.log(userTitle.toUpperCase());
console.log(userTitle.trim());

console.log(userTitle.trim().toUpperCase());


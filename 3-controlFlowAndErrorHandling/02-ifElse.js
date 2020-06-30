let temperature = 75;

if (temperature < 65){
    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary');
}



let birthDate = 3/22/1980;

if (birthDate === 3/26/1980) {
    console.log('Dan Helmkamp');
} else {
    console.log('What is your name?');
}

let myName = 'daniel';

if(myName == 'jon'){
    console.log('Dan Helmkamp');
} else{
    console.log('Hello, is your name Scott Jones?');
}

let name = 'Adam'

if(name == 'Adam'){
    console.log('Your name is' + ' ' + name);
}else {
    console.log('Hello, What is your name?');
}

// ifElse

let age = 30;

// older 25, say "yay you can rent a car"
// older 21, Hey you can purchase alcohol
// older than 18 but not 21  "Hey you can vote"
// younger than 18   "You can do stuff one day"

if (age >= 25){
    console.log('Yay, you can rent a car');
} else if (age >= 21){
    console.log('Hey, you can purchase alcohol');
} else if (age >= 18){
    console.log('Hey, you can vote');
} else{
    console.log('Sorry \'bout it!');
}
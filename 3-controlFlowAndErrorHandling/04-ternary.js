

let num = 6;

// Ternary   (condition) ? (true) : (false)

(num > 0) ? console.log('Yes') : console.log('nah');

// exactly this below

if (num > 0){
    console.log('yes');
}else {
    console.log('nah');
}



if (num > 0 && num < 5){
    console.log('yes');
}else if(num > 5){
    console.log('Im greater than 5');
}else {
    console.log('nah');
}


(num > 0 && num < 5)
    ? console.log('yes')
    : (num > 5)
        ? console.log('Im greater than 5')
        : console.log('nah');


// Challenge, write the AGE IF/ELSE as a big ternary

let age = 12;

(age >= 25)
    ? console.log('Yay, you can rent a car')
    : (age >= 21)
        ? console.log('Yay you can drink')
        : (age >= 18)
        ? console.log('Yay you can vote')
        : console.log('Sorry about it'); 






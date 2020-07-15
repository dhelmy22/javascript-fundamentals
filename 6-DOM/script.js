
// General Code

console.log('LOADED FILE!');

let myPTag = document.getElementById('testParagraph');


myPTag.style.color = 'blue';

console.log(document.querySelectorAll(`p.sampleClass`));

document.querySelectorAll(`p.sampleClass`)[0].innerText = 'My text has changed';

let toChange = document.querySelectorAll('p.sampleClass');
toChange.forEach(tag => {
    tag.innerHTML = '<h1>Hendrix</h1>';
}) 


// Button
document.getElementById('clickThisButton').addEventListener('click', event => {
    if (event.target.style.backgroundColor == 'red') {
        event.target.style.backgroundColor = 'blue';
    } else {
        event.target.style.backgroundColor = 'red';
    };
});



// .................................................................................

let userInput;

document.getElementById('nameInput').addEventListener('keyup', event => {
    userInput = event.target.value;
    document.getElementById('theValue').innerText = userInput;
});

// Challenge

let button1 = document.getElementById('challenge');
let abcd = document.getElementById('challengePTag');
 button1.addEventListener('click', event => {
    document.getElementById('challengePTag').innerText = `Hey the button was pushed!`;
 });

 abcd.addEventListener(`click`, () => {
 event.target.innerText = `Hey! No Pushing`;
 });

 
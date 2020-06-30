


// function array(item1, item2, item3){
//     this.items = {
//         0:item1,
//         1:item2,
//         2:item3,
//     }
// }

// let myList = [1,2,3];
// console.log(myList);

let coffee = ['esspresso', 'nitro','cappuccino', 'americano', 'cappuccino', 'frappuccino'];

console.log(coffee[2]);

let veryBest = coffee.pop();
console.log(veryBest);

console.log(coffee);

coffee.push('latte', 'decaf');
console.log(coffee);




// Stack---last in first out          array.pop();  array.push()
// .pop removes last item in string


// QUEUE ---->, Queue---first in first out       array.shift()   array.unshift()

let firstItem = coffee.shift();

console.log(firstItem);
console.log(coffee);

coffee.unshift('instant','drip');
console.log(coffee);

//      if indexOf returns something other than -1, keep looking butkeep the number that comes back

console.log(coffee.indexOf('cappuccino'));

console.log(coffee.indexOf('cappuccino'));

// 

coffee.forEach((item) => {
    console.log(item.length);
});
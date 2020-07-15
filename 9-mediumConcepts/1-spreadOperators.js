

let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];

// for (let item of array2){
//     array1.push(item);
// }

// array1.concat(array2);

array1 = [...array1,...array2];

console.log(array1);


// ............................................

let person1 = {
    name: 'Smokey Bear',
    outfit: 'Bear Costume',
}
let bearAttributes = {
    danger: 'Red',
    hunger: 10
}

// for (let item in bearAttributes){
//     person1[item] = bearAttributes[item];
    
// }
// console.log(person1);

person1 = {
    ...person1,
    ...bearAttributes,
}
console.log(person1);
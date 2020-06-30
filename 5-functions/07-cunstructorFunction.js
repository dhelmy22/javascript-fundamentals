/*
let person1 = {
    name: 'Macy',
    age: '24',
    canVote: true
}
let person2 = {
    name: 'Nick',
    age: '56',
    canVote: true
}
let person3 = {
    name: 'Argyle',
    age: '15',
    canVote: false
}


let person1 = createPerson('Macy', 24, true)
function createPerson (name, age, canVote) {
    let person = {
        name: name,
        age: age,
        canVote: canVote
    }
    return person;
}
*/
/*
function Person(name, age, canVote){
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}
let person1 = new Person('Macy', 24, true);
console.log(person1);
*/


function Person(name, age,){
    this.name = name;
    this.age = age;
    this.canVote = age >= 18;

    this.greeting = () => 'Hello, my name is ${this.name}';
}
let person1 = new Person('Macy', 24);
console.log(person1);
// Instances of a person  --  Singular occurance of something
let seth = new Person('Seth', 54);
console.log(seth);
let troy = new  Person('Troy', 12);
console.log(troy);




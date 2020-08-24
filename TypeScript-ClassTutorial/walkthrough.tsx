// 
let pokemon : string = 'gastly';
let age : number = 50;
let ghosttypesarebest : boolean = true;
let undef : undefined = undefined;
let nullVar : null = null;

//  OR 
let email: string;
email = 'test@test.com'
// ///////////////// *Array* ////////////////////////////////////
let students : Array<string> = ['tom', 'isaiah', 'ro'];
let scores: number[]= [10, 11, 12, 13, 14];

console.log(scores[2]);


// ///////////////// *Any* ////////////////////////////////////
let data: any = '12345';
data = 12345;


// //////////////// *Tuple* /////////////////////////////////////
let user: [string, number];
user = ['userOne', 5];

// //////////////// *Anchor Union Types* ///////////////////////
let x : number | string;

x='string'  //lets you choose number or a string
x='123'

// ///////////////// *Functions* ////////////////////////////////
function addNums(numOne: number, numTwo:number){
    return numOne + numTwo
}

console.log(addNums(1,2));

function multiplyNums(numOne: number, numTwo:number, someString? : string ){
    console.log(someString);
    return numOne * numTwo;
}
multiplyNums(1,2);
multiplyNums(2,3,'string');

// /////////////////////////// *Classes* ///////////////////////////////
class Person {
    firstName: string;
    lastName: string;
}
let Eric: Person= new Person();

Eric.firstName = 'Eric';
Eric.lastName = 'Winebrenner';








// let [name, age, height] = ['yaBoi', 89, 45];

// console.log(name, age, height);

// let numbers = [1,4,8,9];
// let [x,z,j] = numbers;

// console.log(x,z);

function handleThing(u){
    let n=[];
    for (let i=0; i<u; i++){
        n.push(i);
    }
    return n;
}
let [first, second, third] = handleThing(3);

console.log(first);
// .................................................
let coordinate ={
    x: 44,
    y: 21,
    z: -89
}

let shiftPosition = ({x, y, z}, force) =>{
    x += force/2;
    y -= force*3;
    z *= force/120;
    return {x, y, z}
}
let newPosition = shiftPosition(coordinate, 780);

console.log(newPosition);
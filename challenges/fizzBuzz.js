/*
-write a for loop running between the numbers 0-100
-for multiples of 3, instead of the number, console.log "Fizz"
-for multiples of 5 console.log "Buzz"
-for numbers which are multiples of BOTH 3 and 5, console.log "FizzBuzz"
-for any other number, console.log the value
*/

for (let i = 0; i <= 100; i++)
  if (i % 15 === 0){
    console.log("FizzBuzz");
} else if (i % 5 === 0){
    console.log("Buzz");
} else if (i % 3 === 0){
    console.log("Fizz");
} else {
    console.log(i);
}
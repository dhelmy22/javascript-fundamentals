// for ( let j = 10;  j >  5; j-- ) {
//     console.log(j);
//   }

//   for ( let j = 0; j <= 10; j+=2   ) {
//     console.log(j);
//   }

// let count = 0;
// for ( ;  count < 9; ++count ) {
//   console.log(count);
// }

// blah = function () {
//     return lala;
//     lala = "hi";
//   };
//   console.log(blah());

//   function sum(a, b) {
//     return a + b;
//   }
//   console.log(sum(1, 2, 3, 4));

//   function foo () {
//     return bar();
//     function bar() {
//       return "Poppin' bottles";
//     }
//   }
//   console.log(foo());

//   function whatDoesItDo(val) {
//     return val ? 1 : 2;
//   }; 

  function whatDoesItDo(color) {    
    if (color !== 'blue' || color !== 'green') {
       color = 'red';
    }
    return color;
 }; 
 
 console.log(whatDoesItDo());
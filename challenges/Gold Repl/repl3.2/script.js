// create/get input use createElementByTag
// 3 opportunities.  use loop for max attempt
// range 1-10
// prompt user.   gent input
// validation
// if statement

// let user know higher or lower

let computerNum = Math.floor(Math.random() * 10 + 1);
console.log(computerNum);

for (i = 0; i < 3; i++) {
  let whatNumber = parseInt(prompt("Pick a number between 1 and 10"));
  console.log(whatNumber);
    if(isNaN(whatNumber)){alert(`Use A Number`);}
  if (whatNumber === computerNum) {
    alert(`Good Job Sucka!`);
    console.log(`good`);
    break;
    // higher or lower
  } else if(i < 2){
    if (whatNumber > computerNum) {
      alert(`Try Again Fool! Pick A LOWER Number`);
    } else {
      alert(`Try Again Fool! Pick A HIGHER Number`);
    }
  } else {
      alert(`You Lost!`);
  }

}

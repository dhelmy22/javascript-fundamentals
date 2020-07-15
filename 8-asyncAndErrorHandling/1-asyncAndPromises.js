// .fetch .then .catch methods
// fetch an object  
// fetch().then().catch()
// 
// Promise constructor function takes 1 argument: a callback function that takes 2 parameters
// callback fn: first parameter contains function for resolving the promise. (comes from .then)
// callback fn: second parameter contains a function for resolving the promise when the promise is rejected (comes from .catch)
// a promise is async by nature
// 


// ....................................................................


let superCoolPromise = new Promise((resolve, reject) => {
    // resolve(42);
    reject('array indicies start at 1');
});

superCoolPromise.then(something => console.log(something)).catch(err => console.error(err));

// ...............................................................

let fetchie = (url) => {
    return new Promise((resolve, reject) =>{
        if(url === 'https://supercoolwebsite.io'){
            resolve(['abc, 123']);
        }else{
            let myError = new Error('Ya done goofed');
            reject(myError);
        }
    })
}
fetchie('https://supercoolwebsite.io').then(response => console.log(response)).catch(err => console.error(err));

console.log('did this break?')

// try this first. if it doesn't work, go to catch

async function letsTaklkAboutAsync(){
    try {
        let response = await fetchie('https://supercoolwebsite.io');
        console.log(response);

        throw new Error('yeeted out of there');

    } catch(e){
        console.log(e);
    }
    
};
letsTaklkAboutAsync();
console.log('yeet');

 let numbers = function (math){
     console.log(math);
 }
 numbers(1+1);



let unorderedList = document.querySelector('ul');
let submitButton =  document.getElementById('submit');
let rocketForm = document.querySelector('form');

// Fetch
const baseURL = 'https://api.spacexdata.com/v2/rockets'

let fetchRockets = (event) => {
    event.preventDefault();
    fetch(baseURL)
        .then( Response => Response.json() )
        .then( json => {
            console.log( json );
            json.forEach( rocket => {

                // create the li tag to hold the h1
                // create an h1 tag to hold the rocket name
                // attach the name to the h1 tag
                // add the h1 tag inside the li tag
                // add the li to the unordered list

                // let li = document.createElement('li');
                // let rocketName = document.createElement('h1');

                // rocketName.innerText = rocket.name;

                // li.appendChild(rocketName);
                // unorderedList.appendChild(li);

                let row  = document.createElement('tr');
                let name = document.createElement('td');
                let cost = document.createElement('td');
                let mass = document.createElement('td');
                let imageData = document.createElement('td');
                let img = document.createElement('img');

                name.innerText = rocket.name;
                cost.innerText = rocket.cost_per_launch
                mass.innerText = rocket.mass.kg;
                img.src = rocket.flikr_images[0];

                imageData.appendChild(img);

                row.appendChild(name);
                row.appendChild(cost);
                row.appendChild(mass);
                row.appendChild(img);




            } )
        })
        .catch( error => console.error(error) );
}

rocketForm.addEventListener('submit', fetchRockets);






// let myData = [
//     {title: 'Downtown is loud', author: 'Adam'},
//     {title: 'My room is hot', author: 'Nathaniel'},
//     {title: 'My neighbors are nosey', author: 'Alec'},
//     {title: 'BoatyMcBoatFace', author: 'Sheena'},
//     {title: 'I wish I could type as fast as Adam', author:'Sierra'},
//     {title: 'Pythons Better', author: "Yaboi and Swft"}
// ];

// // for(let i=0; i<10;i++){
// //     let mySuperCoolListItem = document.createElement('li');
    
// //     mySuperCoolListItem.innerText = "is this real life?";
    
// //     console.log(mySuperCoolListItem);
    
// //     unorderedList.appendChild(mySuperCoolListItem);
// // }


// //  Loops over the different statements (obj) inside of myData [array]
// for(let thing of myData){
//     // create the (li) that is going to hold the statement (title, author)
//      let mySuperCoolListItem = document.createElement('li');
//     // create the elements that will display the title and author  h3 is holding the title/p is holding the author
//     let myTitle = document.createElement('h3');     
//    let myAuthor = document.createElement('p');
// //    giving the two elements the values within the statement---------set the values to display as text(title, author)
//    myTitle.innerText = thing.title;
//    myAuthor.innerText = '-' + thing.author;
// // add the title and author elements into the list item (li)
//    mySuperCoolListItem.appendChild(myTitle);
//    mySuperCoolListItem.appendChild(myAuthor);
    
// // attach the (li) to the unordered list where it will be read by the user
//     unorderedList.appendChild(mySuperCoolListItem);
    
// };



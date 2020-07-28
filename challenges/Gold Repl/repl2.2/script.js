// const url = 'https://swapi.dev/api/people/<number here>'

// let getNumber = async (personId) => {
//     try {
//         let response = await fetch(`https://swapi.dev/api/people/${personId}`);
//         let data = await response.json();
//         console.log(data);

//     } catch {
//         console.error(`You Messed Up!`);
//     }
// }
// getNumber(1);






let getNumber = async (personId) => {
    try {
        await fetch(`https://swapi.dev/api/people/${personId}`)
        .then(response => response.json())
        .then(data => console.log(data));
    } catch {
        console.error(`You Messed Up!`);
    }
}
getNumber(1);




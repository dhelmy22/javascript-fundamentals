
/*


-retreive an xkcd comic based on a number a user chooses
-prompt user for a number (NUMBER)
-click a button to fetch the comic based on this number (click, event)
-take the data from the response and display the comic and title (json) 'JavaScript Object Notation'
-display the comic and title and date   (DOM)


*/

/*
NEED:
    Input Box for the Number
    Button
    Function - Grab the #
                craft the api url with the number
                fetch request to the url
                translate the response into json
                display the data to the dom



    Guide
*/

let searchTerm;

let resultArea = document.getElementById(`result`);

let displayComic = (data) =>{
    // img   <p>title    <p>date
resultArea.textContent = undefined;

    let comicImage = document.createElement(`img`);
    let title = document.createElement(`p`);
    let date = document.createElement(`p`);

    comicImage.src = data.img;
    title.innerText = data.title;
    date.innerText = `${data.day}/${data.month}/${data.year}`;

    resultArea.appendChild(comicImage);
    resultArea.appendChild(title);
    resultArea.appendChild(date);

}

let getComic = async (comicID) => {
    try{
        let response = await fetch(`https://cors-anywhere.herokuapp.com/http://xkcd.com${comicID}/info.0.json`)
        let data = await response.json();
        displayComic(data);
    }catch {
        console.error(`Something went wrong`)
    }
}

document.getElementById(inputField).addEventListener(`keyup`, (event) => {
    searchTerm = event.target.value
});

document.getElementById(searchTerm).addEventListener(`submit`, (event) =>{
    event.preventDefault();
    getComic(searchTerm);
})
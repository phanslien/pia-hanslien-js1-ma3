/*
Make a call to the Rawg API.

Go to https://rawg.io/apidocs and get an API key which you’ll use as part of the endpoint you’re making an API call to. You can use https://noroff.no for the URL and Noroff Assignment for the description.

You'll be given an API Key you can add as a "key" parameter in your fetch request.

Make a call to the following API endpoint replacing INSERTAPIKEYHERE with the key given to you from the Rawg API.
https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=INSERTAPIKEYHERE

Loop through the results and display the following properties in HTML, but only for the first eight results:
name
rating
number of tags (not the tag details, just the amount of tags)
The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

Be sure to handle any potential errors in the code.

You can use either regular promise or async/await syntax to make the call.

Be sure to arrange all file types appropriately, consult the repos from the lessons for examples.*/


const url = ('https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=df03bcdedbf84119abbce785e6609400');
const resultGames = document.querySelector(".results");

async function getGames() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        const list = results.results;
        resultGames.innerHTML = "";



        for (let i = 0; i < list.length; i++) {
            console.log(list[i].name);
            console.log(list[i].rating);
            console.log(list[i].tags.length);

            if (i === 8) {
                break;
            }

            resultGames.innerHTML += `<div class="result">${list[i].name} ${list[i].rating} ${list[i].tags.length}</div>`;
        }
    }
    catch (error) {
        console.log("An error has occured");
        resultGames.innerHTML = "An error has occured";

    }
}

getGames();

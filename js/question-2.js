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

            if (i === 7) {
                break;
            }

            resultGames.innerHTML += `<div class="result">${list[i].name} ${list[i].rating} ${list[i].tags.length}</div>`;
        }
    }

    catch (error) {
        console.log("An error has occurred");
        resultGames.innerHTML = "An error has occurred";
    }
}

getGames();

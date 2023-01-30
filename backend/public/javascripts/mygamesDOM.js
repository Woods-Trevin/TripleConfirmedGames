// const { Shelf } = require('../db/models')
// const { userId } = require('../routes/users')

// const { body } = require("express-validator")

window.addEventListener('DOMContentLoaded', async () => {
    // event.currentTarget.value
    // console.log("hey-----------------")

    // document.getElementsByClassName

    const userId = document.querySelector('.myGamesUserId').id
    // console.log(userId)

    const shelf = document.querySelectorAll(".shelflist")

    // console.log(shelf)
    const shelves = document.querySelectorAll(".shelflist")

    shelf.forEach(element => {
        element.addEventListener('click', async (event) => {
            try {
                // console.log('\n\n\n\n SHELVVVEESSSSS',shelves);
                shelves.forEach(shelf => {
                    // console.log('\n\n\n\n SHELF',shelf);
                    shelf.setAttribute('class', 'shelflist dynamic')})
                element.setAttribute('class','shelflist dynamic pink')
                // console.log("This works!")
                // console.log(event.target.id)
                shelfName = event.target.id
                const games = await fetch(`/users/${userId}/mygames/${shelfName}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" }
                })
                if (!games.ok) {
                    throw games
                }

                const { user } = await games.json()
                // console.log(`---------${user.Shelves[0].Games[0].title}`);
                // console.log(`---------${user.Shelves[0]}`);

                const tableBody = document.querySelector('.tableBody');
                const tableHTML = user.Shelves[0].Games.map(
                    (game) => `
                <tr class='mygamesTR'>
                    <td class='tableData'><a href='/games/${game.id}'><img src=${game.url} class="GameImg accessibleHLink" alt="video game image"></a></td>
                    <td class='tableData'><a href='/games/${game.id}' class="accessibleHLink"><p class='scale dynamic'>${game.title}</p></a></td>
                    <td class='tableData'>${game.studio}</td>
                    <td class='tableData'>${game.avgCleanRating}</td>
                    <td class='shelf'>${user.Shelves[0].name}</td>
                    <td class='tableData'>${game.releaseDate}</td>
                    </tr>
                    `
                    // <td>${user.Reviews[0].content}</td> this was on line 45
                );
                tableBody.innerHTML = tableHTML.join('')
            } catch (e) {
                console.error(e);
            }
        })
    });


})

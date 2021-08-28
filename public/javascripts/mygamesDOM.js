// const { Shelf } = require('../db/models')
// const { userId } = require('../routes/users')

// const { body } = require("express-validator")

window.addEventListener('DOMContentLoaded', async () => {
    // event.currentTarget.value
    console.log("hey-----------------")

    document.getElementsByClassName

    const userId = document.querySelector('.myGamesUserId').id
    console.log(userId)

    const shelf = document.querySelectorAll(".shelf")

    console.log(shelf)

    shelf.forEach(element => {
        element.addEventListener('click', async (event) => {
            try {
            console.log("This works!")
            console.log(event.target.id)
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
            console.log(`---------${user.Shelves[0]}`);

            const tableBody = document.querySelector('.tableBody');
            const tableHTML = user.Shelves[0].Games.map(
                (game) => `
                <tr>
                    <td>${game.title}</td>
                    <td>${game.studio}</td>
                    <td>${game.avgCleanRating}</td>
                    <td>${user.Shelves[0].name}</td>
                    <td>${game.releaseDate}</td>
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



    // addEventListener('click', async (event) => {
    //     console.log("This works!")
    // })
    // document.getElementsByClassName("tableBody");
    // const userId = document.querySelector('.myGamesUserId')


    // console.log(games)



    // const newGameTableHTML = '
    // each game in user.Games
    // tr
    // td placeholder box art
    // td #{ game.title }
    // td #{ game.studio }
    // td #{ game.avgCleanRating }
    // each shelf in game.Shelves
    // td #{ shelf.name },
    // //- td #{game.}
    // each review in game.Reviews
    // if review.userId === userId
    //             td #{ review.content }
    // a(href = `/games/${userId}`) Write a Review
    // td #{ game.releaseDate }
    // '
})

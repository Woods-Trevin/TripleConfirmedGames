window.addEventListener('DOMContentLoaded', async () => {
    // event.currentTarget.value
    console.log("hey-----------------")

    document.getElementsByClassName


    const reviewLikeButton = document.querySelectorAll('.likes')

    console.log(reviewLikeButton)

    reviewLikeButton.forEach(element => {
        element.addEventListener('click', async (event) => {
            console.log("This works!")
            console.log('-------------------------------');
        //    const totalLikes = event.target.id
        //     console.log(`------------------->>>>>>${totalLikes}`)
            const review = await Review.findAll();
            // const totalLikes = await ReviewLike.findAll({
            //     where: {review.id}
            //   });
             await fetch(`/reviews/${userId}/`, {
                method: "POST",
                totalLikes,
                headers: { "Content-Type": "application/json" }
            })
        })
    });

    // addEventListener('click', async (event) => {
    //     console.log("This works!")
    // })
    // document.getElementsByClassName("tableBody");
    const userId = document.querySelector('.myGamesUserId').id
    console.log(userId)
    // const userId = document.querySelector('.myGamesUserId')


    // console.log(games)

    if (!games.ok) {
        throw games
    }

    const { } = games.json()


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

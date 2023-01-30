window.addEventListener('DOMContentLoaded', async () => {
    // event.currentTarget.value

    document.getElementsByClassName

    const likeAmount = document.querySelectorAll('#likeLength')
    const reviewLikeButton = document.querySelectorAll('.likes')
    const userId = document.querySelector('.userId').id
    const gameId = document.querySelector('.gameId').id
    // const singleReviewId = document.querySelector('.reviewId').id


    reviewLikeButton.forEach(element => {
        element.addEventListener('click', async (event) => {

            let singleReviewId = event.target.id;
            const likeData = await fetch(`/games/${gameId}/${singleReviewId}/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            })
            if (!likeData.ok) {
                throw likeData
            }
            const { totalLikes, reviewId} = await likeData.json()
            const likeLength = document.querySelector(`#list${reviewId}`)
            const wow = document.querySelector(`.likebtn${reviewId}`)
            likeLength.innerHTML = `Wow's: ${totalLikes}`
            if (wow.innerHTML === 'Wow!') {
                wow.innerHTML = 'Un-Wow!'
            } else{
                wow.innerHTML = 'Wow!'
            }
            // console.log(userId)
            // console.log(totalLikes);
        })
    });
})

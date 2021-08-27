window.addEventListener('DOMContentLoaded', async () => {
    // event.currentTarget.value
    console.log("hey-----------------")

    document.getElementsByClassName

    const likeAmount = document.querySelectorAll('#likeLength')
    const reviewLikeButton = document.querySelectorAll('.likes')
    const userId = document.querySelector('.userId').id
    const gameId = document.querySelector('.gameId').id
    const singleReviewId = document.querySelector('.reviewId').id

    console.log(reviewLikeButton)
    
    reviewLikeButton.forEach(element => {
        element.addEventListener('click', async (event) => {
            const likeData = await fetch(`/games/${gameId}/${singleReviewId}/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            })
            if (!likeData.ok) {
                throw likeData
            }
            const { totalLikes, reviewId} = await likeData.json()
            const likeLength = document.querySelector(`#list${reviewId}`)
            likeLength.innerHTML = `Likes: ${totalLikes}`
            console.log(userId)
            console.log(totalLikes);
        })
    });
})

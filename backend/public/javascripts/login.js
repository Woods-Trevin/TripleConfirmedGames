const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');
const userIcon = document.querySelector('.userIcon');
const myGames = document.querySelector('#myGames');
const myGame = document.querySelector('#myGame');
const userProfile = document.querySelector('#userProfile');
function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function outsideClick(e) {
    if (e.target === modal) {
        closeModal();
    }
}

if (myGames) {
    userIcon.addEventListener('click', openModal);
} else {
    userIcon.addEventListener('click', openModal);
    myGame.addEventListener('click', openModal);
    userProfile.addEventListener('click', openModal);
}

closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

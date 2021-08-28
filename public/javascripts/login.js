console.log('-------------------------------')
console.log('inside login.js')
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');
const userIcon = document.querySelector('.userIcon');
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

userIcon.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);


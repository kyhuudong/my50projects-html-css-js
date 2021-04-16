const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

ratings.forEach(rating => rating.addEventListener('click', () => {
    removeActive()
    rating.classList.add('active')
    selectedRating = rating.innerText
}))

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})

function removeActive() {
    ratings.forEach(rating => {
        rating.classList.remove('active')
    })
}
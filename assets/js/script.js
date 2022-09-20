// Game Area
let computer = document.getElementById('computer')
let player = document.getElementById('player')
let result = document.getElementById('result')

// Game Choices
let choices = document.querySelectorAll('button')
let usersChoice

choices.forEach(choice => choices.addEventListener('click', (event) => {
    usersChoice = event.target.id
}))
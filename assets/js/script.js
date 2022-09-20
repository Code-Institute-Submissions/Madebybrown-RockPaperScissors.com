// Game Area
let computer = document.getElementById('computer')
let player = document.getElementById('player')
let result = document.getElementById('result')

// Game Choices
let choices = document.querySelectorAll('button')
let playerChoice
// Listens for clicks on each individual button
choices.forEach(choice => choices.addEventListener('click', (event) => {
    playerChoice = event.target.id
}))
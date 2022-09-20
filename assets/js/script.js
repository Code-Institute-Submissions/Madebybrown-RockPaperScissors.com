// Game Area
let computer = document.getElementById('computer')
let player = document.getElementById('player')
let result = document.getElementById('result')

// Game Choices
let choices = document.querySelectorAll('button')
let playerChoice
/**
 * Listens for clicks on each individual button and displays the 
 * inner html of the button that was clicked in the player field
 * */
choices.forEach(choice => choice.addEventListener('click', (event) => {
    playerChoice = event.target.id
    player.innerHTML = playerChoice
}))
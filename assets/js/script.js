// Game Area
let computer = document.getElementById('computer')
let player = document.getElementById('player')
let result = document.getElementById('result')

// Game Choices
let choices = document.querySelectorAll('button')
let playerChoice
let computerChoice

/**
 * Listens for clicks on each individual button and displays the 
 * inner html of the button that was clicked in the player field
 * */
choices.forEach(choice => choice.addEventListener('click', (event) => {
    playerChoice = event.target.id
    player.innerHTML = playerChoice
    randomComputerChoice()
}))

//  
function randomComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3)
    
    if (randomChoice === 0) {
        computerChoice = 'rock'
    }
    if (randomChoice === 1) {
        computerChoice = 'paper'
    }
    if (randomChoice === 2) {
        computerChoice = 'scissors'
    }
    computer.innerHTML = computerChoice
}
// Game Area
let computer = document.getElementById('computer')
let player = document.getElementById('player')
let result = document.getElementById('result')

// Game Choices
let choices = document.querySelectorAll('button')
let playerChoice
let computerChoice
let playResult

// Listens for clicks on each individual button and displays the 
// inner html of the button that was clicked in the player field
choices.forEach(choice => choice.addEventListener('click', (event) => {
    playerChoice = event.target.id
    player.innerHTML = playerChoice
    randomComputerChoice()
    gameResult()
}))

/**
 * Creates a random number between 0 and 2, each number is connected to either rock, paper or scissors
 *  */
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

/**
 * Calculates the result based on input/output of choices made by the player
 * and the generated choice of teh computer
 */
function gameResult() {
    if (computerChoice === playerChoice) {
        playResult = 'Draw!'
    }
    if (computerChoice === 'rock' && playerChoice === 'paper') {
        playResult = 'You Win!'
    }
    if (computerChoice === 'rock' && playerChoice === 'scissors') {
        playResult = 'You Lost!'
    }
    if (computerChoice === 'paper' && playerChoice === 'rock') {
        playResult = 'You Lost!'
    }
    if (computerChoice === 'paper' && playerChoice === 'scissors') {
        playResult = 'You Win!'
    }
    if (computerChoice === 'scissors' && playerChoice === 'rock') {
        playResult = 'You Win!'
    }
    if (computerChoice === 'scissors' && playerChoice === 'paper') {
        playResult = 'You Lost!'
    }

    result.innerHTML = playResult
}
// Game Area
let computer = document.getElementById('computer')
let player = document.getElementById('player')
let result = document.getElementById('result')

// Game Choices + result
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
    } else if (randomChoice === 1) {
        computerChoice = 'paper'
    } else if (randomChoice === 2) {
        computerChoice = 'scissors'
    }
    computer.innerHTML = computerChoice
}

/**
 * Calculates the result (win, loss or draw) based on input made by the player
 * and the generated choice of the computer,
 * changes color of the result (win, loss or draw)
 * increase the score for the winner or do nothing with the score if it's a draw
 */
function gameResult() {
    if (computerChoice === playerChoice) {
        playResult = 'Draw!'
        result.style.color = 'blue'
    } else if (computerChoice === 'rock' && playerChoice === 'paper') {
        playResult = 'You Win!'
        result.style.color = 'green'
        parseInt(playerScore.innerHTML++)
    } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        playResult = 'You Lost!'
        result.style.color = 'red'
        parseInt(computerScore.innerHTML++)
    } else if (computerChoice === 'paper' && playerChoice === 'rock') {
        playResult = 'You Lost!'
        result.style.color = 'red'
        parseInt(computerScore.innerHTML++)
    } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
        playResult = 'You Win!'
        result.style.color = 'green'
        parseInt(playerScore.innerHTML++)
    } else if (computerChoice === 'scissors' && playerChoice === 'rock') {
        playResult = 'You Win!'
        result.style.color = 'green'
        parseInt(playerScore.innerHTML++)
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        playResult = 'You Lost!'
        result.style.color = 'red'
        parseInt(computerScore.innerHTML++)
    }

    result.innerHTML = playResult
}

// Game score variables
let playerScore = document.getElementById('player-score')
let computerScore = document.getElementById('computer-score')

// Day and Night Switch
document.getElementById("switch").addEventListener("click", function(){
    document.getElementsByTagName('body')[0].classList.toggle("day");
});
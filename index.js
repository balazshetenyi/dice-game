
const button = document.getElementById('btnRoll')
const resetBtn = document.getElementById('reset')

const player_one_dice = document.getElementById('player1Dice')
const player_one_score = document.getElementById('player1Score')
const player_two_dice = document.getElementById('player2Dice')
const player_two_score = document.getElementById('player2Score')
const message = document.getElementById('message')

// Players
const player_one = {
    turn: true,
    score: 0
}
const player_two = {
    turn: false,
    score: 0
}

// Event listeners
// Game
button.addEventListener('click', rollDice)
// Reset
resetBtn.addEventListener('click', reset)

// Functions
function rollDice() {

    let roll = Math.floor(Math.random() * 6 + 1)

    if (player_one.turn) {
        player_one_dice.textContent = roll
        player_one.score += roll
        player_one_score.textContent = player_one.score
        message.textContent = "Player 2 Turn"
        player_one_dice.classList.remove('active')
        player_two_dice.classList.add('active')

        if (roll == 1) {
            message.textContent = "Player 2 Won!"
            displayReset()
        }
    }
    else {
        player_two_dice.textContent = roll
        player_two.score += roll
        player_two_score.textContent = player_two.score
        message.textContent = "Player 1 Turn"
        player_two_dice.classList.remove('active')
        player_one_dice.classList.add('active')

        if (roll == 1) {
            message.textContent = "You Won!"
            displayReset()
        }
    }

    player_one.turn = !player_one.turn
    player_two.turn = !player_two.turn

    if (player_two.score >= 20) {
        message.textContent = "Player 2 Won!"
        displayReset()
    }
    if (player_one.score >= 20) {
        message.textContent = "You Won!"
        displayReset()
    }
}

function reset() {
    button.style.display = 'inline-block'
    resetBtn.style.display = 'none'
    player_one.score = 0
    player_two.score = 0
    player_one_score.textContent = 0
    player_two_score.textContent = 0
    player_one_dice.textContent = '-'
    player_two_dice.textContent = '-'
    player_one.turn = true
    player_two.turn = false
    message.textContent = 'Player 1 Turn'
    if (player_two_dice.classList.contains('active')) {
        player_two_dice.classList.remove('active')
        player_one_dice.classList.add('active')
    }
}

function displayReset() {
    button.style.display = 'none'
    resetBtn.style.display = 'inline-block'
}



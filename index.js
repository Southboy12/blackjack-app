let player = {
    playerName: 'Menka',
    chips: 59
}

let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

// console.log(firstCard, secondCard);

let playerEl = document.querySelector('#player-el')
playerEl.textContent = player.playerName + ": $" + player.chips 

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard === 1) {
        return 11
    } else if (randomCard > 10) {
        return 10
    } else
        return randomCard
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent = message

}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard() 
    cards.push(newCard)
    console.log(cards);
    sum += newCard
    renderGame()    
    }
    
}

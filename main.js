//*---- constants ----*//
const cardImgs = ['red', 'blue', 'orange', 'purple', 'green', 'pink', 'red', 'blue', 'orange', 'purple', 'green', 'pink'];



//*---- state variables ----*//
let board; 
let winner; 
let pairs = []; 
let flippedCards = [];
let points = 0;
let wrongGuess = 0;
//*---- cached elements ----*//
const message = document.querySelector('h2');
const playAgainBtn = document.querySelector('button');
const gameBoard = document.querySelector('#board');
const gameCards = document.querySelectorAll('.card');

//*---- event listeners ----*//
playAgainBtn.addEventListener('click', initialize);


//*---- functions ----*//
initialize();

function initialize() {
    gameCards.forEach((gameCard, i) => {gameCard.style.backgroundColor = cardImgs[i]}) 
    gameCards.forEach((gameCard) => {gameCard.addEventListener('click', flipCard)});
    message.innerHTML = "Pick a card and find the pair!"
    points = 0;
    wrongGuess = 0;
    turn = 1;
    winner = null;
    // shuffle();
    // render ();
}

function render() {
    renderWin();
    while (points < 6) {
        flipCard();
        compareCards();
    }
}

// function to display the color or img
function flipCard(event) {
     flippedCards.push(event.target)
     if (flippedCards.length === 2) {
        compareCards();
     }
     

}


function compareCards() {
    const card1 = flippedCards[0]
    const card2 = flippedCards[1]

    if (card1.style.backgroundColor === card2.style.backgroundColor) {

            card1.style.backgroundColor = 'black';
            card2.style.backgroundColor = 'black';
            pairs.push(card1, card2);
            message.innerHTML = "You found a pair!"; 
            points += 1;
            pairs = [];
            flippedCards = [];
            if (points === 6) {
                renderWin();
            }
        } else if (card1.style.backgroundColor !== card2.style.backgroundColor) {
            wrongGuess += 1
            message.innerHTML = "Try again!";
            flippedCards = [];
        }
    if (wrongGuess === 3) {
        message.innerHTML = 'Game Over! Better luck next time'
        gameOver();
    }


}

function renderWin() {
    if (points === 6) {
        message.innerHTML = 'You win!!!'
        gameOver();
        points = 0;
    } 
}

function gameOver() {
    gameCards.forEach((gameCard) => {gameCard.removeEventListener('click', flipCard)});
}



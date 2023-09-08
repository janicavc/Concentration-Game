//*---- constants ----*//
const cardImgs = ['dog', 'bunny', 'cat', 'ferret', 'hamster', 'mouse', 'dog', 'bunny', 'cat', 'ferret', 'hamster', 'mouse'];

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
    gameCards.forEach((gameCard, i) => {
        const front = gameCard.querySelector('.front');
        const back = gameCard.querySelector('.back');
        
        front.style.display = 'block'; // Show the front
        back.style.display = 'none';   // Initially hide the back
        
        gameCard.classList.remove('flipped');
        gameCard.addEventListener('click', flipCard);
    });
    
    message.innerHTML = "Pick a card and find the pair!";
    points = 0;
    wrongGuess = 0;
    winner = null;
}

function flipCard(event) {
    const card = event.currentTarget;
    if (card.classList.contains('flipped') || flippedCards.length === 2) return;

    card.classList.add('flipped');
    const back = card.querySelector('.back');

    // Display the back (image) when the card is clicked
    back.style.display = 'block';

    flippedCards.push(card);

    if (flippedCards.length === 2) {
        setTimeout(compareCards, 1000);
    }
}






function compareCards() {
    const card1 = flippedCards[0];
    const card2 = flippedCards[1];

    const img1 = card1.querySelector('.back img').src;
    const img2 = card2.querySelector('.back img').src;

    if (img1 === img2) {
        // Cards match
        pairs.push(card1, card2);
        message.innerHTML = "You found a pair!";
        points += 1;
        flippedCards = [];

        if (points === 6) {
            renderWin();
        }
    } else {
        // Cards don't match
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');

            // Re-hide the back (image) when the cards don't match
            const back1 = card1.querySelector('.back');
            const back2 = card2.querySelector('.back');
            back1.style.display = 'none';
            back2.style.display = 'none';

            flippedCards = [];
            wrongGuess += 1;
            message.innerHTML = "Try again!";
            if (wrongGuess === 3) {
                message.innerHTML = 'Game Over! Better luck next time';
                gameOver();
            }
        }, 1000);
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
    gameCards.forEach((gameCard) => { gameCard.removeEventListener('click', flipCard); });
}


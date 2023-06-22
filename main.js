//*---- constants ----*//
const cardImgs = ['red', 'blue', 'orange', 'purple', 'green', 'pink', 'red', 'blue', 'orange', 'purple', 'green', 'pink'];



const winningCombos = [ ]

//*---- state variables ----*//
let board; //array of 4c 4r
let winner; // null = no winner, all cards have pairs = "Winner"
let paired = []; // keep track of the cars that have fliped and are paired
let flippedCard = [];
//*---- cached elements ----*//
const message = document.querySelector('h2');
const playAgainBtn = document.querySelector('button');
const gameBoard = document.querySelector('#board');
const gameCards = document.querySelector('.cards');

//*---- event listeners ----*//
gameCards.addEventListener('click', flipCard);
playAgainBtn.addEventListener('click', initialize);


//*---- functions ----*//
initialize();

function initialize() {
    paired = [],
    flippedCard = [],
    turn = 1;
    winner = null;
    // render ();
}

function render() {
    renderBoard();
    renderMessage();
    shuffle();
    flipCard();
}

function renderBoard() {

}

function shuffle(array) {
    for (let cardIdx = array.length - 1; cardIdx >  0; cardIdx--) {
        const shuffleCards = Math.floor(Math.random() * (cardIdx + 1));
    }
    return cardIdx;
}

// function to flip the card and display the color or img
function flipCard(event) {
     if (event.target.classList.contains('')) {
     
     }

    //  alert('you flipped the card');
}

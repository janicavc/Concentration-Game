//*---- constants ----*//
const cardImgs = ['red', 'blue', 'orange', 'purple', 'green', 'pink', 'red', 'blue', 'orange', 'purple', 'green', 'pink'];



const winningCombos = [ ]

//*---- state variables ----*//
let board; //array of 4c 4r
let winner; // null = no winner, all cards have pairs = "Winner"
let pairs = []; // keep track of the cars that have fliped and are paired
let flippedCards = [];
let points = 0;
let totalGuess = 0;
//*---- cached elements ----*//
const message = document.querySelector('h2');
const playAgainBtn = document.querySelector('button');
const gameBoard = document.querySelector('#board');
const gameCards = document.querySelectorAll('.card');

//*---- event listeners ----*//
gameCards.forEach((gameCard) => {gameCard.addEventListener('click', flipCard)});
playAgainBtn.addEventListener('click', initialize);


//*---- functions ----*//
initialize();

function initialize() {
    gameCards.forEach((gameCard, i) => {gameCard.style.backgroundColor = cardImgs[i]}) 
    turn = 1;
    winner = null;
    // render ();
}

function render() {
    renderBoard();
    renderMessage();
    while (points < 6) {
        flipCard();
        compareCards();
    }
    // shuffle();
}

function renderBoard() {
// 
}


// function shuffle(array) {
//     for (let cardIdx = array.length - 1; cardIdx >  0; cardIdx--) {
//         const shuffleCards = Math.floor(Math.random() * (cardIdx + 1));
//     }
//     return cardIdx;
// }

// function to flip the card and display the color or img
function flipCard(event) {
     flippedCards.push(event.target)
    console.log(flippedCards)
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
            console.log("You found a pair!"); 
            points += 1
            pairs = []
            flippedCards = []
            if (points === 6) {
                alert("you win")
                console.log("restart game")
                points = 0;
            }
        } else {
            
            console.log("try again");
            flippedCards = [];
        }


}

function renderMessage() {
    if (points === 6){
        
    }
}


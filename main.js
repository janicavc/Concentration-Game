//*---- constants ----*//
const winningCombos = [

]


//*---- state variables ----*//
let board; //array of 4c 4r
let winner; // null = no winner, all cards have pairs = "Winner"
let paired; // keep track of the cars that have fliped and are paired

//*---- cached elements ----*//
const message = document.querySelector('h1');
const playAgainBtn = document.querySelector('button');


//*---- event listeners ----*//
document.getElementById('board').addEventListener('click', playerChoice);
playAgainBtn.addEventListener('click', initialize);

//*---- functions ----*//
initialize();

function initialize() {
    board = [
        [0, 0, 0, 0]
        [0, 0, 0, 0]
        [0, 0, 0, 0]
        [0, 0, 0, 0]
    ];
    turn = 1;
    winner = null;
    // render ()
}

function playerChoice(evt) {
    
}
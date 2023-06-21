//*---- constants ----*//
const CARD = {
    '0' : 'white',
    '1' : 'thistle'
}


const winningCombos = [ ]

//*---- state variables ----*//
let board; //array of 4c 4r
let winner; // null = no winner, all cards have pairs = "Winner"
let paired; // keep track of the cars that have fliped and are paired

//*---- cached elements ----*//
const message = document.querySelector('h2');
const playAgainBtn = document.querySelector('button');
const cards = document.querySelector(".board");

//*---- event listeners ----*//
document.getElementById('board').addEventListener('click', playerChoice);
playAgainBtn.addEventListener('click', initialize);


//*---- functions ----*//
initialize();

function initialize() {
    board = [
        [0, 0, 0, 0], //col 0
        [0, 0, 0, 0], //col 1
        [0, 0, 0, 0], //col 2
        [0, 0, 0, 0] // col 3
    ];
    turn = 1;
    winner = null;
    render ();
}

function playerChoice(evt) {
    const colIdx = (evt.target);


    render();
}

function getWinner() {
    return checkMatch();
}




// Vizualize all state in the DOM
function render() {
    renderBoard();
    renderMessage();
    renderControls();
}


function renderBoard() {
    board.forEach(function(colArr, colIdx ) {
        // Iterate over the cells in the cur collumn (colArr)
        colArr.forEach(function(cellVal, rowIdx) {
        const cellId = `c${colIdx}r${rowIdx}`
        const cellEl = document.getElementById(cellId);
        cellEl.style.backgroundColor = `CARD${}`
        });
    });
}

function renderMessage() {
    if (winner === 1) {
        message.innerText = "You found all the pairs!!!"
    } else {
        // game is in play
        message.innerText = "Keep looking for pairs!"
    }
}

function renderControls() {
    playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';

}
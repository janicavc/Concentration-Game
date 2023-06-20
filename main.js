//*---- constants ----*//
const winningCombos = [

]


//*---- state variables ----*//
let board; //array of 4c 4r
let winner; // null = no winner, all cards have pairs = "Winner"
let paired; // keep track of the cars that have fliped and are paired

//*---- cached elements ----*//



//*---- event listeners ----*//



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


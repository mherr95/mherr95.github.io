// Have two colors, one red and one yellow.
//Have red go first and pick 1 position out of the 42 positions in the container.
//Yellow will then go next and select the any position that red has not already picked.
//Each color will continue to take turns selecting an open position. 
//Once one color has consecutively connected four positions either horizontially, vertically, or diagonally, that color wins.
//when user clicks the div get the column and row class
//when a user clicks on the column chip goes to the bottom
//loop throught the column and row to see if there is any value
//if there is a value keep going
//if there is no value then put game piece there. 
//Find out if that piece wins the game


const container = document.querySelector('.game-contaier');
const cells = document.querySelectorAll('.block');
const currentPlayer = document.querySelector('#currentPlayer')
const playerOne = 'red'
const playerTwo = 'yellow'
let player1 = true;
const gameGrid = [
    [
        " "," "," "," "," "," "," "
    ],
    [
        " "," "," "," "," "," "," "
    ],
    [
        " "," "," "," "," "," "," "
    ],
    [
        " "," "," "," "," "," "," "
    ],
    [
        " "," "," "," "," "," "," "
    ],
    [
        " "," "," "," "," "," "," "
    ],
]








//////////////////////////////////
/////   Event Handlers
//////////////////////////////////

const click = (event) => {
    let column = parseInt(event.currentTarget.classList[1].charAt(6));
    let row = parseInt(event.currentTarget.classList[2].charAt(3));
    columnAndRow = (`${column}, ${row}`);
    console.log(column);
    console.log(row);
    for(let rows = gameGrid.length - 1; rows >= 0; rows--){
        let columnArr = " ";
        if(gameGrid[rows][column] === " "){
           if(player1){
                columnArr = 'player1';
                const index = column.toString() + rows.toString();
                const getIndex = document.getElementById(index);
                getIndex.style.backgroundColor = playerOne;
                getIndex.classList.add('player1');
                player1 = false;
                currentPlayer.innerHTML = 'Yellow'
           }else if(player1 === false) {
                columnArr = 'player2';
                gameGrid[rows][column] = columnArr
                const index = column.toString() + rows.toString();
                const getIndex = document.getElementById(index);
                getIndex.style.backgroundColor = playerTwo;
                getIndex.classList.add('player2');
                player1 = true;
                currentPlayer.innerHTML = 'Red'
           }
           gameGrid[rows][column] = columnArr
           return;
        };
    }; 


    const colorCheck = (one, two, three, four) => {
        return ((one != 0) && (one === two) && (one === three) && (one === four));
    }
    const horizontalCheck = () => {
        for(let row = 0; row < gameGrid.length; row ++){
            for(let col = 0; col < 4; col ++){
                colorCheck(gameGrid[col][row].style.backgroundColor,gameGrid[col+1][row].style.backgroundColor,gameGrid[col+2][row].style.backgroundColor,gameGrid[col+3][row].style.backgroundColor)
                return true;
            }
        }
    }
};




//////////////////////////////////
/////   Event Listeners
//////////////////////////////////

cells.forEach((cell) => {
    cell.addEventListener('click', click); 
}); 


































// const playerOne = [];
// const playerTwo = [];
// const selectPosition = (e)  => {
//     let player = 1;

//     if (e.currentTarget.style.backgroundColor === 'red' || e.currentTarget.style.backgroundColor === 'yellow'){
//         return;
//     }else if(playerOne.length === playerTwo.length){
//         e.currentTarget.style.backgroundColor = 'red';
//         e.currentTarget.classList.add('full');
//         playerOne.push(e);
//         player = 2;
//         currentPlayer.innerText = player;
//     }else if (playerOne.length > playerTwo.length){
//         e.currentTarget.style.backgroundColor ='yellow';
//         playerTwo.push(e);
//         player = 1;
//         currentPlayer.innerText = player;
//     }
    
// }; 







// const columnOne = document.querySelectorAll('.column1')
//     const checkColumnOne = (e) => {
//         color = e.currentTarget.style.backgroundColor
//         console.log(color);
//     }
    // document.querySelectorAll('.column1').forEach((column) => {
    //     column.addEventListener('click', checkColumnOne)
    // });

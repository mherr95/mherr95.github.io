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
/////   Functions
//////////////////////////////////







//////////////////////////////////
/////   Event Handlers
//////////////////////////////////

// when user clicks certain column we want to check that column for a empty row.
// check gameGrid by looping through it for empty spaces.
// first empty spot in column we find we would drop game piece there 
// Then we update HTML

//Grab column and row
const getColAndRow = (event) => {
    let col = parseInt(event.currentTarget.classList[1].charAt(6));
    let row = parseInt(event.currentTarget.classList[2].charAt(3));
    columnAndRow = (`${col}, ${row}`);
    // console.log(columnAndRow);

    for(let i = gameGrid.length - 1; i >= 0; i--){
        let innerColumnArr = ' ';
        if(gameGrid[i][col] === " "){
           if(player1){
               innerColumnArr = 'player1';
           }else {
               innerColumnArr = 'player2';
           }
           gameGrid[i][col] = innerColumnArr
           const apple = col.toString() + i.toString();
           const bannana = document.getElementById(apple);
           bannana.style.backgroundColor = playerOne;
           bannana.classList.add('player1');
           
           console.log(bannana);
           console.log(gameGrid);
           return;
        }
        console.log(innerColumnArr);
    }
};





// Change between player 1 and 2 by color
const changeColor = (event) => {
    const divSelected = event.currentTarget;
    
    if((divSelected.style.backgroundColor === playerOne) || (divSelected.style.backgroundColor === playerTwo)){
        return
    }else if(player1){

        divSelected.style.backgroundColor = playerOne;
        player1 = false;
    }else if(!player1){
        divSelected.style.backgroundColor = playerTwo;
        player1 = true;
    }
}




//////////////////////////////////
/////   Event Listeners
//////////////////////////////////

cells.forEach((cell) => {
    cell.addEventListener('click', getColAndRow); 
    cell.addEventListener('click', changeColor)
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

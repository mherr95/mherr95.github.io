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
const rowsArr = [0,1,2,3,4,5]
const columns = [0,1,2,3,4,5,6];
const gameGrid = [
['','','','','','',''],
['','','','','','',''],
['','','','','','',''],
['','','','','','',''],
['','','','','','',''],
['','','','','','',''],
]



//////////////////////////////////
/////   Functions
//////////////////////////////////







//////////////////////////////////
/////   Event Handlers
//////////////////////////////////

//Grab column and row and turn them into integers
const getColAndRow = (event) => {
    let col = event.currentTarget.classList[1].charAt(6);
    let row = event.currentTarget.classList[2].charAt(3);
    columnAndRow = (`${col}, ${row}`);
    // for(let i = 0; i < rowsArr.length; i++) {
    //     if(rows[i].children(columns) = 'white'){
    //         rows.push(rows[i].children(columns));
    //         if(player1 === 1){
    //             row[0].style.backgroundColor = playerOne;
    //         }

    //     }
    // }
    
    console.log(columnAndRow);
};

//Change color between player One and Player Two
const changeColor = (event) => {
    const divSelected = event.currentTarget;
    if((divSelected.style.backgroundColor === playerOne) || (divSelected.style.backgroundColor === playerTwo)){
        return
    }else if(player1){
        divSelected.style.backgroundColor = playerOne;
    }else if(!player1){
        divSelected.style.backgroundColor = playerTwo;
    }
}




//////////////////////////////////
/////   Event Listeners
//////////////////////////////////
cells.forEach((cell) => {
    cell.addEventListener('click', getColAndRow); 
    // cell.addEventListener('click', changeColor)
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

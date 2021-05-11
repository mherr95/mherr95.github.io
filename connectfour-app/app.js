// Have two colors, one red and one yellow.
//Have red go first and pick 1 position out of the 42 positions in the container.
//Yellow will then go next and select the any position that red has not already picked.
//Each color will continue to take turns selecting an open position. 
//Once one color has consecutively connected four positions either horizontially, vertically, or diagonally, that color wins.


const container = document.querySelector('.game-contaier');
const cells = document.querySelectorAll('.block');
let bottom = document.querySelectorAll('.bottom');
const currentPlayer = document.querySelector('#currentPlayer')
const playerOne = 'red'
const playerTwo = 'yellow'
let player1 = true;

// for (let i = 0; i < cells.length; i++){
//     console.log(i);
// }

const changeColor = (event) => {
    const divSelected = event.currentTarget;
    if(player1){
        divSelected.style.backgroundColor = playerOne;
        player1 = false;
    }else if(!player1){
        divSelected.style.backgroundColor = playerTwo;
        player1 = true;
    }
    
}






cells.forEach((cell) => {
    cell.addEventListener('click', changeColor); 
}); 


// if (e.currentTarget.style.backgroundColor === 'red' || e.currentTarget.style.backgroundColor === 'yellow'){
//     return;
// }else if(player = 1){
//     e.currentTarget.style.backgroundColor = 'red';
//     e.currentTarget.classList.add('bottom');
//     player = 2;
//     currentPlayer.innerText = player;
// }else if (player = 2){
//     e.currentTarget.style.backgroundColor ='yellow';
//     player = 1;
//     currentPlayer.innerText = player;
// }

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




// const playerTurn = (e) => {
//     if(player = 1){ 
//         e.currentTarget.style.backgroundColor = 'red';
//         player = 2;
//         currentPlayer.innerText = player;
//     }else if( player = 2){
//          e.currentTarget.style.backgroundColor = 'yellow';
//         player = 1;
//         currentPlayer.innerText = player;
//     };
    
// };



// const columnOne = document.querySelectorAll('.column1')
//     const checkColumnOne = (e) => {
//         color = e.currentTarget.style.backgroundColor
//         console.log(color);
//     }
    // document.querySelectorAll('.column1').forEach((column) => {
    //     column.addEventListener('click', checkColumnOne)
    // });

// Have two colors, one red and one yell.
//Have red go first and pick 1 position out of the 42 positions in the container.
//Yellow will then go next and select the any position that red has not already picked.
//Each color will continue to take turns selecting an open position. 
//Once one color has consecutively connected four positions either horizontially, vertically, or diagonally, that color wins.


const container = document.querySelector('.game-contaier');


const playerOne = [];
const playerTwo = [];


const selectPosition = (e)  => {
    
    if (e.currentTarget.style.backgroundColor === 'red' || e.currentTarget.style.backgroundColor === 'yellow'){
        return;
    }else if(playerOne.length === playerTwo.length){
        e.currentTarget.style.backgroundColor = 'red';
        playerOne.push(e);
    }else if (playerOne.length > playerTwo.length){
        e.currentTarget.style.backgroundColor ='yellow';
        playerTwo.push(e);
    } 
}

document.querySelectorAll('.block').forEach((block) => {
    block.addEventListener('click', selectPosition); 
}); 
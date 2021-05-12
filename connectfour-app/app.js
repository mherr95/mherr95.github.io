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
const winner = document.querySelector('.winner');
const playerOne = 'red'
const playerTwo = 'yellow'
let player1 = true;
const gameGrid = [
    [" "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "],
]








//////////////////////////////////
/////   Event Handlers
//////////////////////////////////

const click = (event) => {
    let column = parseInt(event.currentTarget.classList[1].charAt(6));
    let row = parseInt(event.currentTarget.classList[2].charAt(3));
    columnAndRow = (`${column}, ${row}`);


    const checkWin = () => {
        for(let row = 0; row < gameGrid.length; row++){
            for( let col = 0; col < gameGrid[row].length; col++){
                position = gameGrid[row][col];
                // console.log(row , col);
                if (position === " "){
                    console.log('empty');
                }else if (position === 'r'){
                    if((gameGrid[row][col] === gameGrid[row - 1][col])&&(gameGrid[row][col] === gameGrid[row - 2][col])&&(gameGrid[row][col] === gameGrid[row - 3][col])){
                        // alert('Red wins');
                        winner.innerHTML = 'Red WINS!!!'
                    }else if((gameGrid[row][col] === gameGrid[row][col - 1])&&(gameGrid[row][col] === gameGrid[row][col - 2])&&(gameGrid[row][col] === gameGrid[row][col - 3])){
                        // alert('Red wins')
                        winner.innerHTML = 'Red WINS!!!'
                    
                    }else if((gameGrid[row][col] === gameGrid[row-1][col-1])&&(gameGrid[row][col] === gameGrid[row-2][col-2])&&(gameGrid[row][col] === gameGrid[row-3][col-3])){
                        // alert('Red wins');
                        winner.innerHTML = 'Red WINS!!!'
                    }else if((gameGrid[row][col] === gameGrid[row-1][col+1])&&(gameGrid[row][col] === gameGrid[row-2][col+2])&&(gameGrid[row][col] === gameGrid[row-3][col+3])){
                        // alert("Red wins");
                        winner.innerHTML = 'Red WINS!!!'
                    }
                }else{
                    if((gameGrid[row][col] === gameGrid[row - 1][col])&&(gameGrid[row][col] === gameGrid[row - 2][col])&&(gameGrid[row][col] === gameGrid[row - 3][col])){
                        // alert('Yellow wins');
                        winner.innerHTML = 'Yellow WINS!!!'
                    }else if((gameGrid[row][col] === gameGrid[row][col - 1])&&(gameGrid[row][col] === gameGrid[row][col - 2])&&(gameGrid[row][col] === gameGrid[row][col - 3])){
                        // alert('Yellow wins')
                        winner.innerHTML = 'Yellow WINS!!!'
                    }else if((gameGrid[row][col] === gameGrid[row-1][col-1])&&(gameGrid[row][col] === gameGrid[row-2][col-2])&&(gameGrid[row][col] === gameGrid[row-3][col-3])){
                        // alert('Yellow wins');
                        winner.innerHTML = 'Yellow WINS!!!'
                    }else if((gameGrid[row][col] === gameGrid[row-1][col+1])&&(gameGrid[row][col] === gameGrid[row-2][col+2])&&(gameGrid[row][col] === gameGrid[row-3][col+3])){
                        // alert('Yellow wins');
                        winner.innerHTML = 'Yellow WINS!!!'
                    }
                }
            }
        }
    }
    

    for(let rows = gameGrid.length - 1; rows >= 0; rows--){
        let columnArr = " ";
        if(gameGrid[rows][column] === " "){
           if(player1){
                color = 'r';
                const Id = column.toString() + rows.toString();
                const getId = document.getElementById(Id);
                getId.style.backgroundColor = playerOne;
                getId.classList.add('player1');
                player1 = false;
                currentPlayer.innerHTML = 'Yellow'
           }else if(player1 === false) {
                color = 'y';
                gameGrid[rows][column] = columnArr
                const Id = column.toString() + rows.toString();
                const getId = document.getElementById(Id);
                getId.style.backgroundColor = playerTwo;
                getId.classList.add('player2');
                player1 = true;
                currentPlayer.innerHTML = 'Red'
           }
           gameGrid[rows][column] = color;
           checkWin();
           return;
        };

    }; 

};




//////////////////////////////////
/////   Event Listeners
//////////////////////////////////

cells.forEach((cell) => {
    cell.addEventListener('click', click); 
}); 

// Have two colors, one red and one yellow.
//Have red go first and pick 1 position out of the 42 positions in the container.
//Yellow will then go next and select the any position that red has not already picked.
//Each color will continue to take turns selecting an open position. 
//Once one color has consecutively connected four positions either horizontially, vertically, or diagonally, that color wins.


/* References
// These videos gave me ideas on how to start and build my connect four game //
https://www.youtube.com/watch?v=Hi5hEH1KNEc&t=3694s
https://www.youtube.com/watch?v=aroYjgQH8Tw&t=1520s
https://www.youtube.com/watch?v=Z_IaJQojun8


// These stackover flow pages help me figure out my checkWin fucntion //
https://stackoverflow.com/questions/33181356/connect-four-game-checking-for-wins-js
https://stackoverflow.com/questions/15457796/four-in-a-row-logic/15457826#15457826


Also go help from Phil and the TA's
*/
const startbtn = document.querySelector('.btn');
const cells = document.querySelectorAll('.block');
const currentPlayer = document.querySelector('#currentPlayer')
const winner = document.querySelector('.winner');
const playerOne = 'red'
const playerTwo = 'yellow'
let player1 = true;
let Win = false;
const gameGrid = [
    [" "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "],
]




const start = () => {
    cells.forEach((cell) => {
        cell.addEventListener('click', click); 
    }); 
    console.log('started')
}

startbtn.addEventListener('click', start)




const click = (event) => {
    let column = parseInt(event.currentTarget.classList[1].charAt(6));
    let row = parseInt(event.currentTarget.classList[2].charAt(3));
    columnAndRow = (`${column}, ${row}`);


    


    const checkWin = () => {
        for(let rows = 0; rows < gameGrid.length; rows++){
            for( let col = 0; col < gameGrid[rows].length; col++){
                let position = gameGrid[rows][col];
                if (position === " "){
                    console.log('empty');
                }else if (position === 'r'){
                    //Horizontal
                    //Here we are setting boundaries for gameGrid. So if position is equal to 'r' then we go into this first 'for' loop which states that available winning combinations are from rows 0-5, not more not less. The next 'for' loop is for column. Column is less than four. This is so that when we iterate over column and add +1, +2, +3 to each iteration, it does not go of the board. For example, if column is limited to 3 and we add 3 to it, it will not go off the board since the max columns is 6
                    for(row = 0; row < 6; row++){
                        for(column = 0; column < 4; column ++){
                            if((position === gameGrid[row][column]) && (position === gameGrid[row][column+1]) && (position === gameGrid[row][column+2]) && (position === gameGrid[row][column+3])){
                                gameGrid[rows][column] = 'w';
                                win = true;
                                console.log(gameGrid);
                                winner.innerHTML = 'Red WINS!!!';
                            }
                        }     
                    }
                    //Vertical
                    // Here we set a boundary for vertical winning combinations. Same as above. Here row is limited to 0 to 2. This is because there are only 5 rows. When row is equal to 2 during the iteration and we add +1, +2, +3, the max will be 5 which is not off the board.
                    for(row = 0; row < 3; row++){
                        for(column = 0; column < 7 ; column ++){
                            if((position === gameGrid[row][column]) && (position === gameGrid[row + 1][column]) && (position === gameGrid[row + 2][column]) && (position === gameGrid[row + 3][column])){
                                gameGrid[rows][column] = 'w';
                                console.log(gameGrid);
                                winner.innerHTML = 'Red WINS!!!';
                            }
                        }    
                    }
                    //Diagonall Bottom to Top
                    //Here we are limiting both row and column. Here, instead of setting row to 0 we set it to three. This is because we are checking from bottom to top and row 0 to 2 does not have enough spaces for four connections diagnonally. Row is set less to 6 because it is the number of rows that have winning combinations. Column is less than 4, meaning it will only be iterated from 0 to 3. This is so that when column is equal to 3 and we add 3 to check the third column away it does not go off the grid.
                    for(row = 3; row < 6; row++){
                        for(column = 0; column < 4; column ++){
                            if((position === gameGrid[row][column]) && (position === gameGrid[row-1][column+1]) && (position === gameGrid[row-2][column+2]) && (position === gameGrid[row-3][column+3])){
                                gameGrid[rows][column] = 'w';
                                console.log(gameGrid);
                                winner.innerHTML = 'Red WINS!!!';
                            }
                        }     
                    }
                    //Diagonall Top to Bottom
                    //Here is the same as the above the numbers are set so that we don't run off gameGrid
                    for(row = 0; row < 3; row++){
                        for(column = 0; column < 4; column ++){
                            if((position === gameGrid[row][column]) && (position === gameGrid[row+1][column+1]) && (position === gameGrid[row+2][column+2]) && (position === gameGrid[row+3][column+3])){
                                gameGrid[rows][column] = 'w';
                                console.log(gameGrid);
                                winner.innerHTML = 'Red WINS!!!';
                            }
                        }     
                    }
                }else if (position === 'y'){
                    //Horizontal
                    for(row = 0; row < 6; row++){
                        for(column = 0; column < 4; column ++){
                            if((position === gameGrid[row][column]) && (position === gameGrid[row][column+1]) && (position === gameGrid[row][column+2]) && (position === gameGrid[row][column+3])){
                                gameGrid[rows][column] = 'w';
                                console.log(gameGrid);
                                winner.innerHTML = 'Yellow WINS!!!';
                            }
                        }     
                    }
                    //Vertical
                    for(row = 0; row < 3; row++){
                        for(column = 0; column < 7; column ++){
                            if((position === gameGrid[row][column]) && (position === gameGrid[row + 1][column]) && (position === gameGrid[row + 2][column]) && (position === gameGrid[row + 3][column])){
                                gameGrid[rows][column] = 'w';
                                console.log(gameGrid);
                                winner.innerHTML = 'Yellow WINS!!!';
                            }
                        }    
                    }
                    //Diagonall Bottom to Top
                    for(row = 3; row < 6; row++){
                        for(column = 0; column < 4; column ++){
                            if((position === gameGrid[row][column]) && (position === gameGrid[row-1][column+1]) && (position === gameGrid[row-2][column+2]) && (position === gameGrid[row-3][column+3])){
                                gameGrid[rows][column] = 'w';
                                console.log(gameGrid);
                                winner.innerHTML = 'Yellow WINS!!!';
                            }
                        }  
                    }
                    //Diagonall Top to Bottom
                    for(row = 0; row < 3; row++){
                        for(column = 0; column < 4; column ++){
                            if((position === gameGrid[row][column]) && (position === gameGrid[row+1][column+1]) && (position === gameGrid[row+2][column+2]) && (position === gameGrid[row+3][column+3])){
                                gameGrid[rows][column] = 'w';
                                console.log(gameGrid);
                                winner.innerHTML = 'Yellow WINS!!!';
                             }
                        }     
                    }
                }
            }
        }
    }




    const gameTie = () => {
        let tie = false;
        for(let col = 0; col < gameGrid[0].length ; col++){
            if(gameGrid[0][col] === " "){
                return tie = false;
            }else{
                tie = true;
            }
        }
        if(tie === true){
            winner.innerHTML = 'Tie Game';
        }
    }




    const changeColor = () => {
        for(let rows = gameGrid.length - 1; rows >= 0; rows--){
            let columnArr = " ";
            if(gameGrid[rows][column] === " "){
            if(player1){
                    color = 'r';
                    const id = column.toString() + rows.toString();
                    const getId = document.getElementById(id);
                    getId.style.backgroundColor = playerOne;
                    getId.classList.add('player1');
                    player1 = false;
                    currentPlayer.innerHTML = 'Yellow'
            }else if(player1 === false) {
                    color = 'y';
                    gameGrid[rows][column] = columnArr
                    const id = column.toString() + rows.toString();
                    const getId = document.getElementById(id);
                    getId.style.backgroundColor = playerTwo;
                    getId.classList.add('player2');
                    player1 = true;
                    currentPlayer.innerHTML = 'Red'
            }
            gameGrid[rows][column] = color;
            // tieGame();
            gameTie();
            checkWin();
            // checkTie();
            return;
            };

        }; 
    };
    changeColor();
};












const tieGame = () => {
    console.log(gameGrid[0][column]);
    if(gameGrid[0][column] != "w" && gameGrid[0][column != " "]){
        win = false;
        winner.innerHTML = 'Tie Game'
    };
};



const checkTie = () => {
    for(let row = 0; row < gameGrid.length; row++){
        for(col = 0; col < gameGrid[row].length; col++){
            console.log(row);
            console.log(col);
            console.log(gameGrid[row][col]);
            if((gameGrid[row][col] === 'w') || (gameGrid[row][col] == " ")){
                // console.log(gameGrid);
                return;
            }else if (gameGrid[row][col] === 'y' || gameGrid[row][col] === 'r'){

                continue;
            }else{
                winner.innerHTML = 'Tie Game';
            }
        }
    }
}

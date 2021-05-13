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
}

startbtn.addEventListener('click', start)




const click = (event) => {
    let column = parseInt(event.currentTarget.classList[1].charAt(6));
    let row = parseInt(event.currentTarget.classList[2].charAt(3));
    columnAndRow = (`${column}, ${row}`);


    


    const checkWin = () => {
        for(let row = 0; row < gameGrid.length; row++){
            for( let col = 0; col < gameGrid[row].length; col++){
                position = gameGrid[row][col];
                if (position === " "){
                    break;
                }else if (position === 'r'){
                        //Vertical
                        for(r = 0; r < 3; r++){
                            for(c = 0; c < 7; c ++){
                                if((position === gameGrid[r][column]) && (position === gameGrid[r + 1][column]) && (position === gameGrid[r + 2][column]) && (position === gameGrid[r + 3][column])){
                                    winner.innerHTML = 'Red WINS!!!'
                            }
                        }    
                    }
                        //Horizontal
                        for(r = 0; r < 6; r++){
                            for(c = 0; c < 4; c ++){
                                if((position === gameGrid[row][c]) && (position === gameGrid[row][c+1]) && (position === gameGrid[row][c+2]) && (position === gameGrid[row][c+3])){
                                    winner.innerHTML = 'Red WINS!!!'
                            }
                        }     
                    }
                        //Diagonall Top to Bottom
                        for(r = 0; r < 3; r++){
                            for(c = 0; c < 4; c ++){
                                if((position === gameGrid[r][c]) && (position === gameGrid[r+1][c+1]) && (position === gameGrid[r+2][c+2]) && (position === gameGrid[r+3][c+3])){
                                    winner.innerHTML = 'Red WINS!!!'
                            }
                        }     
                    }
                        //Diagonall Bottom to Top
                        for(r = 3; r < 6; r++){
                            for(c = 0; c < 4; c ++){
                                if((position === gameGrid[r][c]) && (position === gameGrid[r-1][c+1]) && (position === gameGrid[r-2][c+2]) && (position === gameGrid[r-3][c+3])){
                                    winner.innerHTML = 'Red WINS!!!'
                            }
                        }     
                    }
                    
                }else if (position === 'y'){
                    //Vertical
                        for(r = 0; r < 3; r++){
                            for(c = 0; c < 7; c ++){
                                if((position === gameGrid[r][column]) && (position === gameGrid[r + 1][column]) && (position === gameGrid[r + 2][column]) && (position === gameGrid[r + 3][column])){
                                    winner.innerHTML = 'Yellow WINS!!!'
                            }
                        }    
                    }
                    //Horizontal
                        for(r = 0; r < 6; r++){
                            for(c = 0; c < 4; c ++){
                                if((position === gameGrid[row][c]) && (position === gameGrid[row][c+1]) && (position === gameGrid[row][c+2]) && (position === gameGrid[row][c+3])){
                                    winner.innerHTML = 'Yellow WINS!!!'
                            }
                        }     
                    }
                    //Diagonall Top to Bottom
                        for(r = 0; r < 3; r++){
                            for(c = 0; c < 4; c ++){
                                if((position === gameGrid[r][c]) && (position === gameGrid[r+1][c+1]) && (position === gameGrid[r+2][c+2]) && (position === gameGrid[r+3][c+3])){
                                    winner.innerHTML = 'Yellow WINS!!!'
                            }
                        }     
                    }
                    //Diagonall Bottom to Top
                        for(r = 3; r < 6; r++){
                            for(c = 0; c < 4; c ++){
                                if((position === gameGrid[r][c]) && (position === gameGrid[r-1][c+1]) && (position === gameGrid[r-2][c+2]) && (position === gameGrid[r-3][c+3])){
                                    winner.innerHTML = 'Yellow WINS!!!'
                            }
                        }     
                    }
                }else if((position === 'r') || (position === 'y')){
                    winner.innerHTML = 'It\'s a tie game'; 
                }
            }
        }
    }



    // const checkTie = () => {
    //     for(let rows = gameGrid.length - 1; rows >= 0; rows--){
    //         const Id = column.toString() + rows.toString();
    //         const getId = document.getElementById(Id);
    //         if(getId != 'player1'  && getId != 'player2'){
    //             console.log('Tie game');
    //         }
    //         // console.log(col);
    //     }
    // }
    
    
    const changeColor = () => {
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
    changeColor();
    // checkTie();
};












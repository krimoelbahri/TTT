import {Game} from './Game.js'
const Gameboard = (()=>{
    let board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]

    const getPosition = (currentPosition) => {
         // 0-0 
        const row = currentPosition.split("-")[0]
        const column = currentPosition.split("-")[1]
        return [row, column]
           // [0,0]
    }

    const boardUpdate = (position, player)=>{
       
        let row, column; 
        [row, column] = getPosition(position)
        board[row][column] = player.playerCharacter;
        console.table(board)
        checkForWin(position)
        Game.changeTurn()

    }


    const checkForWin = (currentPosition) => {
        let row, column;
        [row, column] = getPosition(currentPosition)
        let colArray = [
            board[0][column], 
            board[1][column], 
            board[2][column]
        ] 
        let rowArray = board[row]
        let diagArrayRight = [board[0][0], board[1][1], board[2][2]]
        let diagArrayLeft = [board[2][0], board[1][1], board[0][2]]

        function matches(currentCell){
            return currentCell === Game.getCurrentPlayer().playerCharacter
        }

        if (colArray.every(matches) || rowArray.every(matches)  ||diagArrayLeft.every(matches) || diagArrayRight.every(matches)){
            Game.setWinner(Game.getCurrentPlayer())
            
        }



    }

    const resetBoard = () =>{
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ]
    }

    const getUpdatedBoard = () =>{
        return board
    }

    return {getUpdatedBoard, boardUpdate, resetBoard}
})()

export {Gameboard}
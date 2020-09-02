import {Gameboard} from './Gameboard.js'
import {Game} from './Game.js'
const DisplayController = (() => {
    const createBoard = () =>{
        document.querySelector('#reset').style.display = 'none'
        const gameBoard = Gameboard.getUpdatedBoard()
        console.log(gameBoard, " - gameboard")
        let flattenedBoard = gameBoard.flat()
        console.log(flattenedBoard, " - flattened board")
        const boardCells = document.querySelectorAll('.cell')

        boardCells.forEach((cell, index)=> {
            cell.innerHTML = `<p>${flattenedBoard[index]}</p>`

            cell.addEventListener('click', handleClick)
        })
    }
    const handleClick = (e) => {
        if (!Game.getWinner()){
            e.target.firstChild.textContent = Game.getCurrentPlayer().playerCharacter
            Gameboard.boardUpdate(e.target.id, Game.getCurrentPlayer())
            displayPlayerSwap()
            e.target.removeEventListener('click', handleClick)
        }
        return 
    }
    const displayPlayerSwap = () => {
        let currPlayer = `${Game.getCurrentPlayer().playerName}`
        if(!Game.getWinner()){
            document.querySelector('.currentPlayer').textContent =  currPlayer
            document.querySelector('#message').textContent = 'please make your selection.'
        }
        else  if (Game.getWinner()){
            document.querySelector('#reset').style.display = 'block'
            document.querySelector('.currentPlayer').textContent =  Game.getWinner().playerName
            document.querySelector('#message').textContent = 'won! '
        }
     
    }
    const resetGame = () =>{
       Game.resetGame()
        Gameboard.resetBoard()
        displayPlayerSwap()
        resetDOM()
    }
    const resetDOM = () => {
        createBoard()
    }
    document.querySelector('#reset').addEventListener('click', resetGame)
    return {
        createBoard
    }
})()

export {DisplayController}
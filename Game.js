import {Player} from './Player.js'

const Game = (()=> {
    let player1 = Player('Player 1', "X")
    let player2 = Player('Player 2', "O")
    let winner = null;
    let currentPlayer = player1

    const changeTurn = () => {
      currentPlayer === player1  ? currentPlayer = player2 : currentPlayer = player1

    }


    const getCurrentPlayer = () => {
        return currentPlayer
    }

    const resetGame = () =>{
        currentPlayer = player1
        winner = null
    }

    const setWinner = (player) => {
        console.log(player)
        winner = player
    }

    const getWinner = ()=>{
        return winner
    }


    return {
        getCurrentPlayer,
        changeTurn,
        setWinner,
        winner,
        getWinner,
        resetGame
    }


})()

export {Game}
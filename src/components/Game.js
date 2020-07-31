import React, {useState, useEffect} from 'react'

import Board from './Board';
import {calculateWinner} from '../helper';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);


    const handleClick = (i) => {
        // create shallow copy of board first / do not mutate original data
        const boardCopy = [...board];

        // 1 If winner is decided or user clicks on pre-occupied box - ignore
        if(winner || boardCopy[i]) return;

        boardCopy[i] = xIsNext ? 'X': 'O';

        setBoard(boardCopy);
        setXIsNext(!xIsNext);

    }

    const jumpTo = () => {

    }

    const renderMoves = () => (    
        <button onClick={() => setBoard(Array(9).fill(null))}>
            Start Game
        </button>
    )

    return (
        <>
            <Board squares={board} onClick={handleClick}/>
            <div>
                <p>{winner ? 'Winner: '+ winner : 'Current Turn:' + (xIsNext ? 'X':'O')}</p>
                {renderMoves()}
            </div>
        </>
    );
}

export default Game;

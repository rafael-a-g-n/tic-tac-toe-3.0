import React, { useState, useEffect } from 'react';
import Square from './Square';

function Board({ player1Name, player2Name, setPlayer1Wins, setPlayer2Wins, player1Wins, player2Wins, setOverallWinner }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);
  const [isDraw, setIsDraw] = useState(false);
  const [showNextRoundButton, setShowNextRoundButton] = useState(false);

  useEffect(() => {
    if (squares.every(square => square) && !winner) {
      setIsDraw(true);
    } else {
      setIsDraw(false);
    }
  }, [squares, winner]);

  const handleClick = (i) => {
    if (winner || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const winningSquares = winner ? calculateWinningSquares(squares) : [];

  const currentPlayerName = xIsNext ? player1Name : player2Name;

  const status = winner
    ? `Winner: ${winner === 'X' ? player1Name : player2Name}!`
    : isDraw
      ? `It's a draw!`
      : `Next player: ${currentPlayerName} (${xIsNext ? 'X' : 'O'})`;

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setIsDraw(false);
    setShowNextRoundButton(false);
  };

  const handleNextRound = () => {
    resetGame();
  };

  useEffect(() => {
    if (winner) {
      setShowNextRoundButton(true);
    }
  }, [winner]);

  useEffect(() => {
    if (winner) {
      if (winner === 'X') {
        setPlayer1Wins(prev => prev + 1);
      } else {
        setPlayer2Wins(prev => prev + 1);
      }
    }
  }, [winner, setPlayer1Wins, setPlayer2Wins]);

  useEffect(() => {
    if (player1Wins >= 5) {
      setOverallWinner(player1Name);
    } else if (player2Wins >= 5) {
      setOverallWinner(player2Name);
    }
  }, [player1Wins, player2Wins, player1Name, player2Name, setOverallWinner]);

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board">
        {squares.map((square, i) => (
          <Square
            key={i}
            value={square}
            onClick={() => handleClick(i)}
            isWinningSquare={winningSquares.includes(i)}
          />
        ))}
      </div>
      {showNextRoundButton ? (
        <button onClick={handleNextRound}>Next Round</button>
      ) : (
        <button onClick={resetGame}>Reset Game</button>
      )}
    </div>
  );
}

function calculateWinningSquares(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return line;
    }
  }

  return [];
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default Board;

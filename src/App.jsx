import React, { useState } from 'react';
import Board from './components/Board';
import Scoreboard from './components/Scoreboard';
import NameInput from './components/NameInput';

export default function App() {
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [player1Wins, setPlayer1Wins] = useState(0);
  const [player2Wins, setPlayer2Wins] = useState(0);
  const [overallWinner, setOverallWinner] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    if (player1Name && player2Name) {
      setGameStarted(true);
    }
  };

  const handleResetAll = () => {
    setPlayer1Wins(0);
    setPlayer2Wins(0);
    setOverallWinner(null);
    setGameStarted(false);
    setPlayer1Name('');
    setPlayer2Name('');
  };

  if (!gameStarted) {
    return (
      <NameInput
        player1Name={player1Name}
        player2Name={player2Name}
        setPlayer1Name={setPlayer1Name}
        setPlayer2Name={setPlayer2Name}
        handleStartGame={handleStartGame}
      />
    );
  }

  if (overallWinner) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="overall-winner">
          {overallWinner} is the Overall Winner!
        </div>
        <button onClick={handleResetAll}>Play Again</button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Scoreboard player1Name={player1Name} player2Name={player2Name} player1Wins={player1Wins} player2Wins={player2Wins} />
      <Board
        player1Name={player1Name}
        player2Name={player2Name}
        setPlayer1Wins={setPlayer1Wins}
        setPlayer2Wins={setPlayer2Wins}
        player1Wins={player1Wins}
        player2Wins={player2Wins}
        setOverallWinner={setOverallWinner}
      />
    </div>
  );
}

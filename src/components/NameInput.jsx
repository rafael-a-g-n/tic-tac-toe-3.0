import React from 'react';

function NameInput({ player1Name, player2Name, setPlayer1Name, setPlayer2Name, handleStartGame }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Enter Player Names</h2>
      <input
        type="text"
        className="input-name"
        placeholder="Player 1 Name (X)"
        value={player1Name}
        onChange={(e) => setPlayer1Name(e.target.value)}
      />
      <input
        type="text"
        className="input-name"
        placeholder="Player 2 Name (O)"
        value={player2Name}
        onChange={(e) => setPlayer2Name(e.target.value)}
      />
      <button className="input-button" onClick={handleStartGame} disabled={!player1Name || !player2Name}>
        Start Game
      </button>
    </div>
  );
}

export default NameInput;

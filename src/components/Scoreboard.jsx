import React from 'react';

function Scoreboard({ player1Name, player2Name, player1Wins, player2Wins }) {
  return (
    <div>
      <div className="score">
        {player1Name}: {player1Wins} wins
      </div>
      <div className="score">
        {player2Name}: {player2Wins} wins
      </div>
    </div>
  );
}

export default Scoreboard;

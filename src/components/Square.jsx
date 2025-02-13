import React from 'react';
import { useSpring, animated } from 'react-spring';

function Square({ value, onClick, isWinningSquare }) {
  const animationProps = useSpring({
    opacity: 1,
    transform: value ? 'scale(1)' : 'scale(0.1)',
    from: { opacity: 0, transform: 'scale(0.1)' },
    config: { tension: 200, friction: 20 }
  });

  const squareClass = `square ${value === 'X' ? 'x' : value === 'O' ? 'o' : ''} ${isWinningSquare ? 'winner' : ''}`;

  return (
    <animated.button
      className={squareClass}
      style={animationProps}
      onClick={onClick}
    >
      {value}
    </animated.button>
  );
}

export default Square;

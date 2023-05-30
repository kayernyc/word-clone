import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

export const GuessResults = ({ guesses }) => {
  const cellGrid = new Array(5).fill('');
  const gridArray = new Array(NUM_OF_GUESSES_ALLOWED).fill([...cellGrid]);

  for (let i = 0; i < Math.min(NUM_OF_GUESSES_ALLOWED, guesses.length); i++) {
    gridArray[i] = guesses[i];
  }

  return (
    <div className="guess-results">
      {gridArray.map((guessRow, rowIndex) => {
        const rowKey = `guess-${rowIndex}`;
        return (
          <p className="guess" key={rowKey}>
            {guessRow.map((cell, index) => (
              <span
                key={`${rowKey}-${
                  cell.letter ? cell.letter : rowIndex
                }-${index}`}
                className={`cell ${cell.status ? cell.status : ''}`}>
                {cell.letter || ''}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
};

import React from 'react';

export const GuessResults = ({ guesses }) => {
  return (
    <ul>
      {guesses.map((guess) => (
        <li key={`guess-${guess}`}>{guess}</li>
      ))}
    </ul>
  );
};

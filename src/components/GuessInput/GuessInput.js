import React from 'react';

export const GuessInput = ({ updateGuesses, playerDone }) => {
  const [currentWord, setCurrentWord] = React.useState('');
  let guess = '';

  const handleSubmit = (event) => {
    event.preventDefault();
    guess = currentWord;
    updateGuesses(guess);
    setCurrentWord('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={playerDone}
        id="guess-input"
        maxLength={5}
        minLength={5}
        onChange={(event) => {
          setCurrentWord(event.target.value.toUpperCase());
        }}
        pattern={'[a-zA-Z]{5}'}
        type="text"
        value={currentWord}
      />
    </form>
  );
};

import React from 'react';

export const GuessInput = ({ updateGuesses }) => {
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
        onChange={(event) => {
          setCurrentWord(event.target.value.toUpperCase());
        }}
        id="guess-input"
        maxLength={5}
        minLength={5}
        pattern={'[a-zA-Z]{5}'}
        type="text"
        value={currentWord}
      />
    </form>
  );
};

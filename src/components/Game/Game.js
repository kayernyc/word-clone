import React from 'react';

import { checkGuess } from '../../game-helpers';
import { GuessInput } from '../GuessInput/GuessInput';
import { GuessResults } from '../GuessResults/GuessResults';
import { GameEndBanner } from '../GameEndBanner/GameEndBanner';
import { sample } from '../../utils';
import { WORDS } from '../../data';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const playerWin = (guessArr) => {
  return !guessArr.some(
    (guessObj) =>
      guessObj.status === 'incorrect' || guessObj.status === 'misplaced'
  );
};

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [playerDone, setPlayerDone] = React.useState(false);
  const [playerState, setPlayerState] = React.useState('playing');

  const updateGuesses = (guess) => {
    const newGuess = checkGuess(guess, answer);
    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);
    if (playerWin(newGuess)) {
      setPlayerDone(true);
      setPlayerState('win');
    }

    if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setPlayerDone(true);
      setPlayerState('lose');
    }
  };

  return (
    <>
      <GameEndBanner
        playerState={playerState}
        correctWord={answer}
        guesses={guesses}
      />
      <GuessResults guesses={guesses} />
      <GuessInput playerDone={playerDone} updateGuesses={updateGuesses} />
      <br />
    </>
  );
}

export default Game;

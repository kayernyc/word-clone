export const GameEndBanner = ({ playerState, correctWord, guesses }) => {
  switch (playerState) {
    case 'win':
      return (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{guesses.length || 'a few'} guesses</strong>.
          </p>
        </div>
      );
    case 'lose':
      return (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{correctWord}</strong>.
          </p>
        </div>
      );
    default:
      return <></>;
  }
};

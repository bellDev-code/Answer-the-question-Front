import SelectPlayerComponent from '@Components/SelectPlayer';
import gameInfoStore from '@Store/useGameInfoStore';
import React from 'react';

const ShowPlayerComponent = () => {
  const { gameInfoResult } = gameInfoStore();

  const renderRandomPlayer = () => {
    return (
      <div className='rounded-md px-6 py-1 text-white bg-black'>
        {gameInfoResult?.selectedPlayer.username}
      </div>
    );
  };

  const renderDirectPlayer = () => {
    return <SelectPlayerComponent />;
  };

  const renderPlayer = () => {
    if (gameInfoResult?.playerSelectionType === 'random') {
      return renderRandomPlayer();
    } else {
      return renderDirectPlayer();
    }
  };

  const isFirstGame = gameInfoResult?.currentQuestionIndex === 0;

  return (
    <>
      {isFirstGame ? (
        <div className='rounded-md px-6 py-1 bg-black text-white'>
          {gameInfoResult?.selectedPlayer.username}
        </div>
      ) : (
        renderPlayer()
      )}
    </>
  );
};

export default ShowPlayerComponent;

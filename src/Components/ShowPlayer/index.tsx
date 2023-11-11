import gameInfoStore from '@Store/useGameInfoStore';
import useSingleInputStore from '@Store/usePlayerStore';
import React from 'react';

const ShowPlayerComponent = () => {
  const { gameInfoResult, isFirstGame } = gameInfoStore();
  const { setName, setSelectedName, players, selectedName } = useSingleInputStore();

  const handleNameClick = (name: string) => {
    setName(name);
    setSelectedName(name);
  };

  const renderRandomPlayer = () => {
    return (
      <div className='rounded-md px-6 py-1 text-white bg-black'>
        {gameInfoResult?.selectedPlayer.username}
      </div>
    );
  };

  const renderDirectPlayer = () => {
    return (
      <div className='w-full max-h-96 my-5 overflow-auto'>
        {players.map((player, index) => (
          <div
            key={index}
            className={`rounded-md px-6 py-1 ${
              selectedName === player.username ? 'bg-black text-white w-full' : ''
            }`}
            onClick={() => handleNameClick(player.username)}
          >
            <span>{index + 1}.</span> {player.username}
          </div>
        ))}
      </div>
    );
  };

  const renderPlayer = () => {
    if (gameInfoResult?.playerSelectionType === 'random') {
      return renderRandomPlayer();
    } else {
      return renderDirectPlayer();
    }
  };

  return (
    <div>
      {isFirstGame ? (
        <div className='rounded-md px-6 py-1 bg-black text-white'>
          {gameInfoResult?.selectedPlayer.username}
        </div>
      ) : (
        renderPlayer()
      )}
    </div>
  );
};

export default ShowPlayerComponent;

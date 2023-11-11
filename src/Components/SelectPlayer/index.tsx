import React from 'react';
import usePlayerStore from '@Store/usePlayerStore';
import gameInfoStore from '@Store/useGameInfoStore';

const SelectPlayerComponent = () => {
  const { setSelectedName, players, selectedName } = usePlayerStore();
  const { gameInfoResult } = gameInfoStore();

  const handleNameClick = (name: string) => {
    setSelectedName(name);
  };

  const showPlayer = players.filter(
    (player) => player.username !== gameInfoResult?.selectedPlayer.username,
  );

  return (
    <div className='w-full max-h-96 my-5 overflow-auto'>
      {showPlayer.map((player, index) => (
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

export default SelectPlayerComponent;

import React from 'react';
import usePlayerStore from '@Store/usePlayerStore';
import gameInfoStore from '@Store/useGameInfoStore';
import CheckIcon from '@mui/icons-material/Check'; // Check 아이콘 가져오기

interface IProps {
  className?: string;
}

const SelectPlayerComponent = ({ className }: IProps) => {
  const { setSelectedName, selectedName } = usePlayerStore();
  const { gameInfoResult } = gameInfoStore();

  const handleNameClick = (name: string) => {
    setSelectedName(name);
  };

  const showPlayer = gameInfoResult?.players.filter(
    (player) => player.username !== gameInfoResult?.selectedPlayer.username,
  );

  return (
    <div className={`w-full max-h-96 overflow-auto ${className}`}>
      <div className='mb-4'>다음 질문에 답할 사람을 아래에서 선택하세요.</div>
      {showPlayer &&
        showPlayer.map((player, index) => (
          <div
            key={index}
            className={`flex mb-2 items-center justify-between rounded-md px-6 py-1 ${
              selectedName === player.username ? 'bg-black text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleNameClick(player.username)}
          >
            <span>{player.username}</span>
            {selectedName === player.username ? <CheckIcon style={{ color: 'white' }} /> : <></>}
          </div>
        ))}
    </div>
  );
};

export default SelectPlayerComponent;

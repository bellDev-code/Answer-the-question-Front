import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSingleInputStore from '@Store/usePlayerStore';
import useGameInfoStore from '@Store/useGameInfoStore';
import { ROUTE_PATH } from '@Config/constant';

const SinglePlayerSelect = () => {
  const {
    players,
    username,
    disabled,
    setNames,
    setName,
    setDisabled,
    viewNames,
    setSelectedName,
  } = useSingleInputStore();
  const { gameInfoResult, currentRound, setCurrentRound } = useGameInfoStore();
  const navigate = useNavigate();

  useEffect(() => {
    viewNames();
    setDisabled(true);
  }, [setNames]);

  const handleNameClick = (name: string) => {
    setName(name);
    setDisabled(false);
    setSelectedName(name);
  };

  const handlePass = () => {
    const newRound = gameInfoResult?.data.currentRound;
    const goEndPage = gameInfoResult?.data.isOver;

    if (newRound !== undefined && newRound !== currentRound) {
      setCurrentRound(newRound);
      navigate(ROUTE_PATH.BM_PAGE);
    } else {
      navigate(ROUTE_PATH.ANSWER_PAGE);
    }
    if (goEndPage) {
      navigate(`${ROUTE_PATH.END_PAGE}`);
    }
  };

  return (
    <>
      <div className='sm: flex flex-col py-5 items-center justify-between'>
        <div>
          <div>{gameInfoResult?.data.selectedQuestion.text}</div>
        </div>
        <div className='sm: h-[120px] w-3/5 my-5 px-4 overflow-auto'>
          {players.map((player, index) => (
            <div
              key={index}
              className={`rounded-md px-1 ${
                username === player.username ? 'bg-black text-white w-full' : ''
              }`}
              onClick={() => handleNameClick(player.username)}
            >
              <span>{index + 1}.</span> {player.username}
            </div>
          ))}
        </div>
        <div className='sm:w-2/4'>
          <div className='text-l'>
            질문 대상자를 선택한 후 건내기 버튼을 누르고 기기를 질문 대상자에게 주세요
          </div>
        </div>
      </div>
      <div className='sm: flex justify-end px-10'>
        <button
          className='sm: bg-black text-white w-20 p-1 rounded-xl disabled:bg-gray-400'
          onClick={handlePass}
          disabled={disabled}
        >
          건내기
        </button>
      </div>
    </>
  );
};

export default SinglePlayerSelect;

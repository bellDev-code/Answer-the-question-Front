import React from 'react';
import { useNavigate } from 'react-router-dom';
import useSingleInputStore from '@Store/usePlayerStore';
import useGameInfoStore from '@Store/useGameInfoStore';
import { DYNAMIC_ROUTE_PATH, ROUTE_PATH } from '@Config/constant';
import PlayGameLayout from '@Layouts/PlayGameLayout';
import ShowPlayerComponent from '@Components/ShowPlayer';

const SelectQApage = () => {
  const { selectedName } = useSingleInputStore();

  const { gameInfoResult, currentRound, setCurrentRound } = useGameInfoStore();
  const navigate = useNavigate();

  const handlePass = () => {
    const newRound = gameInfoResult?.currentRound;
    const goEndPage = gameInfoResult?.isOver;

    if (!gameInfoResult?._id) return navigate(ROUTE_PATH.HOME);

    if (newRound !== undefined && newRound !== currentRound) {
      setCurrentRound(newRound);
      navigate(DYNAMIC_ROUTE_PATH(gameInfoResult?._id).BM_PAGE);
    } else {
      navigate(DYNAMIC_ROUTE_PATH(gameInfoResult?._id).ANSWER_PAGE);
    }
    if (goEndPage) {
      navigate(`${DYNAMIC_ROUTE_PATH(gameInfoResult?._id).END_PAGE}`);
    }
  };

  return (
    <PlayGameLayout>
      <div className='flex flex-col items-center justify-between'>
        <div className='text-xl mb-10'>{gameInfoResult?.selectedQuestion.text}</div>

        <div className='mb-6'>
          <ShowPlayerComponent />
        </div>

        <div className='text-l'>
          질문 대상자를 선택한 후 건내기 버튼을 누르고 기기를 질문 대상자에게 주세요
        </div>
      </div>
      <div className='flex justify-end px-10'>
        <button
          className='bg-black text-white w-20 p-1 rounded-xl disabled:bg-gray-400'
          onClick={handlePass}
          disabled={selectedName === ''}
        >
          건내기
        </button>
      </div>
    </PlayGameLayout>
  );
};

export default SelectQApage;

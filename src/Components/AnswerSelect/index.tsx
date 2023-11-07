import useSingleInputStore from '@Store/useSingleInputStore';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAnswerSelectStore from '@Store/useAnswerSelectStore';
import { useStartGameQuery } from '@Api/Api';
import useApiStore from '@Store/useApiStore';
import { IRequestGameStartData } from '@Api/types';

const AnswerSelect = () => {
  const navigate = useNavigate();
  const { players } = useSingleInputStore();
  const { mutate: startGameMutate } = useStartGameQuery();
  const { setApiResult } = useApiStore();

  const { selectedRoute, setSelectedRoute } = useAnswerSelectStore();

  const handlePrevious = () => {
    navigate('/singlePage');
  };

  const selectQApage = () => {
    setSelectedRoute('/singlePage/answerSelect/selectQApage');
  };

  const randomQApage = () => {
    setSelectedRoute('/singlePage/answerSelect/randomQApage');
  };

  const handleStart = async () => {
    if (selectedRoute) {
      try {
        const gameStartData: IRequestGameStartData = {
          players,
          playerSelectionType: 'direct',
          category: 'serious',
        };

        startGameMutate(gameStartData, {
          onSuccess: (data) => {
            console.log(data);
            if (data.code === 200) {
              setApiResult(data);
              navigate(selectedRoute);
            }
          },
          onError: (error) => {
            console.log(error);
          },
        });
      } catch (error) {
        console.error('An error occurred while starting the game:', error);
      }
    }
  };

  return (
    <div className='sm: h-screen'>
      <div className='sm: flex flex-col items-center w-full gap-8'>
        <h1 className='sm: mt-12'>모든 인원이 답을 하면 다시 선택할 수 있습니다.</h1>
        <div>
          <button
            onClick={selectQApage}
            className='sm: bg-black text-white p-8 rounded-xl 
            hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300'
          >
            질문 대상자를 지목합니다.
          </button>
        </div>
        <div>
          <button
            onClick={randomQApage}
            className='sm: bg-black text-white p-8 rounded-xl
            hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300'
          >
            질문 대상자를 랜덤으로 지정합니다.
          </button>
        </div>
        <div className='sm: flex gap-4'>
          <button onClick={handlePrevious}>이전</button>
          <button onClick={handleStart}>시작</button>
        </div>
      </div>
    </div>
  );
};

export default AnswerSelect;

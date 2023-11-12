import useSingleInputStore from '@Store/usePlayerStore';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAnswerSelectStore from '@Store/useAnswerSelectStore';
import { useStartGameQuery } from '@Api/singleGame';
import useApiStore from '@Store/useGameInfoStore';
import { IRequestGameStartData, TPlaySelectionType } from '@Api/types';
import { DYNAMIC_ROUTE_PATH, ROUTE_PATH } from '@Config/constant';
import { toast } from '@Components/toastify/toastify';
import { BaseButton } from '@Components/atom/button/BaseButton';
import PlayGameLayout from '@Layouts/PlayGameLayout';

const AnswerSelectPage = () => {
  const navigate = useNavigate();
  const { players, setSelectedName } = useSingleInputStore();
  const { mutate: startGameMutate } = useStartGameQuery();
  const { setApiResult } = useApiStore();

  const { selectedRoute, setSelectedRoute } = useAnswerSelectStore();

  const handlePrevious = () => {
    navigate(ROUTE_PATH.SINGLE_PAGE);
  };

  const selectQApage = () => {
    setSelectedRoute(ROUTE_PATH.SELECT_QA_PAGE);
  };

  const randomQApage = () => {
    setSelectedRoute(ROUTE_PATH.RANDOM_QA_PAGE);
  };

  const handleStart = async () => {
    if (selectedRoute) {
      let playerSelectionType: TPlaySelectionType = 'direct';

      if (selectedRoute === ROUTE_PATH.RANDOM_QA_PAGE) {
        playerSelectionType = 'random';
      }

      const gameStartData: IRequestGameStartData = {
        players,
        playerSelectionType,
        category: 'serious',
      };

      startGameMutate(gameStartData, {
        onSuccess: (data) => {
          if (data.code === 200) {
            setApiResult(data.data);
            // 시작을 할 때는 인원을 선택하지 않고 처음 작성된 사람이 질문에 답을 한다. 따라서 선택된 이름은 서버에서 오는 첫번째로 작성된 유저이다.
            setSelectedName(data.data.selectedPlayer.username);
            navigate(DYNAMIC_ROUTE_PATH(data.data._id).SELECT_QA_PAGE);
          } else {
            // 통신은 성공했으나, 서버에서 에러를 보내준 경우
            console.log(data);
          }
        },
        onError: (error) => {
          // FIXME: 에러처리 서버 코드에 따라서 다르게 처리해야함
          switch (error.code) {
            case 'ERR_NETWORK':
              toast('네트워크 에러');
              break;
          }
        },
      });
    }
  };

  return (
    <PlayGameLayout>
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
            <BaseButton onClick={handlePrevious}>이전</BaseButton>
            <BaseButton onClick={handleStart}>시작</BaseButton>
          </div>
        </div>
      </div>
    </PlayGameLayout>
  );
};

export default AnswerSelectPage;

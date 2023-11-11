import { useQuestionListMutation } from '@Api/singleGame';
import useApiStore from '@Store/useGameInfoStore';
import useSingleInputStore from '@Store/usePlayerStore';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DYNAMIC_ROUTE_PATH } from '@Config/constant';
import PlayGameLayout from '@Layouts/PlayGameLayout';
import { toast } from '@Components/toastify/toastify';
import SelectPlayerComponent from '@Components/SelectPlayer';

const AnswerPage = () => {
  const navigate = useNavigate();

  const { gameInfoResult, setApiResult } = useApiStore();
  const { selectedName } = useSingleInputStore();
  const { mutate: nextQuestionMutate } = useQuestionListMutation();

  const handlePass = () => {
    nextQuestionMutate(
      {
        gameId: gameInfoResult?._id || '',
        selectedPlayer: {
          username: selectedName || '',
        },
      },
      {
        onSuccess: (data) => {
          if (data.code === 200) {
            setApiResult(data.data);
            navigate(`${DYNAMIC_ROUTE_PATH(gameInfoResult?._id || '').SELECT_QA_PAGE}`);
          }
        },
        onError: (error) => {
          console.log(error);
          if (error.response?.data.message === 'Game is over') {
            toast('게임이 종료되었습니다.');
            navigate(DYNAMIC_ROUTE_PATH(gameInfoResult?._id || '').END_PAGE);
          }
        },
      },
    );
  };
  return (
    <PlayGameLayout>
      <div className='flex flex-col items-center justify-between'>
        <div className='flex flex-col items-center justify-between'>
          <div className='text-xl'>{gameInfoResult?.selectedQuestion.text}</div>
          <div className='h-[120px]  overflow-auto'>
            <div>답변자: {gameInfoResult?.selectedPlayer.username}</div>
          </div>

          <SelectPlayerComponent />
          <div className='sm:w-full'>
            <div className='text-l'>
              다음 질문을 하기 위해 다음 사람을 선택 한 후 버튼을 눌러주세요
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-end px-10 py-10'>
        <button className=' bg-black text-white w-20 p-2 rounded-xl' onClick={handlePass}>
          다음 질문
        </button>
      </div>
    </PlayGameLayout>
  );
};

export default AnswerPage;

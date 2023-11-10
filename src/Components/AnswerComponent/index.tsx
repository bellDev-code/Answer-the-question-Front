import { useQuestionListMutation } from '@Api/singleGame';
import useApiStore from '@Store/useGameInfoStore';
import useSingleInputStore from '@Store/usePlayerStore';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '@Config/constant';

const AnswerComponent = () => {
  const navigate = useNavigate();

  const { gameInfoResult, setApiResult } = useApiStore();
  const { selectedName } = useSingleInputStore();
  const { mutate: nextQuestionMutate } = useQuestionListMutation();

  const handlePass = () => {
    nextQuestionMutate(gameInfoResult?.data._id || '', {
      onSuccess: (data) => {
        if (data.code !== 200) {
          alert('다음 질문을 불러오는데 실패했습니다.');
          return;
        }
        const goEndPage = data.data.isOver;

        if (goEndPage) {
          navigate(`${ROUTE_PATH.END_PAGE}`);
        }
        setApiResult(data);
        navigate(`${ROUTE_PATH.SELECT_QA_PAGE}`);
      },
      onError: (error) => {
        console.log(error);
        alert('다음 질문을 불러오는데 실패했습니다.');
      },
    });
  };

  return (
    <>
      <div className='sm: flex flex-col py-5 items-center justify-between'>
        <div className='sm: flex flex-col py-5 items-center justify-between'>
          <div>
            <div>{gameInfoResult?.data.selectedQuestion.text}</div>
          </div>
          <div className='sm: h-[120px] w-3/5 my-5 px-4 overflow-auto'>
            <div>{selectedName}</div>
          </div>
          <div className='sm:w-2/4'>
            <div className='text-l'>다음 질문을 하기 위해 다음 질문 버튼을 눌러주세요</div>
          </div>
        </div>
      </div>
      <div className='sm: flex justify-end px-10 py-10'>
        <button className='sm: bg-black text-white w-20 p-2 rounded-xl' onClick={handlePass}>
          다음 질문
        </button>
      </div>
    </>
  );
};

export default AnswerComponent;

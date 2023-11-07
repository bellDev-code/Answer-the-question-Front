import { useQuestionListMutation } from '@Api/singleGame';
import useApiStore from '@Store/useApiStore';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AnswerComponent = () => {
  const navigate = useNavigate();

  const { apiResult, setApiResult } = useApiStore();
  const { mutate: nextQuestionMutate } = useQuestionListMutation();

  const handlePass = () => {
    nextQuestionMutate(apiResult?.data._id || '', {
      onSuccess: (data) => {
        // TODO: 여기서 data.code가 200이 아니면 에러처리
        if (data.code !== 200) {
          alert('다음 질문을 불러오는데 실패했습니다.');
          return;
        }
        setApiResult(data);
        navigate(`/singlePage/answerSelect/selectQApage`);
      },
      onError: (error) => {
        // FIXME: 에러처리 서버 코드에 따라서 다르게 처리해야함
        console.log(error);
        alert('다음 질문을 불러오는데 실패했습니다.');
      },
    });
  };

  return (
    <>
      <div className='sm: flex flex-col py-5 items-center justify-between'>
        <div className='sm: flex flex-col py-5 items-center justify-between'>
          {/* 여기에서 selectedQuestion이 보여야함 */}
          <div>
            <div>{apiResult?.data.selectedQuestion.text}</div>
          </div>
          <div className='sm: h-[120px] w-3/5 my-5 px-4 overflow-auto'>
            <div>{apiResult?.data.selectedPlayer.username}</div>
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

import React from 'react';
import { useNavigate } from 'react-router-dom';

const AnswerComponent = () => {
  const navigate = useNavigate();

  const handlePass = () => {
    navigate(-1);
  };

  return (
    <>
      <div className='sm: flex flex-col py-5 items-center justify-between'>
        <div className='sm: flex p-10 items-center justify-center text-3xl'>답변자</div>

        <div className='sm:w-2/4'>
          <div className='text-l'>다음 질문을 하기 위해 다음 질문 버튼을 눌러주세요</div>
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

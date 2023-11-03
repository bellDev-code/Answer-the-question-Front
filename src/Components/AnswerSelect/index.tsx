import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AnswerSelect = () => {
  const navigate = useNavigate();
  const [selectedRoute, setSelectedRoute] = useState<string>('');

  const handlePrevious = () => {
    navigate('/singlePage');
  };

  const selectQApage = () => {
    setSelectedRoute('/singlePage/answerSelect/selectQApage');
  };

  const randomQApage = () => {
    setSelectedRoute('/singlePage/answerSelect/randomQApage');
  };

  const handleStart = () => {
    if (selectedRoute) {
      navigate(selectedRoute);
    }
    // 어떤 라우터 경로가 선택되지 않았을 경우 에러 처리 예정
  };

  return (
    <div className='sm: h-screen'>
      <div className='sm: flex flex-col items-center w-full gap-8'>
        <h1 className='sm: mt-12'>모든 인원이 답을 하면 다시 선택할 수 있습니다.</h1>
        <div>
          <button className='sm: bg-black text-white p-8 rounded-xl' onClick={selectQApage}>
            질문 대상자를 지목합니다.
          </button>
        </div>
        <div>
          <button className='sm: bg-black text-white p-8 rounded-xl' onClick={randomQApage}>
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

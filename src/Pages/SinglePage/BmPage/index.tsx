import { ROUTE_PATH } from '@Config/constant';
import gameInfoStore from '@Store/useGameInfoStore';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BmPage = () => {
  const navigate = useNavigate();
  const { gameInfoResult, setCurrentRound } = gameInfoStore();

  const handleClick = () => {
    navigate('/donatePage');
  };

  const handleKeepClick = () => {
    const newRound = gameInfoResult?.data.currentRound ?? 0;
    setCurrentRound(newRound);
    navigate(`${ROUTE_PATH.SELECT_QA_PAGE}`, { state: { gameInfoResult } });
  };

  return (
    <div>
      <div className='sm: flex flex-col p-10 items-center justify-center'>
        <h1 className='sm: text-2xl py-10'>모두가 답을 했어요!</h1>
        <div>
          <p>질문 대상자 선정 방식을 변경 하시거나 다음 라운드를 진행할 수 있어요</p>
        </div>
        <div className='sm: flex py-10 gap-4'>
          <button onClick={handleClick} className='sm: bg-black text-white w-24 p-1 rounded-xl'>
            선정 방식을 변경할래요
          </button>
          <button onClick={handleKeepClick} className='sm: bg-black text-white w-24 p-1 rounded-xl'>
            선정 방식을 유지할래요
          </button>
        </div>
      </div>
    </div>
  );
};

export default BmPage;

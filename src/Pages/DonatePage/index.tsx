import { ROUTE_PATH } from '@Config/constant';
import gameInfoStore from '@Store/useGameInfoStore';
import { useShownStore } from '@Store/useShownPageStore';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DonatePage = () => {
  const { gameInfoResult, setCurrentRound } = gameInfoStore();
  const { setUseShownPage } = useShownStore();
  const navigate = useNavigate();

  const handleKeepClick = () => {
    setUseShownPage(true);
    const newRound = gameInfoResult?.data.currentRound ?? 0;
    setCurrentRound(newRound);
    navigate(`${ROUTE_PATH.SELECT_QA_PAGE}`, { state: { gameInfoResult } });
  };

  return (
    <div>
      <div className='sm: flex flex-col p-10'>
        <h1 className='sm: text-2xl py-10'>
          잠깐! 다음 라운드를 진행하기 전에 우리 앱을 위해 후원 부탁드려요!
        </h1>
        <div>
          <p>카카오페이</p>
          <p>qr 시스템</p>
        </div>
        <div className='sm: flex justify-end'>
          <button onClick={handleKeepClick} className='sm: bg-black text-white w-24 p-1 rounded-xl'>
            계속하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;

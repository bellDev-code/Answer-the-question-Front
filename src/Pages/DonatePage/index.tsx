import { BaseButton } from '@Components/atom/button/BaseButton';
import { DYNAMIC_ROUTE_PATH, ROUTE_PATH } from '@Config/constant';
import gameInfoStore from '@Store/useGameInfoStore';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DonatePage = () => {
  const { gameInfoResult, setCurrentRound } = gameInfoStore();

  const navigate = useNavigate();

  const handleKeepClick = () => {
    if (!gameInfoResult?._id) return navigate(ROUTE_PATH.HOME);

    const newRound = gameInfoResult?.currentRound ?? 0;
    setCurrentRound(newRound);
    navigate(DYNAMIC_ROUTE_PATH(gameInfoResult?._id).SELECT_QA_PAGE);
  };

  return (
    <div>
      <div className='flex flex-col p-10'>
        <h1 className='text-2xl py-10'>
          잠깐! 다음 라운드를 진행하기 전에 우리 앱을 위해 후원 부탁드려요!
        </h1>
        <div>
          <p>카카오페이</p>
          <p>qr 시스템</p>
        </div>
        <div className='flex justify-end'>
          <BaseButton onClick={handleKeepClick}>계속하기</BaseButton>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;

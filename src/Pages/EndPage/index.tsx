import { BaseButton } from '@Components/atom/button/BaseButton';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import GoodbyeImage from 'src/assets/images/goodbye.png';

const EndPage = () => {
  const navigate = useNavigate();

  const handleClickMoveHomePage = () => {
    navigate('/');
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='text-center text-xl break-keep'>
        <div className='flex'>
          <img src={GoodbyeImage} className='w-full h-auto mb-5' />
        </div>

        <h1 className='font-semibold'>좋은 시간 보내셨나요?</h1>

        <p>앞으로도 더 좋은 모습으로 여러분 곁에 있을 Secret Out을 기대해 주세요.</p>
        <p className='py-5'>
          행복이 가득한 나날이 계속되길 바라며, 다시 만날 그 날을 기대하며 인사드립니다.
        </p>
        <p>고맙습니다. 늘 건강하고, 행복 가득한 날들이 되시길 기원합니다.</p>
      </div>

      {/* 다른 콘텐츠나 기능이 필요한 경우 여기에 추가합니다. */}

      <div className='w-full flex justify-center py-10'>
        <BaseButton onClick={handleClickMoveHomePage}>처음으로</BaseButton>
      </div>
    </div>
  );
};

export default EndPage;

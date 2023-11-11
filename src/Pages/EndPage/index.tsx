import { BaseButton } from '@Components/atom/button/BaseButton';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const EndPage = () => {
  const navigate = useNavigate();

  const handleClickMoveHomePage = () => {
    navigate('/');
  };

  return (
    <div>
      <div className='sm: flex items-center justify-center'>
        <div className='sm: flex flex-col p-10 text-xl'>
          좋은 시간 보내셨나요? 다양한 질문을 더 준비 해올게요!
          <span className='sm: py-5'>이용해주셔서 감사합니다!</span>
        </div>
      </div>
      <div className='sm: flex flex-col p-10'>
        <p>카카오 페이 버튼</p>
        <p>QR</p>
      </div>

      <div className='flex justify-center'>
        <BaseButton onClick={handleClickMoveHomePage}>처음으로</BaseButton>
      </div>
    </div>
  );
};

export default EndPage;

import { BaseButton } from '@Components/atom/button/BaseButton';
import { ROUTE_PATH } from '@Configure/constant';
import PlayGameLayout from '@Layouts/PlayGameLayout';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MultiDevicePage = () => {
  const navigate = useNavigate();

  const goMakeRoom = () => {
    navigate(`${ROUTE_PATH.MULTI_ROOM}`);
  };

  return (
    <PlayGameLayout>
      <div>
        <div className='sm: flex flex-col'>
          <div className='sm: py-5'>방을 만들어주세요</div>
          <div className=''>방 제목을 선정해주세요. 최대 10명까지 이용이 가능합니다.</div>
        </div>
        <div className='sm: flex items-center justify-center gap-6 py-10'>
          <input type='text' placeholder='방 제목을 입력하세요' />
          <BaseButton onClick={goMakeRoom}>만들기</BaseButton>
        </div>
      </div>
    </PlayGameLayout>
  );
};

export default MultiDevicePage;

import { BaseButton } from '@Components/atom/button/BaseButton';
import PlayGameLayout from '@Layouts/PlayGameLayout';
import React from 'react';

const MultiRoom = () => {
  // create Room api 호출 예정
  return (
    <PlayGameLayout>
      <div className='sm: flex items-center justify-center'>
        <input type='text' placeholder='이름을 입력하세요' />
        <BaseButton>입장하기</BaseButton>
      </div>
    </PlayGameLayout>
  );
};

export default MultiRoom;

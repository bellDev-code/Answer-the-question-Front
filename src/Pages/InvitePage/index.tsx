import { BaseButton } from '@Components/atom/button/BaseButton';
import React from 'react';

const InvitePage = () => {
  return (
    <div className='dm: flex justify-center items-center'>
      <input type='tex' placeholder='이름을 입력하세요' />
      <BaseButton>입장하기</BaseButton>
    </div>
  );
};

export default InvitePage;

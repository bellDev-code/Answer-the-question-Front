import React from 'react';
import LoadingImg from 'src/assets/images/loading.png';

const StartGameLoading = () => {
  return (
    <div className='w-full text-center'>
      <div className='mb-4'>
        <img className='w-full h-auto' src={LoadingImg} />
      </div>

      <h1 className='mb-2 text-2xl'>잠시만 기다려주세요!</h1>
      <h2 className='text-xl'>질문을 작성하고 있어요</h2>
    </div>
  );
};

export default StartGameLoading;

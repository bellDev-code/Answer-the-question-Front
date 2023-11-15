import { ROUTE_PATH } from '@Configure/constant';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <div className='text-center mb-8'>
        <h1 className='text-2xl font-bold'>서비스 모드 선택</h1>
      </div>
      <div className='flex flex-col gap-4 items-center'>
        <div className='flex flex-col items-center mb-4'>
          <button
            onClick={() => navigate(ROUTE_PATH.SINGLE_PAGE)}
            className='bg-black text-white px-10 w-9/12 py-3 text-l rounded-xl'
          >
            공유 모드
          </button>
          <p className='text-sm mt-2'>하나의 기기를 여러 사람이 번갈아 사용하는 모드</p>
        </div>
        <div className='flex flex-col items-center'>
          <button
            disabled
            onClick={() => navigate(ROUTE_PATH.MULTI_PAGE)}
            className='bg-black text-white px-10 w-9/12 py-3 text-l rounded-xl'
          >
            개인 모드
          </button>
          <p className='text-sm mt-2'>각자의 기기를 사용하여 서비스에 참여하는 모드</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

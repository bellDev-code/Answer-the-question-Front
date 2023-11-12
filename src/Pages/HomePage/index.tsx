import { ROUTE_PATH } from '@Config/constant';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='sm: flex flex-col text-center h-full justify-center'>
        <div className='sm: flex flex-col gap-4 items-center'>
          <button
            onClick={() => navigate(ROUTE_PATH.SINGLE_PAGE)}
            className='sm: bg-black text-white px-10 w-9/12 py-3 text-l rounded-xl'
          >
            싱글 디바이스
          </button>
          <button
            onClick={() => navigate(ROUTE_PATH.MULTI_PAGE)}
            className='sm: bg-black text-white px-10 w-9/12 py-3 text-l rounded-xl'
          >
            멀티 디바이스
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

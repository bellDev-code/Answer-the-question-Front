import React from 'react';

const RandomPlayer = () => {
  return (
    <div className='sm: px-10 h-screen'>
      <div className='sm: flex flex-col py-5 items-center justify-between'>
        <div className='sm:w-2/4 py-10 flex items-center justify-center'>{}</div>
        <div className='sm: text-2xl'>답변자 {}</div>
      </div>
      <div className='sm: flex justify-end px-10 py-10'>
        <button className='sm: bg-black text-white w-20 p-2 rounded-xl'>다음 질문</button>
      </div>
    </div>
  );
};

export default RandomPlayer;

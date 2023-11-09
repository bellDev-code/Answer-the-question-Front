import React, { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import useSingleInputStore from '@Store/usePlayerStore';
import { ROUTE_PATH } from '@Config/constant';

const SingleInput = () => {
  const { username, players, isButtonEnabled, setName, addName, deleteName } =
    useSingleInputStore();

  const navigate = useNavigate();

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAddName = () => {
    if (username.length > 1) {
      addName();
    }
  };

  const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && event.nativeEvent.isComposing === false) {
      event.preventDefault();
      handleAddName();
    }
  };

  const handleNext = () => {
    navigate(ROUTE_PATH.ANSWER_SELECT);
  };

  return (
    <div className='sm: px-10 h-screen'>
      <div className='sm: flex flex-col py-5 items-center justify-between'>
        <div className='sm: flex w-full justify-between'>
          <input
            className='sm: p-2 border-b  border-black place-content-center'
            type='text'
            placeholder='이름을 입력해주세요.'
            value={username}
            onChange={handleNameChange}
            onKeyDown={handleEnterKey}
          />
          <button className='sm: bg-black text-white w-20 p-1 rounded-xl' onClick={handleAddName}>
            추가
          </button>
        </div>
        <div className='sm: h-[120px] w-3/5 my-5 overflow-auto'>
          {players.map((player, index) => (
            <div className='sm: flex items-center justify-between' key={index}>
              <div>
                {index + 1}. {player.username}
              </div>
              <button onClick={() => deleteName(index)} className='sm: ml-2 py-1 px-4 text-red-600'>
                X
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className='sm: flex'>
        <p className='sm: text-lg font-semibold'>총 인원: {players.length}</p>
      </div>
      <div className='sm: flex justify-end py-10'>
        <button
          onClick={handleNext}
          className='sm: bg-black text-white w-20 p-1 rounded-xl disabled:bg-gray-400'
          disabled={!isButtonEnabled}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default SingleInput;

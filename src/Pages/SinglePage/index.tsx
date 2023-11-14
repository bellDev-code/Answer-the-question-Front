import React, { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import useSingleInputStore from '@Store/usePlayerStore';
import { ROUTE_PATH } from '@Configure/constant';
import { BaseButton } from '@Components/atom/button/BaseButton';

const SinglePage = () => {
  const { username, players, setUsername, addName, deleteName } = useSingleInputStore();

  const navigate = useNavigate();

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
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
    navigate(`${ROUTE_PATH.SINGLE_PAGE}${ROUTE_PATH.ANSWER_SELECT}`);
  };
  return (
    <div className='px-10 h-screen w-full'>
      <div className='flex flex-col py-5 items-center justify-between'>
        <div className='flex w-full justify-between  items-center '>
          <input
            className='p-2 border-b w-full border-black place-content-center'
            type='text'
            placeholder='이름을 입력해주세요.'
            value={username}
            onChange={handleNameChange}
            onKeyDown={handleEnterKey}
          />

          <BaseButton className='ml-2' onClick={handleAddName}>
            추가
          </BaseButton>
        </div>
        <div className='h-[120px] w-3/5 my-5 overflow-auto'>
          {players.map((player, index) => (
            <div className='flex items-center justify-between' key={index}>
              <div>
                {index + 1}. {player.username}
              </div>
              <button onClick={() => deleteName(index)} className='ml-2 py-1 px-4 text-red-600'>
                X
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className='flex'>
        <p className='text-lg font-semibold'>총 인원: {players.length}</p>
      </div>
      <div className='flex justify-end py-10'>
        <BaseButton onClick={handleNext} disabled={players.length < 2}>
          다음
        </BaseButton>
      </div>
    </div>
  );
};

export default SinglePage;

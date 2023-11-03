import React, { ChangeEvent, useState } from 'react';

const SingleInput = () => {
  const [name, setName] = useState<string>('');
  const [names, setNames] = useState<string[]>([]);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAddName = () => {
    if (name) {
      setNames([...names, name]);
      setName('');
    }
  };

  return (
    <div className='sm: px-10 h-screen'>
      <div className='sm: flex flex-col py-5 items-center justify-between'>
        <div className='sm: flex w-full justify-between'>
          <input
            className='sm: p-2 border-b  border-black place-content-center'
            type='text'
            placeholder='이름을 입력해주세요.'
            value={name}
            onChange={handleNameChange}
          />
          <button className='sm: bg-black text-white w-20 p-1 rounded-xl' onClick={handleAddName}>
            추가
          </button>
        </div>
        <div className='sm: h-[120px] w-3/5 my-5 overflow-auto'>
          {names.map((name, index) => (
            <div key={index}>
              <span>{index + 1}.</span> {name}
            </div>
          ))}
        </div>
      </div>
      <div className='sm: flex'>
        <p className='sm: text-lg font-semibold'>총 인원: {names.length}</p>
      </div>
      <div className='sm: flex justify-end py-10'>
        <button className='sm: bg-black text-white w-20 p-1 rounded-xl'>다음</button>
      </div>
    </div>
  );
};

export default SingleInput;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SinglePlayerSelect = () => {
  const [names, setNames] = useState<string[]>([]);
  const [selectedName, setSelectedName] = useState<string | null>();
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    const savedNames = JSON.parse(sessionStorage.getItem('names') || '[]');
    setNames(savedNames);
  }, []);

  const handleNameClick = (name: string) => {
    setSelectedName(name);

    setDisabled(false);
  };

  const navigate = useNavigate();

  const handlePass = () => {
    navigate(`/singlePage/answerSelect/selectQApage/AnswerPage?name=${selectedName}`);
  };

  return (
    <>
      <div className='sm: flex flex-col py-5 items-center justify-between'>
        <div className='sm: h-[120px] w-3/5 my-5 px-4 overflow-auto'>
          {names.map((name, index) => (
            <div
              key={index}
              className={`rounded-md px-1 ${
                selectedName === name ? 'bg-black text-white w-full' : ''
              }`}
              onClick={() => handleNameClick(name)}
            >
              <span>{index + 1}.</span> {name}
            </div>
          ))}
        </div>
        <div className='sm:w-2/4'>
          <div className='text-l'>
            질문 대상자를 선택한 후 건내기 버튼을 누르고 기기를 질문 대상자에게 주세요
          </div>
        </div>
      </div>
      <div className='sm: flex justify-end px-10'>
        <button
          className='sm: bg-black text-white w-20 p-1 rounded-xl disabled:bg-gray-400'
          onClick={handlePass}
          disabled={disabled}
        >
          건내기
        </button>
      </div>
    </>
  );
};

export default SinglePlayerSelect;

import { TPlaySelectionType } from '@Api/types';
import React from 'react';

interface IProps {
  selectedPlayType: TPlaySelectionType;
  setSelectedPlayType: React.Dispatch<React.SetStateAction<TPlaySelectionType>>;
}

const index = ({ selectedPlayType, setSelectedPlayType }: IProps) => {
  const handleClickType = (type: TPlaySelectionType) => {
    setSelectedPlayType(type);
  };

  // 선택된 버튼의 스타일을 강화합니다.
  const selectedStyle = 'shadow-lg bg-black text-white scale-105 z-10';
  // 비선택 버튼의 스타일을 정의합니다.
  const unselectedStyle = 'bg-gray-800 text-gray-400';

  return (
    <div className='flex break-keep flex-row space-x-2 relative'>
      <button
        onClick={() => handleClickType('direct')}
        className={`break-words text-balck transition-transform duration-300 p-4 rounded-xl 
          focus:outline-none 
          ${selectedPlayType === 'direct' ? selectedStyle : unselectedStyle}`}
      >
        답변자를 직접 고를게요.
      </button>
      <button
        onClick={() => handleClickType('random')}
        className={` break-keep transition-transform duration-300 p-4 rounded-xl 
          focus:outline-none 
          ${selectedPlayType === 'random' ? selectedStyle : unselectedStyle}`}
      >
        답변자를 랜덤으로 고를게요.
      </button>
    </div>
  );
};

export default index;

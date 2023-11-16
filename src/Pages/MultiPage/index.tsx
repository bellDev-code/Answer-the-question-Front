import { useCreateRoomQuery } from '@Api/multiGame';
import { IRequestMultiGameData, TPlaySelectionType } from '@Api/types';
import BackButtonWithText from '@Components/BackButtonWithText';
import { BaseButton } from '@Components/atom/button/BaseButton';
import PlayGameLayout from '@Layouts/PlayGameLayout';
import useApiStore from '@Store/useGameInfoStore';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const MultiDevicePage = () => {
  const { mutate: createRoomMutate } = useCreateRoomQuery();
  const { setMultiResult } = useApiStore();

  const [selectedType, setSelectedType] = useState<TPlaySelectionType | null>(null);
  const [players, setPlayers] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayers(event.target.value);
  };

  const createMultiRoom = () => {
    if (!selectedType) {
      toast('선택한 유형이 없습니다.');
      return;
    }

    if (!players) {
      toast('이름을 입력하세요');
      return;
    }

    const createRoomData: IRequestMultiGameData = {
      players: [{ username: players }],
      playerSelectionType: selectedType,
      category: 'serious',
    };

    createRoomMutate(createRoomData, {
      onSuccess: (data) => {
        if (data.code === 200) {
          setMultiResult(data.data);
        } else {
          console.log(data);
        }
      },
      onError: (error) => {
        switch (error.code) {
          case 'ERR_NETWORK':
            toast('네트워크 에러');
            break;
        }
      },
    });
  };
  return (
    <>
      <BackButtonWithText />
      <PlayGameLayout>
        <div>
          <div className='sm: flex py-8 flex-col'>
            <div className='sm: py-5'>방을 만들어주세요</div>
            <div>이름을 입력해주세요. 최대 10명까지 이용이 가능합니다.</div>
          </div>
          <div className='sm: flex items-center justify-center gap-6 py-5'>
            <input
              type='text'
              placeholder='이름을 입력해주세요'
              value={players}
              onChange={handleInputChange}
              autoFocus
            />
            <BaseButton onClick={createMultiRoom}>방 만들기</BaseButton>
          </div>
          <div className='sm: flex items-center justify-center py-5 gap-2'>
            <div>
              <button
                onClick={() => setSelectedType('direct')}
                className='sm: bg-black text-white p-2 rounded-xl 
            hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300'
              >
                질문 대상자를 지목합니다.
              </button>
            </div>
            <div>
              <button
                onClick={() => setSelectedType('random')}
                className='sm: bg-black text-white p-2 rounded-xl
            hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300'
              >
                질문 대상자를 랜덤으로 지정합니다.
              </button>
            </div>
          </div>
        </div>
      </PlayGameLayout>
    </>
  );
};

export default MultiDevicePage;

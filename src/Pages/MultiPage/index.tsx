import { useCreateRoomQuery } from '@Api/multiGame';
import { IRequestMultiCreateData, TPlaySelectionType } from '@Api/types';
import BackButtonWithText from '@Components/BackButtonWithText';
import { BaseButton } from '@Components/atom/button/BaseButton';
import { DYNAMIC_ROUTE_PATH, SESSION_USERNAME } from '@Configure/constant';
import PlayGameLayout from '@Layouts/PlayGameLayout';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import PlayTypeSelection from '@Components/PlayTypeSelection';
import { convertPlayerSelectionType } from 'src/utils/convertText';

const MultiDevicePage = () => {
  const { mutate: createRoomMutate } = useCreateRoomQuery();
  const [selectedPlayType, setSelectedPlayType] = useState<TPlaySelectionType>('direct');
  const [players, setPlayers] = useState<string>('');

  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayers(event.target.value);
  };

  const createMultiRoom = () => {
    if (!selectedPlayType) {
      toast('선택한 유형이 없습니다.');
      return;
    }

    if (!players) {
      toast('이름을 입력하세요');
      return;
    }

    const createRoomData: IRequestMultiCreateData = {
      players: [{ username: players }],
      playerSelectionType: selectedPlayType,
      category: 'serious',
    };

    createRoomMutate(createRoomData, {
      onSuccess: (data) => {
        if (data.code === 200) {
          sessionStorage.setItem(SESSION_USERNAME, players);
          navigate(`${DYNAMIC_ROUTE_PATH(data.data._id, 0).MULTI_ROOM}`);
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
        <div className='flex py-8 flex-col text-center'>
          <div className=''>방을 먼저 생성해요.</div>
          <div>방을 만드는 사람의 이름을 입력해주세요.</div>
        </div>
        <div className='flex items-center justify-center gap-6 py-5 mb-6'>
          <input
            className='p-2 border-b w-full border-black place-content-center'
            type='text'
            placeholder='ex) 이수한'
            value={players}
            onChange={handleInputChange}
            autoFocus
          />
        </div>

        <div className='text-center mb-8'>{convertPlayerSelectionType(selectedPlayType)}</div>

        <div className='flex justify-center w-full'>
          <PlayTypeSelection
            selectedPlayType={selectedPlayType}
            setSelectedPlayType={setSelectedPlayType}
          />
        </div>
        <div className='flex  justify-center mt-10'>
          <BaseButton onClick={createMultiRoom}>방 만들기</BaseButton>
        </div>
      </PlayGameLayout>
    </>
  );
};

export default MultiDevicePage;

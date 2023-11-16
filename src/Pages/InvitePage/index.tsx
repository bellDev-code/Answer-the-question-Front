import { joinRoomQuery } from '@Api/multiGame';
import { BaseButton } from '@Components/atom/button/BaseButton';
import React, { useState } from 'react';
import useApiStore from '@Store/useGameInfoStore';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DYNAMIC_ROUTE_PATH } from '@Configure/constant';

const InvitePage = () => {
  const [username, setUsername] = useState<string>();
  const navigate = useNavigate();
  const { mutate: joinRoomMutate } = joinRoomQuery();
  const { gameId, questionIndex } = useParams();
  const { setMultiResult } = useApiStore();

  const joinMultiRoom = () => {
    joinRoomMutate(
      {
        gameId: gameId || '',
        username: username || '',
      },
      {
        onSuccess: (data) => {
          if (data.code === 200) {
            setMultiResult(data.data);
            navigate(
              `${DYNAMIC_ROUTE_PATH(data.data?._id || '', Number(questionIndex)).MULTI_ROOM}`,
            );
            // if(data.data.isPlaying === false) {
            //   toast('게임이 시작되지 않았습니다.')
            // } else {
            //   navigate(`${DYNAMIC_ROUTE_PATH(data.data?._id || '').MULTI_ROOM}`)
            // }
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
      },
    );
  };

  const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <div className='flex justify-center items-center'>
      <input type='text' placeholder='이름을 입력하세요' onChange={nameChange} value={username} />
      <BaseButton onClick={joinMultiRoom}>입장하기</BaseButton>
    </div>
  );
};

export default InvitePage;

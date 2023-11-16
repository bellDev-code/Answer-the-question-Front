import PlayGameLayout from '@Layouts/PlayGameLayout';
import React from 'react';
import useApiStore from '@Store/useGameInfoStore';
import { BaseButton } from '@Components/atom/button/BaseButton';
import { DYNAMIC_ROUTE_PATH } from '@Configure/constant';
import { toast } from 'react-toastify';

const MultiRoom = () => {
  const { multiInfoResult } = useApiStore();

  const roomOwner = multiInfoResult?.players[0].username;

  // 임시 공유 url
  const inviteUrl = `localhost:5173${DYNAMIC_ROUTE_PATH(multiInfoResult?._id || '').INVITE_ROOM}`;

  const clipBoardCopy = (text: string) => {
    try {
      navigator.clipboard.writeText(text);
      toast('복사 되었습니다.');
    } catch (error) {
      toast('복사 실패하였습니다.');
    }
  };

  return (
    <PlayGameLayout>
      <div>
        <div>총 참여인원 : {multiInfoResult?.players.length}</div>
        <div>{roomOwner}</div>
      </div>
      <div className='sm: flex py-10'>시작하기 버튼을 누르면 추가 인원 참여가 불가능합니다.</div>
      <div className='sm: flex flex-wrap text-sm py-5'>
        <div className='sm:'>{inviteUrl}</div>
        <BaseButton onClick={() => clipBoardCopy(inviteUrl)}>복사하기</BaseButton>
      </div>
      <div>
        <BaseButton>시작하기</BaseButton>
      </div>
    </PlayGameLayout>
  );
};

export default MultiRoom;

import PlayGameLayout from '@Layouts/PlayGameLayout';
import React, { useEffect, useState } from 'react';
import { BaseButton } from '@Components/atom/button/BaseButton';
import { SESSION_USERNAME } from '@Configure/constant';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useMultiGameIdDetailQuery } from '@Api/multiGame';
import UsernameModal from './component/UsernameModal';

const MultiRoom = () => {
  const { gameId, questionIndex } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: multiGameResult } = useMultiGameIdDetailQuery(
    gameId || '',
    Number(questionIndex) || 0,
  );

  const roomOwner = multiGameResult?.data?.players[0].username;

  // 임시 공유 url
  const inviteUrl = window.location.href;

  useEffect(() => {
    const currentUserName = sessionStorage.getItem(SESSION_USERNAME);
    if (!currentUserName) {
      // 사용자 이름이 sessionStorage에 없으면 모달을 엽니다.
      setIsModalOpen(true);
    }
  }, []);

  const clipBoardCopy = (text: string) => {
    try {
      navigator.clipboard.writeText(text);
      toast('복사 되었습니다.');
    } catch (error) {
      toast('복사 실패하였습니다.');
    }
  };

  const currentUserName = sessionStorage.getItem(SESSION_USERNAME);
  const isShowStartButton = roomOwner === currentUserName;

  return (
    <PlayGameLayout>
      <UsernameModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      <div>
        <div>총 참여인원 : {multiGameResult?.data?.players.length}</div>
        <div>{roomOwner}</div>
        <div>
          {multiGameResult?.data?.players.map((player, index) => {
            if (index !== 0) {
              return <div key={index}>{player.username}</div>;
            }
            return null;
          })}
        </div>
      </div>
      <div className='sm: flex py-10'>시작하기 버튼을 누르면 추가 인원 참여가 불가능합니다.</div>
      <div className='sm: flex flex-wrap text-sm py-5 w-full'>
        <div className='sm: w-full break-words'>{inviteUrl}</div>
        <BaseButton onClick={() => clipBoardCopy(inviteUrl)}>복사하기</BaseButton>
      </div>
      <div>{isShowStartButton && <BaseButton>시작하기</BaseButton>}</div>
    </PlayGameLayout>
  );
};

export default MultiRoom;

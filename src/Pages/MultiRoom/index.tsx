import PlayGameLayout from '@Layouts/PlayGameLayout';
import React, { useEffect, useState } from 'react';
import { BaseButton } from '@Components/atom/button/BaseButton';
import { DYNAMIC_ROUTE_PATH, SESSION_USERNAME } from '@Configure/constant';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useMultiGameIdDetailQuery, useStartMultiGameQuery } from '@Api/multiGame';
import UsernameModal from './component/UsernameModal';
import { IRequestMultiGameData } from '@Api/types';

const MultiRoom = () => {
  const { gameId, questionIndex } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: multiGameResult } = useMultiGameIdDetailQuery(
    gameId || '',
    Number(questionIndex) || 0,
  );

  const navigate = useNavigate();
  const { mutate: multiStartMutate } = useStartMultiGameQuery();

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

  useEffect(() => {
    if (multiGameResult?.data.isPlaying === true) {
      navigate(`${DYNAMIC_ROUTE_PATH(gameId || '', 0).MULTI_ANSWER_PAGE}`);
    }
  });

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

  const startMultiGame = () => {
    if (multiGameResult && multiGameResult?.data?.players.length < 2) {
      toast('최소 두명 이상의 플레이어가 필요합니다.');
      return;
    }
    const gameStartData: IRequestMultiGameData = {
      gameId: gameId || '',
    };

    multiStartMutate(gameStartData, {
      onSuccess: (data) => {
        if (data.code === 200) {
          navigate(`${DYNAMIC_ROUTE_PATH(gameId || '', 0).MULTI_ANSWER_PAGE}`);
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

  const viewPlayersWithoutOwner = () => {
    return (
      <>
        {multiGameResult?.data?.players
          .filter((player) => player.username !== roomOwner)
          .map((player, index) => {
            return (
              <div key={index}>
                {index + 1}. {player.username}
              </div>
            );
          })}
      </>
    );
  };

  return (
    <PlayGameLayout>
      <UsernameModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      <div className='text-center'>
        <div className='mb-4 text-2xl'>총 참여인원 : {multiGameResult?.data?.players.length}</div>
        <div>방장: {roomOwner}</div>
        <div>{viewPlayersWithoutOwner()}</div>
      </div>
      <div className='w-full flex py-10'>시작하기 버튼을 누르면 추가 인원 참여가 불가능합니다.</div>
      <div className='flex flex-wrap text-sm mb-4 w-full justify-center'>
        <div>링크 클릭해서 복사하기</div>
        <div onClick={() => clipBoardCopy(inviteUrl)} className='w-full mb-8 break-words'>
          {inviteUrl}
        </div>
      </div>
      <div className='flex justify-center'>
        {isShowStartButton && <BaseButton onClick={startMultiGame}>시작하기</BaseButton>}
      </div>
    </PlayGameLayout>
  );
};

export default MultiRoom;

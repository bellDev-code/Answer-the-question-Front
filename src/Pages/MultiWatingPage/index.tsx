import { useMultiGameIdDetailQuery } from '@Api/multiGame';
import { DYNAMIC_ROUTE_PATH } from '@Configure/constant';
import PlayGameLayout from '@Layouts/PlayGameLayout';
// import gameInfoStore from '@Store/useGameInfoStore'
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MultiWatingPage = () => {
  const navigate = useNavigate();
  const { gameId, questionIndex } = useParams();
  const { data: multiGameResult } = useMultiGameIdDetailQuery(
    gameId || '',
    Number(questionIndex) || 0,
  );

  useEffect(() => {
    if (multiGameResult?.data.isPlaying === true) {
      navigate(`${DYNAMIC_ROUTE_PATH(gameId || '', 0).MULTI_ANSWER_PAGE}`);
    }
  });

  return (
    <PlayGameLayout>
      <div>
        <div>총 참여인원 : {multiGameResult?.data.players.length}</div>
        <div>
          {multiGameResult?.data.players.map((player, index) => {
            return <div key={index}>{player.username}</div>;
          })}
        </div>
        <div>방장이 시작하기를 버튼을 누르면 시작됩니다.</div>
      </div>
    </PlayGameLayout>
  );
};

export default MultiWatingPage;

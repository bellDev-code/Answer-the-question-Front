import {
  QUESTION_LIST_QUERY_KEY,
  useGameIdDetailQuery,
  useQuestionListMutation,
} from '@Api/singleGame';
import useApiStore from '@Store/useGameInfoStore';
import usePlayerStore from '@Store/usePlayerStore';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DYNAMIC_ROUTE_PATH } from '@Configure/constant';
import PlayGameLayout from '@Layouts/PlayGameLayout';
import SelectPlayerComponent from '@Components/SelectPlayer';
import QuestionAndAnswer from '@Components/QuestionAndAnswer';
import { BaseButton } from '@Components/atom/button/BaseButton';
import { useQueryClient } from '@tanstack/react-query';
import { useDelayedVisibility } from 'src/hooks/useDelayedVisibility';
import PageSkeleton from '@Components/Skeleton/PageSkeleton';

const AnswerPage = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { gameId, questionIndex } = useParams();
  const { data: gameDetail, isLoading } = useGameIdDetailQuery(
    gameId || '',
    Number(questionIndex) || 0,
  );
  const { gameInfoResult, setApiResult } = useApiStore();

  const { selectedName } = usePlayerStore();

  const { mutate: nextQuestionMutate } = useQuestionListMutation();

  const [isShowButton, resetDelay] = useDelayedVisibility(1000);

  const handlePass = () => {
    nextQuestionMutate(
      {
        gameId: gameId || '',
        selectedPlayer: {
          username: selectedName || '',
        },
      },
      {
        onSuccess: (data) => {
          if (data.code === 200) {
            queryClient.invalidateQueries({
              queryKey: [QUESTION_LIST_QUERY_KEY],
            });
            if (typeof resetDelay === 'function') {
              resetDelay(); // resetDelay가 함수일 때만 호출합니다.
            }
            if (gameInfoResult?.currentRound !== data.data.currentRound) {
              navigate(DYNAMIC_ROUTE_PATH(data.data?._id || '', Number(questionIndex) + 1).BM_PAGE);
              setApiResult(data.data);
              return;
            } else {
              navigate(
                DYNAMIC_ROUTE_PATH(data.data?._id || '', Number(questionIndex) + 1).ANSWER_PAGE,
              );
              setApiResult(data.data);
              return;
            }
          }
        },
        onError: (error) => {
          if (error.response?.data.message === 'Game is over') {
            navigate(DYNAMIC_ROUTE_PATH(gameInfoResult?._id || '', Number(questionIndex)).END_PAGE);
          }
        },
      },
    );
  };

  const isRandom = gameDetail?.data?.playerSelectionType === 'random';

  if (isLoading) {
    return <PageSkeleton />;
  }

  return (
    <PlayGameLayout>
      <div className='flex flex-col items-center justify-between'>
        <QuestionAndAnswer
          question={gameDetail?.data?.selectedQuestion.text || ''}
          answer={gameDetail?.data?.selectedPlayer.username || ''}
        />

        {!isRandom && (
          <SelectPlayerComponent
            answer={gameDetail?.data.selectedPlayer.username || ''}
            players={
              gameDetail?.data?.players.map((player) => ({
                username: player.username,
              })) || []
            }
            className='mb-6'
          />
        )}
      </div>
      <div className='flex justify-end px-10 py-10'>
        {isShowButton && (
          <BaseButton disabled={isRandom ? false : selectedName === ''} onClick={handlePass}>
            다음 질문
          </BaseButton>
        )}
      </div>
    </PlayGameLayout>
  );
};

export default AnswerPage;

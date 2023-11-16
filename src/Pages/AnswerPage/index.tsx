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
import GuideTextComponent from '@Components/GuideText';
import { BaseButton } from '@Components/atom/button/BaseButton';
import { useQueryClient } from '@tanstack/react-query';
import { Skeleton } from '@mui/material';

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
    return (
      <div className='absolute h-screen top-0 right-0 bottom-0 left-0 z-50'>
        <Skeleton style={{ height: '100%' }} variant='rectangular' />
      </div>
    );
  }

  return (
    <PlayGameLayout>
      <div className='flex flex-col items-center justify-between'>
        <QuestionAndAnswer
          question={gameDetail?.data?.selectedQuestion.text || ''}
          answer={gameDetail?.data?.selectedPlayer.username || ''}
        />

        {!isRandom && <SelectPlayerComponent className='mb-6' />}

        <GuideTextComponent>
          <div>질문에 답변을 한 후, 다음 단계로 넘어갑니다:</div>
          <ul>
            <li>
              <strong>다음 사람 선택</strong>: 화면에서 다음 대화 상대를 선택합니다.
            </li>
            <li>
              <strong>다음 질문 버튼 클릭</strong>: 선택한 후,{'다음 질문'} 버튼을 눌러 다음 단계로
              진행합니다.
            </li>
          </ul>
        </GuideTextComponent>
      </div>
      <div className='flex justify-end px-10 py-10'>
        <BaseButton disabled={isRandom ? false : selectedName === ''} onClick={handlePass}>
          다음 질문
        </BaseButton>
      </div>
    </PlayGameLayout>
  );
};

export default AnswerPage;

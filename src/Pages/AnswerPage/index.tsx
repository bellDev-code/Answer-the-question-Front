import { useQuestionListMutation } from '@Api/singleGame';
import useApiStore from '@Store/useGameInfoStore';
import usePlayerStore from '@Store/usePlayerStore';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DYNAMIC_ROUTE_PATH } from '@Config/constant';
import PlayGameLayout from '@Layouts/PlayGameLayout';
import SelectPlayerComponent from '@Components/SelectPlayer';
import QuestionAndAnswer from '@Components/QuestionAndAnswer';
import GuideTextComponent from '@Components/GuideText';
import { BaseButton } from '@Components/atom/button/BaseButton';

const AnswerPage = () => {
  const navigate = useNavigate();

  const { gameInfoResult, setApiResult } = useApiStore();
  const { selectedName } = usePlayerStore();

  const { mutate: nextQuestionMutate } = useQuestionListMutation();

  const handlePass = () => {
    nextQuestionMutate(
      {
        gameId: gameInfoResult?._id || '',
        selectedPlayer: {
          username: selectedName || '',
        },
      },
      {
        onSuccess: (data) => {
          if (data.code === 200) {
            setApiResult(data.data);
            navigate(`${DYNAMIC_ROUTE_PATH(gameInfoResult?._id || '').SELECT_QA_PAGE}`);
          }
        },
        onError: (error) => {
          console.log(error);
          if (error.response?.data.message === 'Game is over') {
            navigate(DYNAMIC_ROUTE_PATH(gameInfoResult?._id || '').END_PAGE);
          }
        },
      },
    );
  };

  const isRandom = gameInfoResult?.playerSelectionType === 'random';

  return (
    <PlayGameLayout>
      <div className='flex flex-col items-center justify-between'>
        <QuestionAndAnswer
          question={gameInfoResult?.selectedQuestion.text || ''}
          answer={gameInfoResult?.selectedPlayer.username || ''}
        />

        {!isRandom && <SelectPlayerComponent />}

        <GuideTextComponent>
          답변을 한 뒤 다음 질문을 하기 위해 다음 사람을 선택 한 후 버튼을 눌러주세요
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

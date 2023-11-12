import React from 'react';
import { useNavigate } from 'react-router-dom';
import useSingleInputStore from '@Store/usePlayerStore';
import useGameInfoStore from '@Store/useGameInfoStore';
import { DYNAMIC_ROUTE_PATH, ROUTE_PATH } from '@Configure/constant';
import PlayGameLayout from '@Layouts/PlayGameLayout';
import QuestionAndAnswer from '@Components/QuestionAndAnswer';
import GuideTextComponent from '@Components/GuideText';
import { BaseButton } from '@Components/atom/button/BaseButton';

const SelectQApage = () => {
  const { setSelectedName } = useSingleInputStore();

  const { gameInfoResult } = useGameInfoStore();
  const navigate = useNavigate();

  const handlePass = () => {
    const goEndPage = gameInfoResult?.isOver;

    setSelectedName('');
    if (!gameInfoResult?._id) {
      navigate(ROUTE_PATH.HOME);
      return;
    }

    navigate(DYNAMIC_ROUTE_PATH(gameInfoResult?._id).ANSWER_PAGE);

    if (goEndPage) {
      navigate(`${DYNAMIC_ROUTE_PATH(gameInfoResult?._id).END_PAGE}`);
    }
  };

  const isFirstGame = gameInfoResult?.currentQuestionIndex === 0;
  const isRandom = gameInfoResult?.playerSelectionType === 'random';

  return (
    <PlayGameLayout>
      <div className='flex flex-col items-center justify-between'>
        <QuestionAndAnswer
          question={gameInfoResult?.selectedQuestion.text || ''}
          answer={gameInfoResult?.selectedPlayer.username || ''}
        />
        <GuideTextComponent>
          {!isRandom && isFirstGame
            ? '첫번째 질문은 처음 작성 된 유저가 선택 됩니다.'
            : '질문 대상자를 선택한 후 건네기 버튼을 누르고 기기를 질문 대상자에게 주세요'}

          {isRandom && '답변 후 다음 질문을 위해 다음 사람을 선택 한 후 버튼을 눌러주세요'}
        </GuideTextComponent>
      </div>

      <div className='flex justify-end px-10'>
        <BaseButton onClick={handlePass}>건네기</BaseButton>
      </div>
    </PlayGameLayout>
  );
};

export default SelectQApage;

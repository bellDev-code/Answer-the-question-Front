import { useUpdatePlayerSelectionTypeMutation } from '@Api/singleGame';
import { BaseButton } from '@Components/atom/button/BaseButton';
import { toast } from '@Components/toastify/toastify';
import { DYNAMIC_ROUTE_PATH, ROUTE_PATH } from '@Configure/constant';
import PlayGameLayout from '@Layouts/PlayGameLayout';
import gameInfoStore from '@Store/useGameInfoStore';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { convertPlayerSelectionType } from 'src/utils/convertText';

const ChangePlayerTypePage = () => {
  const navigate = useNavigate();
  const { questionIndex } = useParams();
  const { gameInfoResult, setApiResult } = gameInfoStore();
  const { mutate: updatePlayerSelectionType } = useUpdatePlayerSelectionTypeMutation();

  const selectPlayerType = (type: 'change' | 'noChange') => {
    const currentType = gameInfoResult?.playerSelectionType;
    const reverseType = currentType === 'direct' ? 'random' : 'direct';

    if (type === 'change') {
      updatePlayerSelectionType(
        {
          gameId: gameInfoResult?._id || '',
          playerSelectionType: reverseType,
        },
        {
          onSuccess: (data) => {
            if (data.code === 200) {
              setApiResult(data.data);
              navigate(DYNAMIC_ROUTE_PATH(data.data._id, Number(questionIndex)).DONATE_PAGE);
            }
          },
          onError: () => {
            toast('선정 방식 변경에 실패했습니다.');
          },
        },
      );
    } else {
      if (!gameInfoResult?._id) return navigate(ROUTE_PATH.HOME);
      navigate(DYNAMIC_ROUTE_PATH(gameInfoResult._id, Number(questionIndex)).DONATE_PAGE);
    }
  };

  return (
    <PlayGameLayout>
      <div className='sm: flex flex-col  items-center justify-center'>
        <h1 className='sm: text-2xl py-10'>모두가 답을 했어요!</h1>
        <div className='text-center break-keep'>
          <p>질문 대상자 선정 방식을 변경 할 수 있어요.</p>
          <p>
            현재는{' '}
            <strong>
              {convertPlayerSelectionType(gameInfoResult?.playerSelectionType || 'direct')}
            </strong>
            이에요.
          </p>
        </div>
        <div className='sm: flex py-10 gap-4'>
          <BaseButton
            onClick={() => selectPlayerType('change')}
            className='bg-black text-white w-24 p-4'
          >
            변경하기
          </BaseButton>
          <BaseButton
            onClick={() => selectPlayerType('noChange')}
            className='bg-black text-white w-24 p-4'
          >
            유지하기
          </BaseButton>
        </div>
      </div>
    </PlayGameLayout>
  );
};

export default ChangePlayerTypePage;

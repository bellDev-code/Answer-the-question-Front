import { useUpdatePlayerSelectionTypeMutation } from '@Api/singleGame';
import { toast } from '@Components/toastify/toastify';
import { DYNAMIC_ROUTE_PATH, ROUTE_PATH } from '@Config/constant';
import PlayGameLayout from '@Layouts/PlayGameLayout';
import gameInfoStore from '@Store/useGameInfoStore';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { convertPlayerSelectionType } from 'src/utils/convertText';

const ChangePlayerTypePage = () => {
  const navigate = useNavigate();
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
              navigate(DYNAMIC_ROUTE_PATH(data.data._id).DONATE_PAGE);
            }
          },
          onError: () => {
            toast('선정 방식 변경에 실패했습니다.');
          },
        },
      );
    } else {
      if (!gameInfoResult?._id) return navigate(ROUTE_PATH.HOME);
      navigate(DYNAMIC_ROUTE_PATH(gameInfoResult._id).DONATE_PAGE);
    }
  };

  return (
    <PlayGameLayout>
      <div className='sm: flex flex-col p-10 items-center justify-center'>
        <h1 className='sm: text-2xl py-10'>모두가 답을 했어요!</h1>
        <div>
          <p>질문 대상자 선정 방식을 변경 하시거나 다음 라운드를 진행할 수 있어요</p>
          <p>
            현재는
            <strong>
              {convertPlayerSelectionType(gameInfoResult?.playerSelectionType || 'direct')}
            </strong>
            선택했어요
          </p>
        </div>
        <div className='sm: flex py-10 gap-4'>
          <button
            onClick={() => selectPlayerType('change')}
            className='sm: bg-black text-white w-24 p-1 rounded-xl'
          >
            선정 방식을 변경할래요
          </button>
          <button
            onClick={() => selectPlayerType('noChange')}
            className='sm: bg-black text-white w-24 p-1 rounded-xl'
          >
            선정 방식을 유지할래요
          </button>
        </div>
      </div>
    </PlayGameLayout>
  );
};

export default ChangePlayerTypePage;

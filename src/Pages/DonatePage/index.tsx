import { BaseButton } from '@Components/atom/button/BaseButton';
import { DYNAMIC_ROUTE_PATH, ROUTE_PATH } from '@Configure/constant';
import PlayGameLayout from '@Layouts/PlayGameLayout';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DonateImageQr from 'src/assets/images/donate-qr.png';

const DonatePage = () => {
  const { gameId, questionIndex } = useParams();

  const navigate = useNavigate();

  const handleKeepClick = () => {
    if (!gameId) return navigate(ROUTE_PATH.HOME);

    navigate(DYNAMIC_ROUTE_PATH(gameId || '', Number(questionIndex)).ANSWER_PAGE);
  };

  return (
    <PlayGameLayout>
      <div className='flex flex-col overflow-auto h-full'>
        <div className='w-full h-auto'>
          <img className='mb-2 h-auto' src={DonateImageQr} />
          <div className='text-center m-auto mb-2'>
            <BaseButton>
              <a target='_blank' href='https://qr.kakaopay.com/Ej8NoZZ1I' rel='noreferrer'>
                후원 하기
              </a>
            </BaseButton>
          </div>
          <div>
            여러분의 후원은 <strong>취중진담</strong>을 더욱 개선하고 새로운 기능을 추가하는 데 큰
            힘이 됩니다. 후원으로 이루어지는 변화들을 함께 지켜봐 주세요.
          </div>
        </div>
        <div className='flex justify-end'>
          <BaseButton onClick={handleKeepClick}>계속하기</BaseButton>
        </div>
      </div>
    </PlayGameLayout>
  );
};

export default DonatePage;

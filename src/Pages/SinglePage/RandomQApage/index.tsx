import { useQuestionListMutation } from '@Api/singleGame';
import { ROUTE_PATH } from '@Config/constant';
import GameInfoStore from '@Store/useGameInfoStore';
import usePlayerStore from '@Store/usePlayerStore';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RandomQApage = () => {
  const { gameInfoResult, setApiResult } = GameInfoStore();
  const { randomSelectedName, setRandomSelectedName } = usePlayerStore();
  const { mutate: nextQuestionMutate } = useQuestionListMutation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await setRandomSelectedName();

      if (gameInfoResult?.data.isOver === true) {
        navigate(`${ROUTE_PATH.END_PAGE}`);
      }
    };
    fetchData();
  }, [gameInfoResult, navigate, setRandomSelectedName]);

  const handlePass = () => {
    nextQuestionMutate(gameInfoResult?.data._id || '', {
      onSuccess: (data) => {
        if (data.code !== 200) {
          alert('다음 질문을 불러오는데 실패했습니다.');
          return;
        }
        setApiResult(data);

        setRandomSelectedName();

        navigate(`${ROUTE_PATH.RANDOM_QA_PAGE}`);
      },
      onError: (error) => {
        console.log(error);
        alert('다음 질문을 불러오는데 실패했습니다.');
      },
    });
  };

  return (
    <div>
      <div className='sm: flex flex-col p-10 items-center justify-center'>
        <div className='sm: text-2xl'>{gameInfoResult?.data.selectedQuestion.text}</div>
        <div className='sm: text-xl p-10'>{randomSelectedName}</div>
      </div>
      <div className='sm: flex justify-end p-10 '>
        <button onClick={handlePass} className='sm: bg-black text-white w-20 p-2 rounded-xl'>
          다음 질문
        </button>
      </div>
    </div>
  );
};

export default RandomQApage;

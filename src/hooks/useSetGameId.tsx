import { useGameIdDetailQuery } from '@Api/singleGame';
import gameInfoStore from '@Store/useGameInfoStore';
import { useEffect } from 'react';
import { useGameId } from './useGetGameId';
import { useMultiGameIdDetailQuery } from '@Api/multiGame';
import { useParams } from 'react-router-dom';

const useSetGameId = () => {
  const { gameInfoResult, setApiResult, multiInfoResult, setMultiResult } = gameInfoStore();
  const gameId = useGameId() || gameInfoResult?._id;
  const multiGameId = useGameId() || multiInfoResult?._id;
  const { questionIndex } = useParams();

  const {
    data: gameInfo,
    isLoading,
    isError,
  } = useGameIdDetailQuery(gameId || '', Number(questionIndex));
  const { data: multiInfo } = useMultiGameIdDetailQuery(multiGameId || '', Number(questionIndex));

  useEffect(() => {
    if (!gameInfoResult?._id) {
      if (!gameInfo) return;
      setApiResult(gameInfo?.data);
    }
    if (!multiInfoResult?._id) {
      if (!multiInfo) return;
      setMultiResult(multiInfo?.data);
    }
  }, [location, gameInfoResult?._id, gameInfo, multiInfoResult?._id, multiInfo]);

  return {
    isLoading,
    isError,
  };
};

export default useSetGameId;

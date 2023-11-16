import { useGameIdDetailQuery } from '@Api/singleGame';
import gameInfoStore from '@Store/useGameInfoStore';
import { useEffect } from 'react';
import { useGameId } from './useGetGameId';
import { useMultiGameIdDerailQuery } from '@Api/multiGame';

const useSetGameId = () => {
  const { gameInfoResult, setApiResult, multiInfoResult, setMultiResult } = gameInfoStore();
  const gameId = useGameId() || gameInfoResult?._id;
  const multiGameId = useGameId() || multiInfoResult?._id;

  const { data: gameInfo, isLoading, isError } = useGameIdDetailQuery(gameId || '');
  const { data: multiInfo } = useMultiGameIdDerailQuery(multiGameId || '');

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

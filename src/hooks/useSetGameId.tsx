import { useGameIdDetailQuery } from '@Api/singleGame';
import gameInfoStore from '@Store/useGameInfoStore';
import { useEffect } from 'react';
import { useGameId } from './useGetGameId';

const useSetGameId = () => {
  const { gameInfoResult, setApiResult } = gameInfoStore();
  const gameId = useGameId() || gameInfoResult?._id;

  const { data: gameInfo, isLoading, isError } = useGameIdDetailQuery(gameId || '');

  useEffect(() => {
    if (!gameInfoResult?._id) {
      if (!gameInfo) return;
      setApiResult(gameInfo?.data);
    }
  }, [location, gameInfoResult?._id, gameInfo]);

  return {
    isLoading,
    isError,
  };
};

export default useSetGameId;

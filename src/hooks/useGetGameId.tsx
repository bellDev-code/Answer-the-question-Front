import { useParams } from 'react-router-dom';

// 커스텀 훅으로 정의
export const useGameId = () => {
  const { gameId } = useParams();

  return gameId;
};

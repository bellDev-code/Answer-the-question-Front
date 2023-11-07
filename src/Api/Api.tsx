import { client } from '@Api/client';
import { useMutation } from 'react-query';
import { IRequestGameStartData, IResponseBase, IResponseGameInfo } from './types';

export const QUESTION_LIST_QUERY_KEY = 'questionList';

// 게임 시작 API 호출 함수
const startGame = async ({
  players,
  playerSelectionType,
  category,
}: IRequestGameStartData): Promise<IResponseBase<IResponseGameInfo>> => {
  const response = await client.post(`/game/single-game/start`, {
    players,
    playerSelectionType,
    category,
  });

  return response.data;
};

export const useStartGameQuery = () => {
  return useMutation(startGame);
};

// 싱글 게임 다음 질문 가져오기
const getQuestionList = async (gameId: string) => {
  const response = await client.post(`/game/single-game/next-question`, {
    gameId,
  });

  return response.data;
};

export const useQuestionListMutation = () => {
  return useMutation(getQuestionList);
};

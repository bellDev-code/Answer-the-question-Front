import { client } from '@Api/client';
import { useMutation } from '@tanstack/react-query';
import { IRequestGameStartData, IResponseBase, IResponseGameInfo } from './types';
import { AxiosError, AxiosResponse } from 'axios';

export const QUESTION_LIST_QUERY_KEY = 'questionList';
const prefix = '/game/single-game';

// 게임 시작 API 호출 함수
const startGame = async ({
  players,
  playerSelectionType,
  category,
}: IRequestGameStartData): Promise<IResponseBase<IResponseGameInfo>> => {
  const response: AxiosResponse<
    IResponseBase<IResponseGameInfo>,
    IRequestGameStartData
  > = await client.post(`${prefix}/start`, {
    players,
    playerSelectionType,
    category,
  });

  return response.data;
};

export const useStartGameQuery = () => {
  return useMutation<IResponseBase<IResponseGameInfo>, AxiosError, IRequestGameStartData>({
    mutationFn: startGame,
  });
};

// 싱글 게임 다음 질문 가져오기
const getQuestionList = async (gameId: string) => {
  const response: AxiosResponse<IResponseBase<IResponseGameInfo>, string> = await client.post(
    `${prefix}/next-question`,
    {
      gameId,
    },
  );

  return response.data;
};

export const useQuestionListMutation = () => {
  return useMutation<IResponseBase<IResponseGameInfo>, AxiosError, string>({
    mutationFn: getQuestionList,
  });
};

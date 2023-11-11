import { client } from '@Api/client';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  IErrorResponse,
  IPlayer,
  IRequestGameStartData,
  IResponseBase,
  IResponseGameInfo,
} from './types';
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
  return useMutation<
    IResponseBase<IResponseGameInfo>,
    AxiosError<IErrorResponse>,
    IRequestGameStartData
  >({
    mutationFn: startGame,
  });
};

// 싱글 게임 다음 질문 가져오기

interface IGetQuestionListParams {
  gameId: string;
  selectedPlayer?: IPlayer;
}

const getQuestionList = async ({ gameId, selectedPlayer }: IGetQuestionListParams) => {
  const response: AxiosResponse<
    IResponseBase<IResponseGameInfo>,
    IGetQuestionListParams
  > = await client.post(`${prefix}/next-question`, {
    gameId,
    selectedPlayer,
  });

  return response.data;
};

export const useQuestionListMutation = () => {
  return useMutation<
    IResponseBase<IResponseGameInfo>,
    AxiosError<IErrorResponse>,
    IGetQuestionListParams
  >({
    mutationFn: getQuestionList,
  });
};

const getGameIdDetail = async (gameId: string) => {
  const response: AxiosResponse<
    IResponseBase<IResponseGameInfo>,
    IResponseGameInfo
  > = await client.get(`${prefix}/${gameId}`);

  return response.data;
};

export const useGameIdDetailQuery = (gameId: string) => {
  return useQuery<
    IResponseBase<IResponseGameInfo>,
    AxiosError<IErrorResponse>,
    IResponseBase<IResponseGameInfo>
  >({
    queryKey: [QUESTION_LIST_QUERY_KEY, gameId],
    queryFn: () => getGameIdDetail(gameId),
    enabled: !!gameId,
  });
};

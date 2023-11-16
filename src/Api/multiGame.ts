import { AxiosError, AxiosResponse } from 'axios';
import { IErrorResponse, IRequestMultiGameData, IResponseBase, IResponseMultiInfo } from './types';
import { client } from './client';
import { useMutation, useQuery } from '@tanstack/react-query';
// import { QUESTION_LIST_QUERY_KEY } from './singleGame';

const prefix = 'game/multi-game';

// 방 생성
const createRoom = async ({
  players,
  playerSelectionType,
  category,
}: IRequestMultiGameData): Promise<IResponseBase<IResponseMultiInfo>> => {
  const response: AxiosResponse<
    IResponseBase<IResponseMultiInfo>,
    IRequestMultiGameData
  > = await client.post(`${prefix}/create`, {
    players,
    playerSelectionType,
    category,
  });

  return response.data;
};

export const useCreateRoomQuery = () => {
  return useMutation<
    IResponseBase<IResponseMultiInfo>,
    AxiosError<IErrorResponse>,
    IRequestMultiGameData
  >({
    mutationFn: createRoom,
  });
};

const getMultiGameIdDetail = async (gameId: string, questionIndex: number) => {
  const response: AxiosResponse<
    IResponseBase<IResponseMultiInfo>,
    IResponseMultiInfo
  > = await client.get(`${prefix}/${gameId}/${questionIndex}`);

  return response.data;
};

export const useMultiGameIdDetailQuery = (gameId: string, questionNumber: number) => {
  return useQuery<
    IResponseBase<IResponseMultiInfo>,
    AxiosError<IErrorResponse>,
    IResponseBase<IResponseMultiInfo>
  >({
    queryKey: [],
    queryFn: () => getMultiGameIdDetail(gameId, questionNumber),
    enabled: !!gameId && questionNumber !== undefined,
  });
};

interface joinRoomParams {
  gameId: string;
  username: string;
}

// 방 참가
const joinRoom = async ({
  gameId,
  username,
}: joinRoomParams): Promise<IResponseBase<IResponseMultiInfo>> => {
  const response: AxiosResponse<
    IResponseBase<IResponseMultiInfo>,
    joinRoomParams
  > = await client.post(`${prefix}/join`, {
    gameId,
    username,
  });
  return response.data;
};

export const joinRoomQuery = () => {
  return useMutation<IResponseBase<IResponseMultiInfo>, AxiosError<IErrorResponse>, joinRoomParams>(
    {
      mutationFn: joinRoom,
    },
  );
};

import { AxiosError, AxiosResponse } from 'axios';
import { IErrorResponse, IRequestMultiGameData, IResponseBase, IResponseMultiInfo } from './types';
import { client } from './client';
import { useMutation, useQuery } from '@tanstack/react-query';

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

const getMultiGameIdDetail = async (gameId: string) => {
  const response: AxiosResponse<
    IResponseBase<IResponseMultiInfo>,
    IResponseMultiInfo
  > = await client.get(`${prefix}/${gameId}`);

  return response.data;
};

export const useMultiGameIdDerailQuery = (gameId: string) => {
  return useQuery<
    IResponseBase<IResponseMultiInfo>,
    AxiosError<IErrorResponse>,
    IResponseBase<IResponseMultiInfo>
  >({
    queryKey: [],
    queryFn: () => getMultiGameIdDetail(gameId),
    enabled: !!gameId,
  });
};

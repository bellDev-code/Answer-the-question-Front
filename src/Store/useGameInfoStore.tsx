import { IResponseGameInfo, IResponseBase } from '@Api/types';
import { create } from 'zustand';

interface ApiStore {
  gameInfoResult: IResponseBase<IResponseGameInfo> | null;
  setApiResult: (result: IResponseBase<IResponseGameInfo>) => void;
  currentRound: number;
  setCurrentRound: (round: number) => void;
}

const gameInfoStore = create<ApiStore>((set) => ({
  gameInfoResult: null,
  setApiResult: (result) => set({ gameInfoResult: result }),
  currentRound: 1,
  setCurrentRound: (round) => set({ currentRound: round }),
}));

export default gameInfoStore;

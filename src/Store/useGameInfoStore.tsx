import {
  IResponseGameInfo,
  IResponseBase,
  IRequestGameStartData,
  TPlatSelectionType,
} from '@Api/types';
import { create } from 'zustand';

interface ApiStore {
  gameInfoResult: IResponseBase<IResponseGameInfo> | null;
  gameTypeData: IRequestGameStartData | null;
  playerSelectionType: TPlatSelectionType | null;
  setApiResult: (result: IResponseBase<IResponseGameInfo>) => void;
  setCurrentRound: (round: number) => void;
  setPlayerSelectionType: (type: TPlatSelectionType) => void;
  currentRound: number;
}

const gameInfoStore = create<ApiStore>((set) => ({
  gameInfoResult: null,
  gameTypeData: null,
  playerSelectionType: null,
  setApiResult: (result) => set({ gameInfoResult: result }),
  setCurrentRound: (round) => set({ currentRound: round }),
  currentRound: 1,
  setPlayerSelectionType: (type) => set({ playerSelectionType: type }),
}));

export default gameInfoStore;

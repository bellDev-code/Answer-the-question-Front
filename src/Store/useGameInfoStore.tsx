import { IResponseGameInfo, IRequestGameStartData, TPlaySelectionType } from '@Api/types';
import { create } from 'zustand';

interface ApiStore {
  gameInfoResult: IResponseGameInfo | null;
  gameTypeData: IRequestGameStartData | null;
  playerSelectionType: TPlaySelectionType | null;
  currentRound: number;

  setApiResult: (result: IResponseGameInfo) => void;
  setCurrentRound: (round: number) => void;
  setPlayerSelectionType: (type: TPlaySelectionType) => void;
}

const gameInfoStore = create<ApiStore>((set) => ({
  gameInfoResult: null,
  gameTypeData: null,
  playerSelectionType: null,
  currentRound: 1,

  setApiResult: (result) => set({ gameInfoResult: result }),
  setCurrentRound: (round) => set({ currentRound: round }),
  setPlayerSelectionType: (type) => set({ playerSelectionType: type }),
}));

export default gameInfoStore;

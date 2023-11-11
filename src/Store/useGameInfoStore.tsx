import { IResponseGameInfo, IRequestGameStartData, TPlaySelectionType } from '@Api/types';
import { create } from 'zustand';

interface ApiStore {
  gameInfoResult: IResponseGameInfo | null;
  gameTypeData: IRequestGameStartData | null;
  playerSelectionType: TPlaySelectionType | null;
  setApiResult: (result: IResponseGameInfo) => void;
  setCurrentRound: (round: number) => void;
  setPlayerSelectionType: (type: TPlaySelectionType) => void;
  currentRound: number;
  isFirstGame: boolean;
}

const gameInfoStore = create<ApiStore>((set) => ({
  gameInfoResult: null,
  gameTypeData: null,
  playerSelectionType: null,
  setApiResult: (result) => set({ gameInfoResult: result }),
  setCurrentRound: (round) => set({ currentRound: round }),
  currentRound: 1,
  setPlayerSelectionType: (type) => set({ playerSelectionType: type }),
  isFirstGame: true,
}));

export default gameInfoStore;

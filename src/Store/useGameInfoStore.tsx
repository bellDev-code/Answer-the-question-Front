import { IResponseGameInfo, IResponseMultiInfo } from '@Api/types';
import { create } from 'zustand';

interface ApiStore {
  gameInfoResult: IResponseGameInfo | null;
  multiInfoResult: IResponseMultiInfo | null;

  setApiResult: (result: IResponseGameInfo) => void;
  setMultiResult: (result: IResponseMultiInfo) => void;
}

const gameInfoStore = create<ApiStore>((set) => ({
  gameInfoResult: null,
  multiInfoResult: null,

  setApiResult: (result) => set({ gameInfoResult: result }),
  setMultiResult: (result) => set({ multiInfoResult: result }),
}));

export default gameInfoStore;

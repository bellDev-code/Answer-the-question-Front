import { IResponseGameInfo } from '@Api/types';
import { create } from 'zustand';

interface ApiStore {
  gameInfoResult: IResponseGameInfo | null;

  setApiResult: (result: IResponseGameInfo) => void;
}

const gameInfoStore = create<ApiStore>((set) => ({
  gameInfoResult: null,

  setApiResult: (result) => set({ gameInfoResult: result }),
}));

export default gameInfoStore;

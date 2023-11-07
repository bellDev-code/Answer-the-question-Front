import { IResponseGameInfo, IResponseBase } from '@Api/types';
import { create } from 'zustand';

interface ApiStore {
  apiResult: IResponseBase<IResponseGameInfo> | null;
  setApiResult: (result: IResponseBase<IResponseGameInfo>) => void;
}

const useApiStore = create<ApiStore>((set) => ({
  apiResult: null,
  setApiResult: (result) => set({ apiResult: result }),
}));

export default useApiStore;

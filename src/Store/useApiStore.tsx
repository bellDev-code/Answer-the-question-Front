import { GameStartData } from '@Api/Api';
import { create } from 'zustand';

interface ApiStore {
  apiResult: GameStartData | null;
  setApiResult: (result: GameStartData) => void;
}

const useApiStore = create<ApiStore>((set) => ({
  apiResult: null,
  setApiResult: (result) => set({ apiResult: result }),
}));

export default useApiStore;

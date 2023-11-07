import { create } from 'zustand';

type AnswerSelectState = {
  selectedRoute: string;
  setSelectedRoute: (route: string) => void;
};

const useAnswerSelectStore = create<AnswerSelectState>((set) => ({
  selectedRoute: '',
  setSelectedRoute: (route) => set({ selectedRoute: route }),
}));

export default useAnswerSelectStore;

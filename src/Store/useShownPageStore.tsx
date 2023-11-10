import { create } from 'zustand';

interface useShownState {
  useShownPage: boolean;
  setUseShownPage: (value: boolean) => void;
}

export const useShownStore = create<useShownState>((set) => ({
  useShownPage: false,
  setUseShownPage: (value) => set({ useShownPage: value }),
}));

import { create } from 'zustand';

type SingleInputState = {
  username: string;
  players: { username: string }[];
  addName: () => void;
  deleteName: (index: number) => void;
  selectedName: string | null;
  setSelectedName: (name: string | null) => void;
  setUsername: (name: string) => void;
};

const usePlayerStore = create<SingleInputState>((set) => ({
  username: '',
  players: [],
  selectedName: null,
  setUsername: (name) => set({ username: name }),
  addName: () => {
    set((state) => {
      if (state.username) {
        const updatedNames = [...state.players, { username: state.username }];

        return { players: updatedNames, username: '' };
      }
      return state;
    });
  },
  deleteName: (index) => {
    set((state) => {
      const updatedNames = state.players.filter((_, i) => i !== index);
      const isButtonEnabled = updatedNames.length >= 2;

      return { players: updatedNames, isButtonEnabled };
    });
  },

  setSelectedName: (name) => set({ selectedName: name }),
}));

export default usePlayerStore;

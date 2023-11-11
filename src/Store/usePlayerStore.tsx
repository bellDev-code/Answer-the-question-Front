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

const mockObjectList = [
  { username: '카리나' },
  { username: '윈터' },
  { username: '지젤' },
  { username: '닝닝' },
];

const usePlayerStore = create<SingleInputState>((set) => ({
  username: '',
  players: mockObjectList,
  selectedName: null,
  setUsername: (name) => set({ username: name }),
  addName: () => {
    set((state) => {
      if (state.username) {
        const updatedNames = [...state.players, { username: state.username }];

        return { players: updatedNames.concat(mockObjectList), username: '' };
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

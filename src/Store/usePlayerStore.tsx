import { create } from 'zustand';

type SingleInputState = {
  username: string;
  players: { username: string }[];
  disabled: boolean;
  setNames: (players: string[]) => void;
  setName: (username: string) => void;
  setDisabled: (disabled: boolean) => void;
  addName: () => void;
  deleteName: (index: number) => void;
  viewNames: () => void;
  selectedName: string | null;
  setSelectedName: (name: string | null) => void;
  randomSelectedName: string | null;
  setRandomSelectedName: () => void;
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
  disabled: true,
  setNames: (players) => {
    const nameObjects = players.map((username) => ({ username }));
    set({ players: nameObjects });
    sessionStorage.setItem('players', JSON.stringify({ players: nameObjects }));
  },
  setName: (username) => set({ username }),
  setDisabled: (disabled) => set({ disabled }),
  addName: () => {
    set((state) => {
      if (state.username) {
        const updatedNames = [...state.players, { username: state.username }];
        sessionStorage.setItem('players', JSON.stringify({ players: updatedNames }));

        return { players: updatedNames.concat(mockObjectList), username: '' };
      }
      return state;
    });
  },
  deleteName: (index) => {
    set((state) => {
      const updatedNames = state.players.filter((_, i) => i !== index);
      sessionStorage.setItem('players', JSON.stringify({ players: updatedNames }));

      const isButtonEnabled = updatedNames.length >= 2;

      return { players: updatedNames, isButtonEnabled };
    });
  },
  viewNames: () => {
    const savedPlayers = JSON.parse(sessionStorage.getItem('players') || '[]');
    if (savedPlayers && savedPlayers.length) {
      set({ players: savedPlayers });
    }
  },
  selectedName: null,
  setSelectedName: (name) => set({ selectedName: name }),
  randomSelectedName: null,
  setRandomSelectedName: () => {
    set((state) => {
      const randomIndex = Math.floor(Math.random() * state.players.length);
      const randomName = state.players[randomIndex]?.username || null;
      return { randomSelectedName: randomName };
    });
  },
}));

export default usePlayerStore;
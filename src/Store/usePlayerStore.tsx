import { create } from 'zustand';

type SingleInputState = {
  username: string;
  players: { username: string }[];
  disabled: boolean;
  isButtonEnabled: boolean;
  setNames: (players: string[]) => void;
  setName: (username: string) => void;
  setDisabled: (disabled: boolean) => void;
  addName: () => void;
  deleteName: (index: number) => void;
  viewNames: () => void;
  selectedName: string | null;
  setSelectedName: (name: string | null) => void;
};

const useSingleInputStore = create<SingleInputState>((set) => ({
  username: '',
  players: [],
  disabled: true,
  isButtonEnabled: false,
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

        const isButtonEnabled = updatedNames.length >= 2;

        return { players: updatedNames, username: '', isButtonEnabled };
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
}));

export default useSingleInputStore;

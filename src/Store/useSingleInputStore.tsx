import { create } from 'zustand';

type SingleInputState = {
  username: string;
  players: { username: string }[];
  disabled: boolean;
  setNames: (players: string[]) => void;
  setName: (username: string) => void;
  setDisabled: (disabled: boolean) => void;
  addName: () => void;
  viewNames: () => void;
};

const useSingleInputStore = create<SingleInputState>((set) => ({
  username: '',
  players: [],
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
        return { players: updatedNames, username: '', disabled: false };
      }
      return state;
    });
  },
  viewNames: () => {
    const savedPlayers = JSON.parse(sessionStorage.getItem('players') || '[]');
    if (savedPlayers && savedPlayers.length) {
      set({ players: savedPlayers });
    }
  },
}));

export default useSingleInputStore;

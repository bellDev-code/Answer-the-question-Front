import axios from 'axios';

export type Player = {
  username: string;
};

export type GameStartData = {
  players: Player[];
  playerSelectionType: 'direct' | 'random';
  category: 'serious' | 'funny' | 'crazy';
};

// 게임 시작 API 호출 함수
export const startGame = async ({ players, playerSelectionType, category }: GameStartData) => {
  const response = await axios.post('http://localhost:8888/game/single-game/start', {
    players,
    playerSelectionType,
    category,
  });

  if (response.status !== 200) {
    throw new Error('Failed to start the game');
  }

  return response.data;
};

// 질문 데이터 가져오는 함수
export const getQuestionList = async () => {
  const response = await axios.get('http://localhost:8888/single-game/question');

  if (response.status !== 200) {
    throw new Error('Failed to fetch questions');
  }

  return response.data;
};

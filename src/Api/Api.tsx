import axios from 'axios';

export type IPlayer = {
  username: string;
};

export type GameStartData = {
  players: IPlayer[];
  playerSelectionType: 'direct' | 'random';
  category: 'serious' | 'funny' | 'crazy';
  data?: IRequestGameInfo;
};

const QuestionCategoryObject = Object.freeze({
  serious: 'serious',
  funny: 'funny',
  crazy: 'crazy',
} as const);

type TQuestionCategory = keyof typeof QuestionCategoryObject;

interface IQuestion {
  text: string;
  category: TQuestionCategory;
  createdAt: Date;
  updatedAt: Date;
}

interface IRequestGameInfo {
  _id: string;
  selectedQuestion: IQuestion;
  selectedPlayer: IPlayer;
  isOver: boolean;
  currentRound: number;
}

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

// 싱글 게임 다음 질문 가져오기
export const getQuestionList = async () => {
  const response = await axios.get('http://localhost:8888/game/single-game/next-question');

  if (response.status !== 200) {
    throw new Error('Failed to fetch questions');
  }

  return response.data;
};

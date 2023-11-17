export type IPlayer = {
  username: string;
};
export type TPlaySelectionType = 'direct' | 'random';
export type TGameCategory = 'serious' | 'funny' | 'crazy';
export type TGameType = 'single' | 'multi';
export type TPlayerSelectionType = 'direct' | 'random';

export interface IRequestGameStartData {
  players: IPlayer[];
  playerSelectionType: TPlaySelectionType;
  category: TGameCategory;
}

export interface IRequestMultiCreateData {
  playerSelectionType: TPlaySelectionType;
  category: TGameCategory;
  players: IPlayer[];
}

export interface IRequestMultiGameData {
  gameId: string;
}

export const QuestionCategoryObject = Object.freeze({
  serious: 'serious',
  funny: 'funny',
  crazy: 'crazy',
} as const);

export type TQuestionCategory = keyof typeof QuestionCategoryObject;

export interface IQuestion {
  text: string;
  category: TQuestionCategory;
  createdAt: Date;
  updatedAt: Date;
}

export interface IResponseMultiInfo {
  _id: string;
  selectedQuestion: IQuestion;
  selectedPlayer: IPlayer;
  isOver: boolean;
  currentRound: number;
  gameType: TGameType;
  playerSelectionType: TPlaySelectionType;
  players: IPlayer[];
  currentQuestionIndex: number;
  questionLength: number;
  isPlaying: boolean;
}

export interface IResponseGameInfo {
  _id: string;
  selectedQuestion: IQuestion;
  selectedPlayer: IPlayer;
  isOver: boolean;
  currentRound: number;
  gameType: TGameType;
  playerSelectionType: TPlayerSelectionType;
  players: IPlayer[];
  currentQuestionIndex: number;
  questionLength: number;
}

export interface IResponseBase<T> {
  code: number;
  message: string;
  data: T;
}

export interface IErrorResponse {
  code: number;
  message: string;
}

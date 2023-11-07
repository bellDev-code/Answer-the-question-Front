export type IPlayer = {
  username: string;
};
export type TPlatSelectionType = 'direct' | 'random';
export type TGameCategory = 'serious' | 'funny' | 'crazy';

export interface IRequestGameStartData {
  players: IPlayer[];
  playerSelectionType: TPlatSelectionType;
  category: TGameCategory;
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

export interface IResponseGameInfo {
  _id: string;
  selectedQuestion: IQuestion;
  selectedPlayer: IPlayer;
  isOver: boolean;
  currentRound: number;
}

export interface IResponseBase<T> {
  code: number;
  message: string;
  data: T;
}

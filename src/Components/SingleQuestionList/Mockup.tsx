type IQuestionProps = {
  id: string;
  question: string;
};

type Category = {
  id: string;
  name: string;
  questions: IQuestionProps[];
};

export const categories: Category[] = [
  {
    id: '1',
    name: '카테고리 1',
    questions: [
      { id: '1', question: '질문 1-1' },
      { id: '2', question: '질문 1-2' },
      { id: '3', question: '질문 1-3' },
    ],
  },
  {
    id: '2',
    name: '카테고리 2',
    questions: [
      { id: '4', question: '질문 2-1' },
      { id: '5', question: '질문 2-2' },
    ],
  },
  {
    id: '3',
    name: '카테고리 3',
    questions: [
      { id: '6', question: '질문 3-1' },
      { id: '7', question: '질문 3-2' },
      { id: '8', question: '질문 3-3' },
    ],
  },
];

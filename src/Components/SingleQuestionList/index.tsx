import React from 'react';

type IQuestionProps = {
  id: string;
  question: string;
};

type Category = {
  id: string;
  name: string;
  questions: IQuestionProps[];
};

type QuestionListProps = {
  categories: Category[];
};

const QuestionList = ({ categories }: QuestionListProps) => {
  const getRandomQuestion = () => {
    const categoryIndex = Math.floor(Math.random() * categories.length);
    const category = categories[categoryIndex];
    const questions = category.questions;
    const randomIndex = Math.floor(Math.random() * questions.length);

    return questions[randomIndex];
  };

  const randomQuestion = getRandomQuestion();

  return (
    <div>
      <div className='sm: p-10 flex items-center justify-center'>
        <p>{randomQuestion.question}</p>
      </div>
    </div>
  );
};

export default QuestionList;

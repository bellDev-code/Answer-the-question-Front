import React from 'react';

interface IProps {
  question: string;
  answer: string;
  className?: string;
}

const QuestionAndAnswer = ({ question, answer, className }: IProps) => {
  return (
    <div className={`${className} mb-6`}>
      <div className='text-xl mb-4'>{question}</div>
      <div>답변자: {answer}</div>
    </div>
  );
};

export default QuestionAndAnswer;

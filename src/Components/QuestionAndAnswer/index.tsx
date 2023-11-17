import TypewriterComponent from '@Components/TypewriterComponent';
import React from 'react';

interface IProps {
  question: string;
  answer: string;
  className?: string;
}

const QuestionAndAnswer = ({ question, answer, className }: IProps) => {
  return (
    <div className={`${className} w-full text-center mb-6`}>
      <h2 className='text-h2 text-xl mb-6'>{answer} 님!</h2>

      <div className='text-2xl mb-4 w-full'>
        {question && (
          <>
            <TypewriterComponent text={question} />
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionAndAnswer;

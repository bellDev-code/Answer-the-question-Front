import { categories } from '@Components/SingleQuestionList/Mockup';
import React, { useEffect, useState } from 'react';

const RandomPlayer = () => {
  const [randomName, setRandomName] = useState<string>('');
  const [randomQuestion, setRandomQuestion] = useState<string>('');

  useEffect(() => {
    const savedNames = JSON.parse(sessionStorage.getItem('names') || '[]');

    if (savedNames.length > 0) {
      const randomNameIndex = Math.floor(Math.random() * savedNames.length);
      setRandomName(savedNames[randomNameIndex]);
    }

    const storedRandomQuestion = sessionStorage.getItem('randomQuestion');

    const randomQuestion = storedRandomQuestion
      ? JSON.parse(storedRandomQuestion)
      : getRandomQuestion();
    setRandomQuestion(randomQuestion);
  }, []);

  const getRandomQuestion = () => {
    const categoryIndex = Math.floor(Math.random() * categories.length);
    const category = categories[categoryIndex];
    const questions = category.questions;
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex].question;
  };

  const handleNextQuestion = () => {
    const newRandomQuestion = getRandomQuestion();
    setRandomQuestion(newRandomQuestion);
    sessionStorage.setItem('randomQuestion', JSON.stringify(newRandomQuestion));

    const savedNames = JSON.parse(sessionStorage.getItem('names') || '[]');
    const newRandomNameIndex = Math.floor(Math.random() * savedNames.length);
    setRandomName(savedNames[newRandomNameIndex]);
  };

  return (
    <div className='sm: px-10 h-screen'>
      <div className='sm: flex flex-col py-5 items-center justify-between'>
        <div className='sm:w-2/4 py-10 flex items-center justify-center'>{randomQuestion}</div>
        <div className='sm: text-2xl'>답변자 {randomName}</div>
      </div>
      <div className='sm: flex justify-end px-10 py-10'>
        <button
          className='sm: bg-black text-white w-20 p-2 rounded-xl'
          onClick={handleNextQuestion}
        >
          다음 질문
        </button>
      </div>
    </div>
  );
};

export default RandomPlayer;

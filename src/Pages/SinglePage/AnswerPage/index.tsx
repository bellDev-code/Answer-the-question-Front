import React from 'react';
import AnswerComponent from '@Components/AnswerComponent';
import { useLocation } from 'react-router-dom';

const AnswerPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedName = searchParams.get('name');

  return (
    <div>
      <AnswerComponent selectedName={selectedName} />
    </div>
  );
};

export default AnswerPage;

import SinglePlayerSelect from '@Components/SinglePlayerSelect';
import SingleQuestionList from '@Components/SingleQuestionList';
import { categories } from '@Components/SingleQuestionList/Mockup';
import React from 'react';

const SelectQApage = () => {
  return (
    <>
      <SingleQuestionList categories={categories} />
      <SinglePlayerSelect />
    </>
  );
};

export default SelectQApage;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@Layouts/Home';
import SingleDevice from '@Layouts/SingleDevice';
import AnswerSelect from '@Components/AnswerSelect';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/singlePage' element={<SingleDevice />} />
        <Route path='/singlePage/answerSelect/' element={<AnswerSelect />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

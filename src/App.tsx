import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@Layouts/Home';
import SingleDevice from '@Layouts/SingleDevice';
import AnswerSelect from '@Components/AnswerSelect';
import SelectQApage from '@Pages/SinglePage/SelectQApage';
import RandomQApage from '@Pages/SinglePage/RandomQApage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/singlePage' element={<SingleDevice />} />
        <Route path='/singlePage/answerSelect' element={<AnswerSelect />} />
        <Route path='/singlePage/answerSelect/selectQApage' element={<SelectQApage />} />
        <Route path='/singlePage/answerSelect/randomQApage' element={<RandomQApage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

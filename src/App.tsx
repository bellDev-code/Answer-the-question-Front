import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@Layouts/Home';
import SingleDevice from '@Layouts/SingleDevice';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/singlePage' element={<SingleDevice />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

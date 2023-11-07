import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@Layouts/Home';
import SingleDevice from '@Layouts/SingleDevice';
import AnswerSelect from '@Components/AnswerSelect';
import SelectQApage from '@Pages/SinglePage/SelectQApage';
import RandomQApage from '@Pages/SinglePage/RandomQApage';
import AnswerPage from '@Pages/SinglePage/AnswerPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ROUTE_PATH } from './config/constant';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path={ROUTE_PATH.SINGLE_PAGE} element={<SingleDevice />} />
          <Route path='/singlePage/answerSelect' element={<AnswerSelect />} />
          <Route path='/singlePage/answerSelect/selectQApage' element={<SelectQApage />} />
          <Route path='/singlePage/answerSelect/selectQApage/AnswerPage' element={<AnswerPage />} />
          <Route path='/singlePage/answerSelect/randomQApage' element={<RandomQApage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;

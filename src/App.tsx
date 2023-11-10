import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@Layouts/Home';
import SingleDevice from '@Layouts/SingleDevice';
import AnswerSelect from '@Components/AnswerSelect';
import SelectQApage from '@Pages/SinglePage/SelectQApage';
import RandomQApage from '@Pages/SinglePage/RandomQApage';
import AnswerPage from '@Pages/SinglePage/AnswerPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ROUTE_PATH } from './Config/constant';
import EndPage from '@Pages/SinglePage/EndPage';
import DonatePage from '@Pages/SinglePage/DonatePage';
import BmPage from '@Pages/SinglePage/BmPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // get data when window is focused
      refetchOnWindowFocus: true,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path={ROUTE_PATH.SINGLE_PAGE} element={<SingleDevice />} />
          <Route path={ROUTE_PATH.ANSWER_SELECT} element={<AnswerSelect />} />
          <Route path={ROUTE_PATH.SELECT_QA_PAGE} element={<SelectQApage />} />
          <Route path={ROUTE_PATH.ANSWER_PAGE} element={<AnswerPage />} />
          <Route path={ROUTE_PATH.BM_PAGE} element={<BmPage />} />
          <Route path={ROUTE_PATH.RANDOM_QA_PAGE} element={<RandomQApage />} />
          <Route path={ROUTE_PATH.END_PAGE} element={<EndPage />} />
          <Route path={ROUTE_PATH.DONATE_PAGE} element={<DonatePage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;

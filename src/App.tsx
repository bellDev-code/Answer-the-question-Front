import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@Pages/HomePage';
import SingleDevicePage from '@Pages/SinglePage';
import AnswerSelect from '@Pages/AnswerSelectPage/AnswerSelect';
import SelectQApage from '@Pages/SelectQApage';
import RandomQApage from '@Pages/RandomQApage';
import AnswerPage from '@Pages/AnswerPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BASE_ROUTE_SINGLE_PAGE_WITH_GAME_ID, ROUTE_PATH } from './Config/constant';
import EndPage from '@Pages/EndPage';
import DonatePage from '@Pages/DonatePage';
import BmPage from '@Pages/BmPage';
import MultiDevicePage from '@Pages/MultiPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RootLayout from '@Layouts/RootLayout';

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
      <ToastContainer />
      <RootLayout>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path={`${ROUTE_PATH.SINGLE_PAGE}`} element={<SingleDevicePage />} />

            <Route path={ROUTE_PATH.MULTI_PAGE} element={<MultiDevicePage />} />

            <Route
              path={`${ROUTE_PATH.SINGLE_PAGE}${ROUTE_PATH.ANSWER_SELECT}`}
              element={<AnswerSelect />}
            />
            <Route
              path={`${BASE_ROUTE_SINGLE_PAGE_WITH_GAME_ID}${ROUTE_PATH.SELECT_QA_PAGE}`}
              element={<SelectQApage />}
            />
            <Route
              path={`${BASE_ROUTE_SINGLE_PAGE_WITH_GAME_ID}${ROUTE_PATH.ANSWER_PAGE}`}
              element={<AnswerPage />}
            />
            <Route
              path={`${BASE_ROUTE_SINGLE_PAGE_WITH_GAME_ID}${ROUTE_PATH.BM_PAGE}`}
              element={<BmPage />}
            />
            <Route
              path={`${BASE_ROUTE_SINGLE_PAGE_WITH_GAME_ID}${ROUTE_PATH.RANDOM_QA_PAGE}`}
              element={<RandomQApage />}
            />
            <Route
              path={`${BASE_ROUTE_SINGLE_PAGE_WITH_GAME_ID}${ROUTE_PATH.END_PAGE}`}
              element={<EndPage />}
            />
            <Route
              path={`${BASE_ROUTE_SINGLE_PAGE_WITH_GAME_ID}${ROUTE_PATH.DONATE_PAGE}`}
              element={<DonatePage />}
            />
            <Route path='*' element={<div>404</div>} />
          </Routes>
        </BrowserRouter>
      </RootLayout>
    </QueryClientProvider>
  );
};

export default App;

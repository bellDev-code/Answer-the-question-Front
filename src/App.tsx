import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '@Pages/HomePage';
import SingleDevicePage from '@Pages/SinglePage';
import SelectPlayerTypePage from '@Pages/SelectPlayerTypePage';
import SelectQApage from '@Pages/SelectQApage';
import AnswerPage from '@Pages/AnswerPage';
import { ROUTE_PATH } from './configure/constant';
import EndPage from '@Pages/EndPage';
import DonatePage from '@Pages/DonatePage';
import ChangePlayerTypePage from '@Pages/ChangePlayerTypePage';
import MultiDevicePage from '@Pages/MultiPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RootLayout from '@Layouts/RootLayout';
import MultiRoom from '@Pages/MultiRoom';

const BASE_ROUTE_SINGLE_PAGE_WITH_GAME_ID = `${ROUTE_PATH.SINGLE_PAGE}/:gameId`;

const App = () => {
  return (
    <>
      <ToastContainer />
      <RootLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path={`${ROUTE_PATH.SINGLE_PAGE}`} element={<SingleDevicePage />} />

          <Route path={ROUTE_PATH.MULTI_PAGE} element={<MultiDevicePage />} />

          <Route
            path={`${ROUTE_PATH.SINGLE_PAGE}${ROUTE_PATH.ANSWER_SELECT}`}
            element={<SelectPlayerTypePage />}
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
            element={<ChangePlayerTypePage />}
          />

          <Route
            path={`${BASE_ROUTE_SINGLE_PAGE_WITH_GAME_ID}${ROUTE_PATH.END_PAGE}`}
            element={<EndPage />}
          />
          <Route
            path={`${BASE_ROUTE_SINGLE_PAGE_WITH_GAME_ID}${ROUTE_PATH.DONATE_PAGE}`}
            element={<DonatePage />}
          />

          <Route path='/multiRoomPage' element={<MultiRoom />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </RootLayout>
    </>
  );
};

export default App;

export const ROUTE_PATH = Object.freeze({
  HOME: '/',
  SINGLE_PAGE: '/singlePage',
  MULTI_PAGE: '/multiPage',
  ANSWER_SELECT: '/answerSelect',
  SELECT_QA_PAGE: '/selectQApage',
  ANSWER_PAGE: '/answerPage',
  BM_PAGE: '/BmPage',
  END_PAGE: '/end',
  RANDOM_QA_PAGE: '/randomAQpage',
  DONATE_PAGE: '/donate',
  MULTI_ROOM: '/multiRoomPage',
  INVITE_PAGE: '/invite',
});

export const DYNAMIC_ROUTE_PATH = (gameId: string, questionIndex: number) => ({
  ANSWER_SELECT: `${ROUTE_PATH.SINGLE_PAGE}/${gameId}/${questionIndex}${ROUTE_PATH.ANSWER_SELECT}`,
  SELECT_QA_PAGE: `${ROUTE_PATH.SINGLE_PAGE}/${gameId}/${questionIndex}${ROUTE_PATH.SELECT_QA_PAGE}`,
  ANSWER_PAGE: `${ROUTE_PATH.SINGLE_PAGE}/${gameId}/${questionIndex}${ROUTE_PATH.ANSWER_PAGE}`,
  BM_PAGE: `${ROUTE_PATH.SINGLE_PAGE}/${gameId}/${questionIndex}${ROUTE_PATH.BM_PAGE}`,
  END_PAGE: `${ROUTE_PATH.SINGLE_PAGE}${ROUTE_PATH.END_PAGE}`,
  RANDOM_QA_PAGE: `${ROUTE_PATH.SINGLE_PAGE}/${gameId}/${questionIndex}${ROUTE_PATH.RANDOM_QA_PAGE}`,
  DONATE_PAGE: `${ROUTE_PATH.SINGLE_PAGE}/${gameId}/${questionIndex}${ROUTE_PATH.DONATE_PAGE}`,
  MULTI_ROOM: `${ROUTE_PATH.MULTI_PAGE}/${gameId}/${questionIndex}${ROUTE_PATH.MULTI_ROOM}`,
  INVITE_ROOM: `${ROUTE_PATH.MULTI_PAGE}/${gameId}/${questionIndex}${ROUTE_PATH.INVITE_PAGE}`,
});

export const SESSION_USERNAME = 'SERECTOUT_USER_NAME';

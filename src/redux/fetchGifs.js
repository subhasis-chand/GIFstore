export const FETCH_GIFS = '[GIFS] fetch';
export const SET_GIFS = '[GIFS] set';
export const SET_TIMER_ID = '[TIMER_ID] set';

export const fetchGifs = (searchKey, pageNo) => ({
  type: FETCH_GIFS,
  payload: {
    searchKey,
    pageNo
  }
});

export const setGifs = (data, pageNo) => ({
  type: SET_GIFS,
  payload: {data, pageNo}
});

export const setTimerId = (timerID) => ({
  type: SET_TIMER_ID,
  payload: timerID
});

const initialState = [];
const initialTimerId = 0;

const initialAction = {
  type: '',
  payload: []
};

const gifsReducer = (state = initialState, action = initialAction) => {
  if (action.type === SET_GIFS) {
    return action.payload.pageNo ? [...state, ...action.payload.data]: action.payload.data;
  } else {
    return state;
  }
};

export default gifsReducer;

export const timerIdReducer = (state = initialTimerId, action = initialAction) => {
  if (action.type === SET_TIMER_ID) {
    return action.payload;
  } else {
    return state;
  }
};

// Selectors
export const getGifsData = (state) => state.gifsData;
export const getTimerId = (state) => state.timerId;

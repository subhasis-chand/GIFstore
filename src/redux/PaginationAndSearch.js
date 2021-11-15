export const SET_SEARCH_KEY = '[SEARCH_KEY] set';
export const SET_PAGE_NO = '[PAGE_NO] set';
export const SET_TOTAL_NO_GIFS = '[TOTAL_NO_OF_GIFS] set';

export const setSearchKey = (searchKey) => ({
  type: SET_SEARCH_KEY,
  payload: searchKey
});

export const setPageNo = (pageNo) => ({
  type: SET_PAGE_NO,
  payload: pageNo
});

export const setTotalNoOfGifsAvailable = (totalNoOfGifs) => ({
  type: SET_TOTAL_NO_GIFS,
  payload: totalNoOfGifs
});

const initialSearchKey = process.env.REACT_APP_INITIAL_SEARCH;
const initialPageNo = 0;
const initialNoOfGifs = -1;

const initialAction = {
  type: '',
  payload: ''
};

export const searchKeyReducer = (state = initialSearchKey, action = initialAction) => {
  if (action.type === SET_SEARCH_KEY) {
    return action.payload;
  } else {
    return state;
  }
};

export const pageNoReducer = (state = initialPageNo, action = initialAction) => {
  if (action.type === SET_PAGE_NO) {
    return action.payload;
  } else {
    return state;
  }
};

export const totalNoOfGifsAvailableReducer = (state = initialNoOfGifs, action = initialAction) => {
  if (action.type === SET_TOTAL_NO_GIFS) {
    return action.payload;
  } else {
    return state;
  }
};


// Selectors
export const getSearchKey = (state) => state.searchKey;
export const getPageNo = (state) => state.pageNo;
export const getTotalNoOfGifsAvailable = (state) => state.totalNoOfGifsAvailable;


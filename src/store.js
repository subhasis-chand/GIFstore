import { configureStore } from '@reduxjs/toolkit';
import apiMiddleware from './middleware/apiMiddleware';
import fetchGifsMiddleware from './middleware/fetchGifsMiddleware';
import gifsReducer, { timerIdReducer } from "./redux/fetchGifs";
import { searchKeyReducer, pageNoReducer, totalNoOfGifsAvailableReducer } from "./redux/PaginationAndSearch";

export default configureStore({
  reducer: {
    gifsData: gifsReducer,
    searchKey: searchKeyReducer,
    pageNo: pageNoReducer,
    totalNoOfGifsAvailable: totalNoOfGifsAvailableReducer,
    timerId: timerIdReducer
  },

  middleware: [
    fetchGifsMiddleware,
    apiMiddleware
  ]
});

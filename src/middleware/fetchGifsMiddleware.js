import { FETCH_GIFS, setGifs, getTimerId, setTimerId } from '../redux/fetchGifs';
import { API_SUCCESS, apiAction } from '../redux/api';
import { setSearchKey, setPageNo, setTotalNoOfGifsAvailable } from '../redux/PaginationAndSearch';

const fetchGifsMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    next(action);
    switch (action.type) {
      case FETCH_GIFS:
        const { searchKey, pageNo } = action.payload;
        // Debouncing
        const currentTimerId = getTimerId(getState());
        clearTimeout(currentTimerId);

        const timerId = setTimeout(() => {
          dispatch(
            apiAction({
              url: `q=${searchKey}&limit=${process.env.REACT_APP_NO_OF_GIFS_IN_A_CALL}&offset=${pageNo*process.env.REACT_APP_NO_OF_GIFS_IN_A_CALL}&rating=g&lang=en`,
              feature: FETCH_GIFS,
              meta: { searchKey, pageNo }
            })
          );
        }, process.env.REACT_APP_DEBOUNCE_TIME);
        next(setTimerId(timerId));
        
        break;

      case `${FETCH_GIFS} ${API_SUCCESS}`:
        next(setGifs(action.payload.data, action.meta.pageNo));
        next(setSearchKey(action.meta.searchKey));
        next(setPageNo(action.meta.pageNo));
        next(setTotalNoOfGifsAvailable(action.payload.pagination.total_count));
        break;

      default:
      // do nothing
    }
  };

export default fetchGifsMiddleware;

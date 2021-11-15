import axios from 'axios';
import { API_REQUEST, apiSuccess, apiError } from '../redux/api';

const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (!action.type.includes(API_REQUEST)) return;

    const { url, method, data, feature, meta, responseType } = action.payload;

    const dataOrParams = ['GET'].includes(method) ? 'params' : 'data';

    const baseURL = 'https://api.giphy.com/v1/gifs/search?api_key=' + process.env.REACT_APP_GIPHY_API_KEY + '&';

    axios
      .request({
        url: encodeURI(baseURL + url),
        method,
        responseType,
        [dataOrParams]: data
      })
      .then(({ data }) => {
        dispatch(
          apiSuccess({
            response: data,
            feature,
            meta
          })
        );
      })
      .catch((error) => {
        dispatch(
          apiError({
            error,
            response: error.response,
            feature,
            meta
          })
        );
      });
  };

export default apiMiddleware;

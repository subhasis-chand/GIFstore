export const API = 'API';
export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';

export const apiSuccess = ({ response, feature, meta }) => ({
  type: `${feature} ${API_SUCCESS}`,
  payload: response,
  meta
});

export const apiError = ({ response, feature, meta }) => ({
  type: `${feature} ${API_ERROR}`,
  payload: response,
  meta
});

export const apiAction = ({
  url = '',
  method = 'GET',
  data = null,
  feature = '<>',
  responseType = 'json',
  meta = {}
}) => {
  
  return {
    type: `${feature} ${API_REQUEST}`,
    payload: {
      url,
      method,
      data,
      feature,
      meta,
      responseType,
    }
  };
};

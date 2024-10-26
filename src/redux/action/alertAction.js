export const ALERT = 'ALERT';
export const ALERT_SUCCESS = 'ALERT_SUCCESS';
export const ALERT_FAILURE = 'ALERT_FAILURE';

export const LOADING = 'LOADING';
export const LOADING_SUCCESS = 'LOADING_SUCCESS';
export const LOADING_FAILURE = 'LOADING_FAILURE';

export const alertRequest = (payload) => ({
  type: ALERT,
  payload,
});

export const alertSuccess = (payload) => ({
  type: ALERT_SUCCESS,
  payload,
});

export const alertFailure = (payload) => ({
  type: ALERT_FAILURE,
  payload,
});



/// loading
export const loadingRequest = (payload) => (
  console.log("loading",payload),
  {
  type: LOADING_SUCCESS,
  payload,
});

export const loadingSuccess = (payload) => ({
  type: LOADING_SUCCESS,
  payload,
});

export const loadingFailure = (payload) => ({
  type: LOADING_FAILURE,
  payload,
});
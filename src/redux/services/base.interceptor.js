import store from '../store';

export const interceptRequest = (requestConfig) => {
  const state = store?.getState();
  const token = state?.user?.token;
  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmYWNiZjA1ZWRiYjRjMjVlZjJiNTI0IiwiZW1haWwiOiJyYUBkZS52YSJ9LCJpYXQiOjE2OTQ0MjE5NDgsImV4cCI6MTY5NjUxOTEzMH0.6jqoMsKNXIra4_gd3xgL62KGVPxnsTzKs7giOxn-U_E'
  if (token) {
    requestConfig.headers.Authorization = token;
  }
  return requestConfig;
};

export const interceptRequestError = (error) => {
  return Promise.reject(error);
};

export const interceptResponse = (response) => {
  return response;
};

export const interceptResponseError = (error) => {
  if (error?.response?.status === 506) {
    window.localStorage.clear();
  }
  return Promise.reject(error);
};

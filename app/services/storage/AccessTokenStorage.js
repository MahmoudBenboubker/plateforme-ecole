/* eslint-disable prettier/prettier */
export const ACCESS_TOKEN_KEY = 'access_token';

const get = key => window.localStorage.getObjectHash(key);
const set = (key, item) => {
  window.localStorage.setObjectHash(key, item);
};

const getAccessToken = () => window.localStorage.getItem(ACCESS_TOKEN_KEY);
const setAccessToken = accessToken => {
  window.localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
};

const clear = () => {
  window.localStorage.removeItem(ACCESS_TOKEN_KEY);
};

export default {
  get,
  set,
  clear,
  getAccessToken,
  setAccessToken,
};

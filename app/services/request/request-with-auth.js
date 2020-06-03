/* eslint-disable prettier/prettier */
import history from 'utils/history';
import { requestClear } from './request';
import AccessTokenStorage from '../storage/AccessTokenStorage';

const requestWithAuth = (url, options) => {
  const optionsWithAuth = {
    ...options,
    headers: {
      ...options.headers,
      'Access-Control-Allow-Origin': '*',
      Authorization: AccessTokenStorage.getAccessToken(),
    },
  };
  return requestClear(url, optionsWithAuth).catch(e => {
    if (e.response && e.response.status === 401) {
      AccessTokenStorage.clear();
      history.push('/login');
    } else throw e;
  });
};

export default requestWithAuth;

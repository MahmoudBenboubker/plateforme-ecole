/* eslint-disable prettier/prettier */
import { HTTP_STATUS_ERROR, HOSTNAME } from '../../constants/constants';

function parseText(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.text();
}

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

export const checkStatus = response => {
  if (
    (response.status >= 200 && response.status < 300) ||
    response.status === HTTP_STATUS_ERROR
  ) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;

  throw error;
};

export const request = (url, options) => {
  const headers = options && options.headers ? options.headers : {};
  return fetch(`${HOSTNAME}/api${url}`, {
    ...options,
    headers: {
      'Accept-Language': 'fr',
      'Access-Control-Allow-Origin': '*',
      ...headers,
    },
  })
    .then(checkStatus)
    .then(parseText);
};

export const requestClear = (url, options) => {
  const headers = options && options.headers ? options.headers : {};
  return fetch(`${HOSTNAME}/api${url}`, {
    ...options,
    headers: {
      'Accept-Language': 'fr',
      'Access-Control-Allow-Origin': '*',
      ...headers,
    },
  })
    .then(checkStatus)
    .then(parseJSON);
};

export const requestLogin = (url, options) => {
  const headers = options && options.headers ? options.headers : {};
  return fetch(`${HOSTNAME}/api${url}`, {
    method: 'POST',
    ...options,
    headers: {
      'Accept-Language': 'fr',
      'Access-Control-Allow-Origin': '*',
      ...headers,
    },
  })
    .then(checkStatus)
    .then(parseJSON);
};

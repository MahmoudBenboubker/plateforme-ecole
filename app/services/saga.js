/* eslint-disable prettier/prettier */
import { call, put, all } from 'redux-saga/effects';
import {
  showLoaderAction,
  addToastAction,
  updateConnectedUserAction,
} from '../containers/App/actions';
import AccessTokenStorage from './storage/AccessTokenStorage';
import requestWithAuth from './request/request-with-auth';
import { TOAST_SUCCESS, TOAST_ERROR } from '../constants/constants';
import history from '../utils/history';
const MSG_DECRYPT_ERROR = 'KEY NOT VALID SESSION TIME OUT';

function* callApi(
  url,
  methodHttp,
  requestBody,
  callbackAction,
  successMsg,
  additionalCallbackArgs = [],
  formatDataFunction,
  routeCreatorFromResponse,
  noData = false,
  useLoader,
  updateUserFromResponse,
  fromRoute,
  errorAction = () => {},
) {
  try {
    let response;
    const options = {
      method: methodHttp,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (useLoader) {
      yield put(showLoaderAction(true));
    }
    const data = requestBody;
    // data = yield call(requestBody);
    if (requestBody) {
      response = yield requestWithAuth(url, { ...options, body: data });
    } else {
      response = yield requestWithAuth(url, options);
    }
    const dataResp = response;
    response = {};
    response.data = dataResp;
    if (response && response.data !== null && response.data !== undefined) {
      const formattedData = formatDataFunction
        ? formatDataFunction(response.data)
        : response.data;

      if (url === '/login') {
        AccessTokenStorage.clear();
        AccessTokenStorage.setAccessToken(response.data);
      }

      if (callbackAction) {
        const iterableArgs =
          additionalCallbackArgs == null ? [] : additionalCallbackArgs;
        if (noData) {
          yield put(callbackAction(...iterableArgs));
        } else {
          yield put(callbackAction(formattedData, ...iterableArgs));
        }
      }
      if (successMsg) {
        yield put(addToastAction(successMsg, TOAST_SUCCESS));
      }
      if (updateUserFromResponse) {
        yield put(
          updateConnectedUserAction(updateUserFromResponse(response.data)),
        );
      }
      if (routeCreatorFromResponse) {
        if (fromRoute) {
          history.push({
            pathname: routeCreatorFromResponse(response.data),
            state: {
              from: history.location.pathname,
            },
          });
        } else {
          history.push(routeCreatorFromResponse(response.data));
        }
      }
    } else if (response && response.errors && response.errors.length > 0) {
      yield all(
        response.errors.map(err =>
          put(addToastAction(err.message, TOAST_ERROR)),
        ),
      );
    } else if (response && response.message && response.message.length > 0) {
      yield put(addToastAction(response.message, TOAST_ERROR));
    }
    yield put(showLoaderAction(false));
  } catch (e) {
    if (MSG_DECRYPT_ERROR === e.message) {
      yield put(showLoaderAction(false));
      AccessTokenStorage.clear();
      history.push({
        pathname: '/',
        state: {
          from: history.location.pathname,
        },
      });
    } else {
      yield put(addToastAction('Erreur survenue', TOAST_ERROR));
      console.error(e);
      yield put(showLoaderAction(false));
      if (errorAction) {
        yield put(errorAction());
      }
    }
  }
}

export { callApi };

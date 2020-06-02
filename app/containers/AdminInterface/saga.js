import { takeLatest, all, call } from 'redux-saga/effects';

import { FETCH_CLASSES } from './constants';
import { callApi } from '../../services/saga';
import { storeClassesById } from './actions';

function* fetchClassesSaga(action) {
  try {
    yield call(
      callApi,
      `/classes/${action.id}`,
      'GET',
      null,
      storeClassesById,
      null,
      null,
      null,
      null,
      null,
      true,
      null,
    );
  } catch (e) {
    console.error(e);
  }
}
function* watchFetchClasses() {
  yield takeLatest(FETCH_CLASSES, fetchClassesSaga);
}
// Individual exports for testing
export default function* adminInterfaceSaga() {
  // See example in containers/HomePage/saga.js
  yield all([watchFetchClasses()]);
}

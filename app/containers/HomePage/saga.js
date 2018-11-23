/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_DATA } from './constants';
import { dataLoaded, dataLoadError } from './actions';

/**
 * Github repos request/response handler
 */
export function* getData() {
  const requestURL = 'http://localhost:4000/graphql';
  const header = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: '{ homePage { heading subheading heroImageUrl } }' }),
  };

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, header);
    yield put(dataLoaded(response.data.homePage));
  } catch (err) {
    yield put(dataLoadError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getHome() {
  yield takeLatest(LOAD_DATA, getData);
}

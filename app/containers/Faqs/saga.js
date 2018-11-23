/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest, select } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_TITLES, LOAD_FAQ } from './constants';
import { titlesLoaded, titlesLoadError, faqLoaded, faqLoadError } from './actions';
import { makeSelectFaqId } from './selectors';

export function* getTitles() {
  const requestURL = 'http://localhost:4000/graphql';
  const header = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: '{ faqs { title } }' }),
  };

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, header);
    yield put(titlesLoaded(response.data.faqs));
  } catch (err) {
    yield put(titlesLoadError(err));
  }
}

export function* getFaq() {
  const faqId = yield select(makeSelectFaqId());
  const requestURL = 'http://localhost:4000/graphql';
  const header = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: `{ faq(id: ${faqId}) { title body } }` }),
  };

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, header);
    yield put(faqLoaded(response.data.faq));
  } catch (err) {
    yield put(faqLoadError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getFaqs() {
  yield takeLatest(LOAD_TITLES, getTitles);
  yield takeLatest(LOAD_FAQ, getFaq);
}

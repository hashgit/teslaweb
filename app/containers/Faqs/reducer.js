import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  LOAD_TITLES_SUCCESS,
  LOAD_TITLES,
  LOAD_TITLES_ERROR,
  LOAD_FAQ,
  LOAD_FAQ_SUCCESS,
  LOAD_FAQ_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  faqs: null,
  faqId: null,
  faq: null,
});

function faqsReducer(state = initialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return action.payload.pathname.startsWith('/faqs') ? state : state
        .set('faqId', null)
        .set('faq', null);
    case LOAD_TITLES:
      return state
        .set('loading', true)
        .set('error', false)
        .set('faqs', null);
    case LOAD_TITLES_SUCCESS:
      return state
        .set('faqs', fromJS(action.faqs))
        .set('error', false)
        .set('loading', false);
    case LOAD_TITLES_ERROR:
      return state
        .set('error', action.err)
        .set('faqs', null)
        .set('loading', false);
    case LOAD_FAQ:
      return state
        .set('loading', true)
        .set('error', false)
        .set('faq', null)
        .set('faqId', action.id);
    case LOAD_FAQ_ERROR:
      return state
        .set('loading', false)
        .set('error', action.err)
        .set('faq', null);
    case LOAD_FAQ_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('faq', fromJS(action.faq));
    default:
      return state;
  }
}

export default faqsReducer;

import { fromJS } from 'immutable';

import {
  LOAD_DATA_SUCCESS,
  LOAD_DATA,
  LOAD_DATA_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  data: null,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA:
      return state
        .set('loading', true)
        .set('error', false)
        .set('data', null);
    case LOAD_DATA_SUCCESS:
      return state
        .set('data', fromJS(action.data))
        .set('error', false)
        .set('loading', false);
    case LOAD_DATA_ERROR:
      return state
        .set('error', action.err)
        .set('data', null)
        .set('loading', false);
    default:
      return state;
  }
}

export default homeReducer;

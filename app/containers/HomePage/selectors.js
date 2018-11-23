/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectLoading = () => createSelector(
  selectHome,
  (homeState) => homeState.get('loading')
);

const makeSelectData = () => createSelector(
  selectHome,
  (homeState) => {
    const data = homeState.get('data');
    return data ? data.toJS() : null;
  }
);

export {
  selectHome,
  makeSelectLoading,
  makeSelectData,
};

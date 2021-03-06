import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectLoading, makeSelectData } from './selectors';
import { loadData } from './actions';
import reducer from './reducer';
import HomePage from './HomePage';
import saga from './saga';

const mapDispatchToProps = (dispatch) => ({
  onLoad: () => dispatch(loadData()),
});

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  data: makeSelectData(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'home', saga });
const withReducer = injectReducer({ key: 'home', reducer });

export default compose(withReducer, withSaga, withConnect)(HomePage);
export { mapDispatchToProps };

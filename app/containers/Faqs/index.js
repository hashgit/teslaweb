import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectLoading, makeSelectFaqs, makeSelectFaq } from './selectors';
import { loadTitles, loadFaq } from './actions';
import reducer from './reducer';
import HomePage from './Faqs';
import saga from './saga';

const mapDispatchToProps = (dispatch) => ({
  onLoad: () => dispatch(loadTitles()),
  loadFaq: (id) => dispatch(loadFaq(id)),
});

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  faqs: makeSelectFaqs(),
  faq: makeSelectFaq(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'faqs', saga });
const withReducer = injectReducer({ key: 'faqs', reducer });

export default compose(withReducer, withSaga, withConnect)(HomePage);
export { mapDispatchToProps };

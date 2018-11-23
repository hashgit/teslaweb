/*
 * Faqs
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import FaqList from 'components/FaqList';
import Faq from 'components/Faq';
import './style.scss';

export default class Faqs extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    const { match: { params: { id } } } = this.props;
    if (id) {
      this.props.loadFaq(id);
    }

    this.props.onLoad();
  }

  componentWillReceiveProps(newProps) {
    const { match: { params: { id } } } = newProps;
    const { match: { params: { id: faqId } } } = this.props;
    if (id && faqId !== id) {
      this.props.loadFaq(id);
    }
  }

  render() {
    const { faqs, faq } = this.props;
    return (
      <div className="faqs-page">
        <Helmet>
          <title>Faqs Page</title>
          <meta
            name="description"
            content="Faqs"
          />
        </Helmet>
        <h1>Faqs</h1>
        <div className="faq-container">
          <Faq faq={faq} />
          <FaqList faqs={faqs} />
        </div>
      </div>
    );
  }
}

Faqs.propTypes = {
  onLoad: PropTypes.func.isRequired,
  faqs: PropTypes.array,
  loadFaq: PropTypes.func.isRequired,
  faq: PropTypes.object,
  match: PropTypes.object.isRequired,
};

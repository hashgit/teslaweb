import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

class FaqList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  shouldComponentUpdate(nextProps) {
    return !this.props.faqs || !nextProps.faqs || this.props.faqs.length !== nextProps.faqs.length;
  }

  render() {
    const { faqs } = this.props;
    return faqs ?
      (
        <div className="faq-titles">
          <ul>
            { faqs.map((faq, i) =>
              (
                <li key={faq.title}>
                  <Link to={`/faqs/${i}`}>{faq.title}</Link>
                </li>
              )) }
          </ul>
        </div>
      )
      : null;
  }
}

FaqList.propTypes = {
  faqs: PropTypes.array,
};

export default FaqList;

import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import './style.scss';

class Faq extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { faq } = this.props;
    return (
      <div className="faq">
        {
          faq ?
            <div>
              <div>
                { faq.title }
              </div>
              <div contentEditable="true" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(faq.body) }}></div>
            </div>
            : null
        }
      </div>
    );
  }
}

Faq.propTypes = {
  faq: PropTypes.object,
};

export default Faq;

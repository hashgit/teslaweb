/**
 * Faqs selectors
 */

import { createSelector } from 'reselect';

const selectFaqs = (state) => state.get('faqs');

const makeSelectLoading = () => createSelector(
  selectFaqs,
  (faqState) => faqState.get('loading')
);

const makeSelectFaqs = () => createSelector(
  selectFaqs,
  (faqState) => {
    const faqs = faqState.get('faqs');
    return faqs ? faqs.toJS() : null;
  }
);

const makeSelectFaq = () => createSelector(
  selectFaqs,
  (faqState) => {
    const faq = faqState.get('faq');
    return faq ? faq.toJS() : null;
  }
);

const makeSelectFaqId = () => createSelector(
  selectFaqs,
  (faqState) => faqState.get('faqId')
);

export {
  selectFaqs,
  makeSelectLoading,
  makeSelectFaqs,
  makeSelectFaqId,
  makeSelectFaq,
};

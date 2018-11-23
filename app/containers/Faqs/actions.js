import {
  LOAD_TITLES,
  LOAD_TITLES_SUCCESS,
  LOAD_TITLES_ERROR,
  LOAD_FAQ,
  LOAD_FAQ_SUCCESS,
  LOAD_FAQ_ERROR,
} from './constants';

export function loadTitles() {
  return {
    type: LOAD_TITLES,
  };
}

export function loadFaq(id) {
  return {
    type: LOAD_FAQ,
    id,
  };
}

export function titlesLoaded(faqs) {
  return {
    type: LOAD_TITLES_SUCCESS,
    faqs
  };
}

export function titlesLoadError(err) {
  return {
    type: LOAD_TITLES_ERROR,
    err
  };
}

export function faqLoaded(faq) {
  return {
    type: LOAD_FAQ_SUCCESS,
    faq
  };
}

export function faqLoadError(err) {
  return {
    type: LOAD_FAQ_ERROR,
    err
  };
}

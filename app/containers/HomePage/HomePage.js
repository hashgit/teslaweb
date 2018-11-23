/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { data } = this.props;
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A home page" />
        </Helmet>
        <div className="home-page">
          { data ?
            <section className="centered">
              <h2>{data.heading}</h2>
              <p>{data.subheading}</p>
              <hr />
              <img className="hero" src={`http://localhost:4000${data.heroImageUrl}`} alt="hero" />
              <hr />
              <Link to="/faqs">Learn more...</Link>
            </section>
            : null }
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  onLoad: PropTypes.func.isRequired,
  data: PropTypes.object,
};

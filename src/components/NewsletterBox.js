import React from "react";
import PropTypes from 'prop-types';

import './../css/Raleway-font.css';
import './../css/NewsletterBox.css';
import '../../node_modules/font-awesome/css/font-awesome.css';

class NewsletterBox extends React.Component {
  render() {
    return (
      <div className="newsletter newsletter-box newsletter-border">
        <div className="mb-30">
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </div>
        <input className="form-control placeholder" type="text" placeholder="Email address" name="email1" value=""/>
          <div className="clear">
            <button type="submit" name="submitbtn" className="button button-border mt-20 form-button">{this.props.bottonText}</button>
          </div>
        </div>
      );
    }
  }

  NewsletterBox.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    bottonText: PropTypes.string,
  };

  export default NewsletterBox;

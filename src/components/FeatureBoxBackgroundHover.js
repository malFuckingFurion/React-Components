import React from "react";
import PropTypes from 'prop-types';

import './../css/Raleway-font.css';
import './../css/themify-icons.css';
import './../css/FeatureBoxBackgroundHover.css';
import '../../node_modules/font-awesome/css/font-awesome.css';

class FeatureBoxBackgroundHover extends React.Component {
  render() {
    return (
      <div className="feature-box">
        <div className="feature-box-content">
        <i className={this.props.class}></i>
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
        </div>
        <a href={this.props.href}>Read more</a>
        <div className="feature-box-img"  style={{backgroundImage:`url(require("../images/users-parallax.png"))`}} ></div>
        <span className="feature-border"></span>
      </div>
    );
  }
}

FeatureBoxBackgroundHover.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  class: PropTypes.string,// <<<< SEE themify-icons(in Google) for customization
  href: PropTypes.string
};

export default FeatureBoxBackgroundHover;

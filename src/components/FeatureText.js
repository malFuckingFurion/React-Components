import React from "react";
import PropTypes from 'prop-types';

import './../css/Raleway-font.css';
import './../css/FeatureText.css';
import './../css/themify-icons.css';
import '../../node_modules/font-awesome/css/font-awesome.css';

class FeatureText extends React.Component {
  render() {
    return (
      <div className="section-feature-text feature-text left-icon mb-40">
        <div className="feature-icon">
          <span className={this.props.class} aria-hidden="true" />
        </div>
        <div className="feature-info">
          <h5>{this.props.title}</h5>
          <p>
            {this.props.description}
          </p>
          <a className="button icon-color" href={this.props.href}>
            Read more <i className="fa fa-angle-right" />
          </a>
        </div>
      </div>
    );
  }
}

FeatureText.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
  class: PropTypes.string // <<<< SEE themify-icons(in Google) for customization
};

export default FeatureText;

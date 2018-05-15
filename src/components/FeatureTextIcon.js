import React from "react";
import PropTypes from 'prop-types';

import './../css/FeatureTextIcon.css';
import './../css/themify-icons.css';
import '../../node_modules/font-awesome/css/font-awesome.css';

class FeatureTextIcon extends React.Component {
  render() {
    return (
      <div className="feature-content">
        <div className="feature-text left-icon mb-30">
          <div className="feature-icon">
            <span className={this.props.class} aria-hidden="true" />
          </div>
          <div className="feature-info">
            <h5>{this.props.title}</h5>

          </div>
          <p className="feature-p">
            {this.props.description}
          </p>
        </div>
      </div>
    );
  }
}

FeatureTextIcon.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
  class: PropTypes.string // <<<< SEE themify-icons(in Google) for customization
};

export default FeatureTextIcon;

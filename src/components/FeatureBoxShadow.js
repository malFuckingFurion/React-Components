import React from "react";
import PropTypes from 'prop-types';

import './../css/Raleway-font.css';
import './../css/themify-icons.css';
import './../css/FeatureBoxShadow.css';
import '../../node_modules/font-awesome/css/font-awesome.css';

class FeatureBoxShadow extends React.Component {
  render() {
    return (
      <div className="feature-text box-shadow text-center mb-30">
        <div className="feature-icon">
          <span className={this.props.class}></span>
        </div>
        <div className="feature-info">
          <h5 className="text-back text-center mr-b">{this.props.title}</h5>
          <p className="text-center">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

FeatureBoxShadow.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  class: PropTypes.string // <<<< SEE themify-icons(in Google) for customization
};

export default FeatureBoxShadow;

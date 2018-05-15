import React from "react";
import PropTypes from 'prop-types';

import './../css/TextBoxWithButtonLeft.css';
import './../css/Raleway-font.css';

class TextBoxWithButtonRight extends React.Component {
  render() {
    return (
      <div className="section-title-2 mb-20 grey-bk text-right">
        <span className="text-box-button-left-span">{this.props.span}</span>
        <h3 className="text-box-button-left-h2">{this.props.title}</h3>
        <p className="text-box-button-left-p">{this.props.text}</p>
        <button className="large-blue-button" onClick={this.handleClick}>
          REGISTRATION
        </button>
      </div>
    );
  }
}

TextBoxWithButtonRight.propTypes = {
  span: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default TextBoxWithButtonRight;

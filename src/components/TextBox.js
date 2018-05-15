import React from "react";
import PropTypes from 'prop-types';

import './../css/TextBox.css';
import './../css/Raleway-font.css';

class TextBox extends React.Component {
  render() {
    return (
      <div className="section-title mb-20">
        <span className="text-box-span">{this.props.span}</span>
        <h2 className="text-box-h2">{this.props.title}</h2>
        <p className="text-box-p">{this.props.text}</p>
        <p className="text-box-second-p">{this.props.subtext}</p>
      </div>
    );
  }
}

TextBox.propTypes = {
  span: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  subtext: PropTypes.string
};

export default TextBox;

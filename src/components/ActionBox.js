import React from "react";
import PropTypes from 'prop-types';

import './../css/Raleway-font.css';
import './../css/ActionBox.css';
import '../../node_modules/font-awesome/css/font-awesome.css';

class ActionBox extends React.Component {
  render() {
    return (
      <div className="action-box action-box-border">
        <div className="action-box-text">
         <h3>{this.props.title}</h3>
         <p>{this.props.description}</p>
         </div>
         <div className="action-box-button">
        <a className="button button-hover-black" href={this.props.href}>
          <span>{this.props.buttonText}</span>
          <i className={this.props.class}></i>
       </a>
       </div>
    </div>
    );
  }
}

ActionBox.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  class: PropTypes.string,// <<<< SEE themify-icons(in Google) for customization
  href: PropTypes.string,
  buttonText: PropTypes.string
};

export default ActionBox;

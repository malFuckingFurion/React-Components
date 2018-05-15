import React from "react";
import PropTypes from 'prop-types';

import './../css/Raleway-font.css';
import './../css/BaseNavAlignmentCenter.css';
import '../../node_modules/font-awesome/css/font-awesome.css';

class BaseNavAlignmentCenter extends React.Component {
  render() {
    return (

      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href={this.props.hrefOne}>{this.props.titleOne}<i className="nav-icons fa fa-angle-down fa-indicator"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={this.props.hrefOne}>{this.props.titleTwo}<i className="nav-icons fa fa-angle-down fa-indicator"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={this.props.hrefOne}>{this.props.titleThree}<i className="nav-icons fa fa-angle-down fa-indicator"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={this.props.hrefOne}>{this.props.titleFour}<i className="nav-icons fa fa-angle-down fa-indicator"></i></a>
        </li>
      </ul>
    );
  }
}

BaseNavAlignmentCenter.propTypes = {
  hrefOne: PropTypes.string,
  hrefTwo: PropTypes.string,
  hrefThree: PropTypes.string,
  hrefFour: PropTypes.string,
  titleOne: PropTypes.string,
  titleTwo: PropTypes.string,
  titleThree: PropTypes.string,
  titleFour: PropTypes.string
};

export default BaseNavAlignmentCenter;

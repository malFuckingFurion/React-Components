import React from "react";
import PropTypes from 'prop-types';

import './../css/Raleway-font.css';
import './../css/ListIconWithClass.css';
import '../../node_modules/font-awesome/css/font-awesome.css';

class ListIconWithClass extends React.Component {
  render() {
    return (
      <ul className="list list-arrow">
       <li className={this.props.class}> {this.props.liOne}</li>
       <li className={this.props.class}> {this.props.liTwo}</li>
       <li className={this.props.class}> {this.props.liThree}</li>
       <li className={this.props.class}> {this.props.liFour}</li>
       <li className={this.props.class}> {this.props.liFive}</li>
     </ul>
    );
  }
}

ListIconWithClass.propTypes = {
  liOne: PropTypes.string,
  liTwo: PropTypes.string,
  liThree: PropTypes.string,
  liFour: PropTypes.string,
  liFive: PropTypes.string,
  class: PropTypes.string // for customization use FontAwesome classes
};

export default ListIconWithClass;

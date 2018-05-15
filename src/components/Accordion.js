import React from "react";
import PropTypes from 'prop-types';

import './../css/Accordion.css';
import './../css/Raleway-font.css';
import 'react-accessible-accordion/dist/fancy-example.css';

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';

class Accoridon extends React.Component {
  render() {
    return (
      <div className="/">
      <Accordion>
        <AccordionItem>
          <AccordionItemTitle >
            <h3 className="accordion-h3">{this.props.accTitleOne}</h3>
          </AccordionItemTitle>
          <AccordionItemBody>
            <p className="accordion-text">{this.props.accTextOne}</p>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle>
            <h3 className="accordion-h3">{this.props.accTitleTwo}</h3>
          </AccordionItemTitle>
          <AccordionItemBody>
            <p className="accordion-text">{this.props.accTextTwo}</p>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle>
            <h3 className="accordion-h3">{this.props.accTitleThree}</h3>
          </AccordionItemTitle>
          <AccordionItemBody>
            <p className="accordion-text">{this.props.accTextThree}</p>
          </AccordionItemBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
}

Accoridon.propTypes = {
  accTitleOne: PropTypes.string,
  accTitleTwo: PropTypes.string,
  accTitleThree: PropTypes.string,
  accTextOne: PropTypes.string,
  accTextTwo: PropTypes.string,
  accTextThree: PropTypes.string
};

export default Accoridon;

import React, { Component } from 'react';
import FeatureText from "./components/FeatureText";
import TextBox from "./components/TextBox";
import FeatureTextIcon from "./components/FeatureTextIcon";
import TextBoxWithButtonLeft from "./components/TextBoxWithButtonLeft";
import TextBoxWithButtonRight from "./components/TextBoxWithButtonRight";
import Accordion from "./components/Accordion";
import FeatureBoxShadow from "./components/FeatureBoxShadow";
import FeatureBoxBackgroundHover from "./components/FeatureBoxBackgroundHover";
import ActionBox from "./components/ActionBox";
import ActionBoxSmall from "./components/ActionBoxSmall";
import ListIconWithClass from "./components/ListIconWithClass";
import BaseNavAlignmentCenter from "./components/BaseNavAlignmentCenter";
import NewsletterBox from "./components/NewsletterBox";
import Pagination from "./components/Pagination";
import "./index.css";

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1>React Components</h1>
        <div className="col-6">
          <br/>
          <h2>Feature Text</h2>
          <br/>
          <FeatureText
            title="Lorem ipsum"
            description="Responsive Lorem Ipsum used since the 1500s is reproduced below for those.."
            href="http://google.bg"
            class="ti-desktop theme-color"
          />
          <br/>
          <h2>Text Box</h2>
          <br/>
          <TextBox
            span="Lorem ipsum?"
            title="Page layouts"
            text="Page layouts options Webster has many page layouts options to choose from. Change as per your requirement layouts options to choose from"
            subtext="Change as per your requirement"
          />
          <br/>
          <h2>Feature Text Icon</h2>
          <br/>
          <div className="col-6">
            <FeatureTextIcon
              title="Lorem ipsum"
              description="Page layouts options Webster has many page layouts options to choose from. Change as per your requirement..."
              class="ti-eye theme-color"
            />
            <FeatureTextIcon
              title="Lorem ipsum"
              description="Page layouts options Webster has many page layouts options to choose from. Change as per your requirement..."
              class="ti-headphone theme-color"
            />
          </div>
          <br/>
          <h2>Text Box With Botton Left Align</h2>
          <br/>
          <TextBoxWithButtonLeft
            span="Lorem ipsum"
            title="Page layouts"
            text="Page layouts options Webster has many page layouts options to choose from.
            Page layouts options Webster has many page layouts options to choose from. Page layouts options Webster has many page layouts options to choose from."
          />
          <br/>
          <h2>Text Box With Botton Right Align</h2>
          <br/>
          <TextBoxWithButtonRight
            span="Lorem ipsum"
            title="Page layouts"
            text="Page layouts options Webster has many page layouts options to choose from.
            Page layouts options Webster has many page layouts options to choose from. Page layouts options Webster has many page layouts options to choose from."
          />
          <br/>
          <h2>Accordion</h2>
          <br/>
          <Accordion
            accTitleOne="01. Въпрос номер 1, най-важен по значение?"
            accTitleTwo="02. Въпрос номер 2, който е неактивен."
            accTitleThree="03. Въпрос номер 3, който е неактивен."
            accTextOne="Активен текст с разяснение на въпроса.Прочети първо лорем ипсум,е е просто случаен текст. Неговите корени са в класическата Латинска литература. Прочети първо лорем ипсум,е е просто случаен текст. Неговите корени са в класическата Латинска литература. "
            accTextTwo="Неактивен текст с разяснение на въпроса.Прочети първо лорем ипсум,е е просто случаен текст. Неговите корени са в класическата Латинска литература."
            accTextThree="Неактивен текст с разяснение на въпроса.Прочети първо лорем ипсум,е е просто случаен текст. Неговите корени са в класическата Латинска литература."
          />
          <br/>
          <h2>Feature Box Shadow</h2>
          <br/>
          <div className="col-6">
            <FeatureBoxShadow
              class="ti-layers-alt"
              title="Many Style Available"
              description="Dolor sit consectetur conseqt quibusdam, enim expedita sed quia nesciuntDolor sit consectetur conseqt quibusdam, enim expedita sed quia nesciunt"
            />
            <br/>
            <h2>Feature Box Background Hover</h2>
            <br/>
            <FeatureBoxBackgroundHover
              class="fa fa-paint-brush blue"
              title="Unique &amp; Clean"
              description="It's always nice to browse some nice and clean websites. It is a good way to get inspiration for future projects"
              href="/"
            />
          </div>
        </div>
        <br/>
        <h2>Action Box</h2>
        <br/>
        <ActionBox
          title="Webster: The most powerful template ever on the market"
          class="fa fa-download"
          description="Create tailor-cut websites with the exclusive multi-purpose responsive template along with powerful features."
          href="/"
          buttonText="Button text"
        />
        <br/>
        <h2>Action Box Small</h2>
        <br/>
        <div className="col-6">
          <ActionBoxSmall
            title="Webster: The most powerful template ever on the market"
            class="fa fa-download"
            description="Create tailor-cut websites with the exclusive multi-purpose responsive template along with powerful features."
            href="/"
            buttonText="Button text"
          />
          <br/>
          <h2>List Icon With Class</h2>
          <br/>
          <div className="col-6">
            <ListIconWithClass
              class="fa fa-angle-right"
              liOne="Change Oil and Filter"
              liTwo="Brake Pads Replacement"
              liThree="Timing Belt Replacement"
              liFour="Pre-purchase Car Inspection"
              liFive="Starter Replacement"
            />
          </div>
        </div>
        <br/>
        <h2>Base Nav Alignment Center</h2>
        <br/>
        <BaseNavAlignmentCenter
          hrefOne="/"
          hrefTwo="/"
          hrefThree="/"
          hrefFour="/"
          titleOne="Home Active"
          titleTwo="Link"
          titleThree="Link"
          titleFour="Link"
        />
        <br/>
        <h2>NewsletterBox</h2>
        <br/>
        <div className="col-6">
          <NewsletterBox
            title="Newsletter"
            description="Vel fugit quibusdam quidem animi deserunt aspernatur ab, minus placeat quaerat voluptatem!"
            bottonText="Get notified"
          />
        </div>
        <br/>
        <h2>Pagination</h2>
        <br/>
        <Pagination/>
      </div>

    );
  }
}

export default App;

import React from "react";
import Collapse, { Panel } from "rc-collapse";
import defaultCss from "rc-collapse/assets/index.css";
import customCss from "../styles/collapse.css";
import { Box, Flex } from "rebass";
import { title, questions } from "../content/faq";
import colors from "../styles/colors.json";
import { Element } from "react-scroll";

export default class Questions extends React.Component {
  state = {
    accordion: true,
    activeKey: null,
    questions: questions
  };

  onChange = activeKey => {
    this.setState({
      activeKey
    });
  };

  render() {
    let state = this.state;
    let shift = questions.length / 3;

    let cols = [];

    for (let i = 0; i < questions.length; i += shift) {
      cols.push(
        <Flex flexWrap="wrap" flexDirection="column" width={[1, 1 / 2, 1 / 3]}>
          {questions.slice(i, i + shift).map(({ key, question, answer }) => (
            <Collapse
              key={key}
              accordion={false}
              onChange={this.onChange}
              activeKey={state.activeKey}
            >
              <Panel
                className="faqCard"
                key={key}
                header={question}
                headerClass="faqCardTitle"
              >
                <p>{answer}</p>
              </Panel>
            </Collapse>
          ))}
          <style jsx global>
            {defaultCss}
          </style>
          <style jsx global>
            {customCss}
          </style>
        </Flex>
      );
    }

    return (
      <Element name="faq">
        <Flex mt={4} justifyContent="center">
          <h2 className="title">{title}</h2>
        </Flex>
        <Flex flexDirection="row" flexWrap="wrap" mt={2} mb={5} pt={2}>
          {cols}
        </Flex>
        <style jsx>
          {`
            .title {
              display: inline-block;
              text-transform: uppercase;
              background: ${colors["dark"]};
              border-top: 4px solid rgba(255, 255, 255, 1) !important;
              border-left: 4px solid rgba(255, 255, 255, 1) !important;
              border: 1px solid rgba(255, 255, 255, 0.2);
              font-family: "Overpass Mono", monospace;
              padding: 5px 10px 2px 10px;
              box-sizing: content-box;
              margin-left: auto;
              margin-right: auto;
              height: 40px;
              font-family: "Overpass Mono", monospace;
            }
          `}
        </style>
      </Element>
    );
  }
}

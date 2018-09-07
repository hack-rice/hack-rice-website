import React from "react";
import Collapse, { Panel } from "rc-collapse";
import defaultCss from "rc-collapse/assets/index.css";
import customCss from "../styles/collapse.css";
import { Box, Flex } from "rebass";
import { questions } from "../content/faq";
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
        <Flex flexWrap="wrap" flexDirection="column" width={[1, 1 / 3]}>
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
        <Flex flexDirection="row" flexWrap="wrap" my={4} pt={2}>
          {cols}
        </Flex>
      </Element>
    );
  }
}

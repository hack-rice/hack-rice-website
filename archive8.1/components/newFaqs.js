import React from "react";
import Collapse, { Panel } from "rc-collapse";
import defaultCss from "rc-collapse/assets/index.css";
import customCss from "../styles/collapse.css";
import { Box, Flex } from "rebass";
import { title, faqs } from "../content/newFaqs.js";
import colors from "../styles/colors.json";
import { Element } from "react-scroll";

export default class Questions extends React.Component {
  state = {
    accordion: true,
    activeKey: null,
    questions: faqs
  };

  onChange = activeKey => {
    this.setState({
      activeKey
    });
  };

  render() {
    let state = this.state;
    let shift = faqs.length / 3;

    let cols = [];

    for (let i = 0; i < faqs.length; i += shift) {
      cols.push(
        <Flex flexWrap="wrap" flexDirection="column" width={[1, 1 / 2, 1 / 3]}>
          {faqs.slice(i, i + shift).map(({ key, question, answer }) => (
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
        <Box mx="auto" pt={3} mx={3}>
          <h2 className="title">{title}</h2>
        </Box>
        <Flex flexDirection="row" flexWrap="wrap" mt={2} mb={5} pt={2}>
          {cols}
        </Flex>
        <style jsx>
          {`
            .title {
                display: inline-block;
                font-family: Overpass Mono;
                text-transform: uppercase;
                color: #a95656;
                background: #ffffff;
                padding: 2px 10px;
                margin-left: 0.5em;
              }
          `}
        </style>
      </Element>
    );
  }
}
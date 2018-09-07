import * as Scroll from "react-scroll";
let ScrollingLink = Scroll.Link;
import Link from "next/link";
import { Box, Container, Card, Flex, Image, theme } from "rebass";
import { intro, bullets, cards } from "../content/intro";
import colors from "../styles/colors.json";

const Intro = () => (
  <div>
    <Box px={3} pt={3} pb={4} bg={colors["base"]} color={colors["gray"][1]}>
      <Box width="auto" px={2}>
        <h1 className="introText">{intro}</h1>
        {bullets.map(({ key, href, button, note, icon }) => (
          <div key={key} className="introItem">
            <img className="icon" src={icon} />
            <a href={href} className="styledlink">
              {button}
            </a>
            <span className="spacer" />
            <span className="note">{note}</span>
          </div>
        ))}
      </Box>
      <Flex flexWrap="wrap" mx={-2} pt={2}>
        {cards.map(
          ({ key, href, to, title, text, icon }) =>
            href != undefined ? (
              <Box key={key} width={[1, 1 / 2, 1 / 3]}>
                <a href={href}>
                  <div className="card">
                    <h3>
                      <img src={icon} />
                      <span className="spacer" />
                      <span className="cardTitle">{title}</span>
                    </h3>
                    <p>{text}</p>
                  </div>
                </a>
              </Box>
            ) : (
              <Box key={key} width={[1, 1 / 2, 1 / 3]}>
                <ScrollingLink to={to} smooth={true} duration={500}>
                  <div className="card">
                    <h3>
                      <img src={icon} />
                      <span className="spacer" />
                      <span className="cardTitle">{title}</span>
                    </h3>
                    <p>{text}</p>
                  </div>
                </ScrollingLink>
              </Box>
            )
        )}
      </Flex>
    </Box>
    <style jsx global>{`
      .introText {
        font-family: "Overpass Mono";
        font-size: 1.5em;
        font-weight: 700;
        text-transform: uppercase;
      }

      .introItem {
        margin-bottom: 10px;
      }

      a.styledlink {
        color: #fff;
        text-decoration: none;
        background: rgba(255, 255, 255, 0.1);
        transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
        padding: 3px 5px;
        margin: 3px;
        text-transform: uppercase;
        font-size: 0.85em;
        font-weight: 500;
      }

      a.styledlink:hover {
        color: #6164b2;
        background: rgba(255, 255, 255, 1);
      }

      .icon {
        padding-right: 5px;
      }

      .note {
        text-transform: uppercase;
        font-size: 0.8em;
        font-weight: 300;
        font-family: "Overpass Mono";
      }

      .spacer {
        margin-right: 5px;
      }

      .card {
        border: 1px solid ${colors["gray"][1]};
        color: ${colors["gray"][1]};
        font-family: "Overpass Mono", monospace;
        margin: 10px;
        min-height: 110px !important;
        padding: 18px 18px 18px;
        text-align: left;
        text-decoration: none;
        transition: border-color 0.3s ease-in-out, background 0.3s ease-in-out;
      }

      .cardTitle {
        text-transform: uppercase;
      }

      .card:hover {
        background: rgba(255, 255, 255, 0.1);
        cursor: pointer;
      }

      .card h3 {
        margin: 0;
        font-size: 18px;
      }

      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        font-weight: 300;
      }

      @media (max-width: 575px) {
        .note {
          display: block;
          margin-top: 1em;
        }
      }
    `}</style>
  </div>
);

export default Intro;

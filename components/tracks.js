import Link from "next/link";
import { Box, Container, Card, Flex } from "rebass";
import { title, cards } from "../content/tracks";
import colors from "../styles/colors.json";

const Tracks = () => (
  <Box px={3} pt={4} pb={4} bg={colors["base"]} color={colors["gray"][1]}>
    <Box mx={1} mt={4}>
      <h2 className="title">{title}</h2>
    </Box>
    <Flex flexWrap="wrap" mx={-2} pt={2}>
      {cards.map(({ key, href, to, title, type, text, icon }) => (
        <Box key={key} width={[1]}>
          <a href={href}>
            <div className="card">
              <h3>
                <img src={icon} />
                <span className="spacer" />
                <span className="cardTitle">{title}</span>
                <span className="detail">{type}</span>
              </h3>
              <p>{text}</p>
              {/* <p className="link">LEARN MORE →</p> */}
            </div>
          </a>
        </Box>
      ))}
    </Flex>

    <style jsx>{`
      .title {
        display: inline-block;
        text-transform: uppercase;
        color: ${colors["white"]};
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 2px 10px;
        margin: unset;
        font-family: "Overpass Mono", monospace;
        box-sizing: content-box;
      }

      .card {
        border: 1px solid rgba(255, 255, 255, 0.2);
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
        border: 1px solid white;
        cursor: pointer;
      }

      .card h3 {
        margin: 0;
        font-size: 18px;
      }

      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 14px;
        font-family: "Open Sans", sans-serif;
        line-height: 1.5em;
        font-weight: 300;
        text-transform: none;
      }

      .card p.link {
        font-family: "Overpass Mono", sans-serif;
        line-height: 1.5em;
        font-weight: 300;
        text-transform: none;
      }

      .detail {
        float: right;
        border: 1px solid ${colors["white"]};
        color: ${colors["white"]};
        padding: 4px 5px 2px 5px;
        font-size: 0.7em;
        box-sizing: content-box;
      }
    `}</style>
  </Box>
);

export default Tracks;

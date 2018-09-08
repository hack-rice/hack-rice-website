import { Element } from "react-scroll";
import { Box, Flex, Image } from "rebass";
import {
  title,
  info,
  p1,
  p2,
  p3,
  button1,
  button2,
  link1,
  link2
} from "../content/about";
import colors from "../styles/colors.json";

const About = () => (
  <Element name="about">
    <Flex mx={2} mt={4} flexWrap="wrap">
      <Box width={1} mx={2}>
        <h2 className="title">{title}</h2>
      </Box>
      <Box width={[1]} mx={2} mb={1}>
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
        <a href={link1}>
          <button>{button1}</button>
        </a>
        <a href={link2}>
          <button>{button2}</button>
        </a>
      </Box>
      <Flex justifyContent="center" width={[1]}>
        <Image
          style={{ maxWidth: "200%", height: "150px", bottom: "0px" }}
          mt={4}
          src="../static/sallyport.svg"
        />
      </Flex>
      <style jsx>{`
        @import url("https://rsms.me/inter/inter-ui.css");

        p {
          font-weight: 300;
          font-size: 1em;
          line-height: 1.6em;
        }

        p strong {
          font-weight: 400 !important;
        }

        .title {
          display: inline-block;
          text-transform: uppercase;
          color: ${colors["gray"][1]};
          margin: unset;
          font-family: "Overpass Mono", monospace;
        }

        .sallyport {
          height: 80px !important;
        }

        button {
          background: none;
          border: 1px solid ${colors["gray"][1]};
          color: ${colors["gray"][1]};
          font-family: "Overpass Mono", monospace;
          font-size: 1em;
          margin-top: 0.4em;
          margin-right: 1em;
          padding: 6px 10px;
          text-transform: uppercase;
          transition: border-color 0.3s ease-in-out, background 0.3s ease-in-out;
        }

        button:hover {
          background: rgba(255, 255, 255, 0.1);
          cursor: pointer;
        }
      `}</style>
    </Flex>
  </Element>
);

export default About;

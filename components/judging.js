import { Box, Flex } from "rebass";
import { Element } from "react-scroll";
import { title, criteria } from "../content/judging";
import colors from "../styles/colors.json";

const Judging = () => (
  <Element name="judging">
    <Flex
      bg={colors["gray"][1]}
      color={colors["base"]}
      flexWrap="wrap"
      px={5}
      py={5}
    >
      <h2 className="title">{title}</h2>
      {criteria.map(({ key, subtitle, description }) => (
        <Box width={1}>
          <h2 className="subtitle">{subtitle}</h2>
          <p className="description">{description}</p>
        </Box>
      ))}
      <style jsx>
        {`
          .title {
            display: inline-block;
            text-transform: uppercase;
            color: ${colors["white"]};
            background: ${colors["base"]};
            padding: 2px 10px;
            margin: unset;
            font-family: "Overpass Mono", monospace;
          }

          .subtitle {
            font-family: "Overpass Mono", monospace;
            text-transform: uppercase;
            margin-bottom: 0px;
          }

          .description {
            margin-top: 0.5em;
            font-size: 1em;
            font-weight: 400;
          }
        `}
      </style>
    </Flex>
  </Element>
);

export default Judging;

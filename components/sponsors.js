import Link from "next/link";
import { Box, Flex, Image } from "rebass";
import colors from "../styles/colors.json";
import { title, files } from "../content/sponsors";

const Sponsors = () => (
  <Flex flexWrap="wrap" width={1} my={2}>
    <Flex
      flexWrap="wrap"
      flexDirection="row"
      justifyContent="space-around"
      alignItems="center"
      width={1}
      mx={5}
      my={5}
    >
      <h2 className="title">{title}</h2>
      {files.map(({ name, height, link }) => (
        <Link href={link}>
          <Image
            style={{ margin: "2em 1em", height: `${height}` }}
            src={`../static/sponsors/${name}`}
          />
        </Link>
      ))}
    </Flex>
    <style jsx>
      {`
        .title {
          display: inline-block;
          text-transform: uppercase;
          color: ${colors["base"]};
          background: ${colors["white"]};
          padding: 2px 10px;
          margin: unset;
          height: 40px;
          font-family: "Overpass Mono", monospace;
        }
      `}
    </style>
  </Flex>
);

export default Sponsors;

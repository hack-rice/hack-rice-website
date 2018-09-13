import { Flex, Image, Text } from "rebass";
import { Element } from "react-scroll";

const Map = () => (
  <Element name="maps">
    <Flex
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      width={1}
      mb={4}
    >
      <Image width={1} px={2} py={2} src="../static/map.png" />
      <a
        href="https://www.rice.edu/maps/Rice-University-Color-Campus-Map.pdf"
        style={{ marginTop: "20px" }}
      >
        Looking for a map of Rice University? Click here →
      </a>
    </Flex>
  </Element>
);

export default Map;

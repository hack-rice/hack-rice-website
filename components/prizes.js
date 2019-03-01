import { places, trackWinners, title } from "../content/prizes";
import { Box, Flex } from "rebass";
import { Element } from "react-scroll";
import colors from "../styles/colors.json";

const Prizes = () => (
  <Element name="prizes">
    <Box color="#9F5A58" py={4} my={50}>
      <Box px={3}>
        <h2 className="title" style={{"marginBottom":"0.5em"}}>{title}</h2>
        <p style={{"color":"#f6b8b8", "marginLeft":"0.8em"}}>Each team member will receive one of the mentioned prizes.</p>
      </Box>
      <Flex justifyContent="flexStart" flexWrap="wrap" mx={2}>
        {places.map(({ place, prize, key }) => (
            <div className="prize">
              <h3 className="itemTitle">{place}</h3>
              <span className="item">{prize}</span>
            </div>
        ))}
        {trackWinners.map(({ place, prize, key }) => (
            <div className="prize">
              <h3 className="itemTitle">{place}</h3>
              <span className="item">{prize}</span>
            </div>
        ))}
      </Flex>
    </Box>
    <style jsx>{`

    h3 {
        margin-bottom: 5px;
    }
      .title {
        display: inline-block;
        font-family: Overpass Mono;
        text-transform: uppercase;
        color: #a95656;
        background: #ffffff;
        padding: 2px 10px;
        margin-left: 0.5em;
      }

      .prize {
        border: 2px solid rgba(255, 255, 255, 0.1);
        color: #fff;
        padding: 10px 25px;
        transition: border 0.3s ease-in-out, transform 0.3s ease-in-out,
          background 0.3s ease-in-out;
          margin: 0.8em 0.8em 0.8em 1.2em;
      }

      .prize:hover {
        transform: scale(1.03);
        border: 2px solid #fff;
      }

      .itemTitle {
        margin-top: 5px;
        display: inline-block;
        font-size: 1.2em;
        font-weight: bold;
        color: #fff;
      }

      .item {
          display: block;
          margin-bottom: 8px;
      }
    `}</style>
  </Element>
);

export default Prizes;

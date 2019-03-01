import { Box, Flex } from "rebass";
import { Element } from "react-scroll";
import { trackCards, title } from "../content/newTracks";
import { lightAccentColor } from "../styles/colors.json";

const Tracks = () => (
  <Element name="tracks">
    <Box mx="auto" pt={3} mx={3}>
      <h2 className="title">Tracks</h2>
      <Flex justifyContent="center">
        {trackCards.map(({ title, icon, text, href, key }) => (
          <Box width={[1, 1 / 2]}>
            <a href={href}>
              <div className="card">
                <Box key={key} px={2} py={2}>
                  <div className="info">
                    <img src={icon} />
                    <span className="label"> {title}</span>
                  </div>
                  <p className="trackInfo">{text}</p>
                </Box>
              </div>
            </a>
          </Box>
        ))}
      </Flex>
    </Box>
    <style jsx>{`
      .title {
        display: inline-block;
        font-family: Overpass Mono;
        text-transform: uppercase;
        color: #a95656;
        background: #ffffff;
        padding: 2px 10px;
        margin-left: 0.5em;
      }

      .label {
        font-size: 1.2em;
        font-weight: bold;
      }

      .card {
        height: 210px !important;
        background: none;
        border: 1.5px solid;
        border-color: rgba(255, 255, 255, 0.1);
        transition: transform 0.3s ease-in-out, border-color 0.3s ease-in-out;
      }
      .card:hover {
        transform: scale(1.03);
        border-color: #fff;
      }
      .info {
        padding: 1px;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .trackInfo {
        font-family: "Open Sans";
        font-weight: normal;
        text-transform: none !important;
      }
    `}</style>
  </Element>
);

export default Tracks;

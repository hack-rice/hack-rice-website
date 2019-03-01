import { places, trackWinners, title } from '../content/prizes';
import { Box, Flex } from 'rebass';
import { Element } from 'react-scroll';
import colors from "../styles/colors.json";

const Prizes = () => (
    <Element name='prizes'>
        <Box bg="#e89e9ec7" color="#9F5A58" py={4} my={50}>
            <Box mx={5} px={3}>
                <h2 className="title">{title}</h2>
            </Box>
            <Flex justifyContent='center' flexWrap='wrap'>
                {
                    places.map(({ place, prize, key }) => (
                        <Box width={[1, 1 / 4]} key={key} mx={2} my={2}>
                            <div className='prize'>
                                <h3 className='itemTitle'>{place}</h3>
                                <p className='item'>{prize}</p>
                            </div>
                        </Box>
                    ))
                }
            </Flex>
            <Flex justifyContent='center' flexWrap='wrap'>
                {
                    trackWinners.map(({ place, prize, key }) => (
                        <Box width={[1, 9/24]} key={key} mx={2} my={2}>
                            <div className='prize'>
                                <h3 className='itemTitle'>{place}</h3>
                                <p className='item'>{prize}</p>
                            </div>
                        </Box>
                    ))
                }
            </Flex>
        </Box>
        <style jsx>{`
            .title {
                display: inline-block;
                text-transform: uppercase;
                color: ${colors["white"]};
                background: #9F5A58;
                padding: 2px 10px;
              }

            .prize {
                border: 1px solid rgba(0, 0, 0, 0.1);
                background: #f6b8b878;
                color: #9F5A58;
                padding: 8px 10px;
                transition: border 0.3s ease-in-out, transform 0.3s ease-in-out, background 0.3s ease-in-out;
              }

              .prize:hover {
                  background: #f6b8b8;
                  transform: scale(1.03);
                  border: 1px solid #9F5A58;
              }

              .itemTitle {
                margin-top: 5px;
                display: inline-block;
                font-size: 1.2em;
                font-weight: 400;
                font-family: "Overpass Mono";
                background: rgba(255, 255, 255, 0.3);
                padding: 4px 5px;
                color: #9F5A58;
              }

              .item {
                  margin-top: -2px;
              }
        `}</style>
    </Element>
);

export default Prizes;
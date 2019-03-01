import { Box, Flex } from 'rebass';
import { Element } from 'react-scroll';
import { trackCards, title } from '../content/newTracks';
import { lightAccentColor, trackColor } from '../styles/colors.json';

const Tracks = () => (
    <Element name='tracks'>
        <Box width={0.6} mx='auto' pt={3}>
            <h1 className='title'>
                { title }
            </h1>
            <Flex justifyContent='center' >
                <Box>
                    {
                        trackCards.map(({ title, icon, text, href, key }) => (
                            <Box pb={3}>
                                <a href={href}>
                                    <div className='card'>
                                        <Box key={key} px={4} py={2}>
                                            <h2 className="info">
                                                <img src={icon} />
                                                <span className='label'>{' '}{title}</span>
                                            </h2>
                                            <p>
                                                {text}
                                            </p>

                                        </Box>
                                    </div>
                                </a>
                            </Box>
                        ))
                    }
                </Box>
            </Flex>
        </Box>
        <style jsx>{`
            .title {
                font-size: 3em;
            }
            .label {
                font-size: 1.5em;
            }
            .card {
                border: 1.5px solid;
                border-color:${lightAccentColor};
            }
            .card:hover {
                background-color: ${trackColor};
            }
            .info {
                padding: 1px;
            }
            a {
                color:inherit;
                text-decoration: none;
               }
        `}</style>
    </Element>
);

export default Tracks
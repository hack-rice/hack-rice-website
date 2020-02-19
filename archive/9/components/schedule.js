import { Box, Flex } from 'rebass';
import colors from "../styles/colors.json";

const Schedule = (props) => {
    return (
        <div>
            <Box style={{ backgroundColor: colors["dark"], padding: '40px 0', marginTop: '5%' }} ml='auto' mr='auto'>
                <h1 className='title'>Schedule of Events</h1>
                <Flex flexDirection='row' flexWrap='wrap' justifyContent='center'>
                    <Box width={[0.85, 0.3]}>
                        <h2 className="day-name">Friday</h2>
                        <Flex flexDirection='column'>
                            {
                                props.friday.map(({ name, time, description }) => (
                                    <div key={name} className="schedule-item">
                                        <h3><img src="https://icon.now.sh/access_time/ffffff/20" style={{paddingRight: '10px', transform: 'translateY(3px)'}} alt=""/>{time}</h3>
                                        <h4><img src="https://icon.now.sh/triangleRight/ffffff/15" style={{paddingRight: '10px'}} alt="" />{name}</h4>
                                        <p>{description}</p>
                                    </div>
                                ))
                            }
                        </Flex>
                    </Box>
                    <Box width={[0.85, 0.3]}>
                        <h2 className="day-name">Saturday</h2>
                        <Flex flexDirection='column'>
                            {
                                props.saturday.map(({ name, time, description }) => (
                                    <div key={name} className="schedule-item">
                                        <h3><img src="https://icon.now.sh/access_time/ffffff/20" style={{paddingRight: '10px', transform: 'translateY(3px)'}} alt=""/>{time}</h3>
                                        <h4><img src="https://icon.now.sh/triangleRight/ffffff/15" style={{paddingRight: '10px'}} alt="" />{name}</h4>
                                        <p>{description}</p>
                                    </div>
                                ))
                            }
                        </Flex>
                    </Box>
                    <Box width={[0.85, 0.3]}>
                        <h2 className="day-name">Sunday</h2>
                        <Flex flexDirection='column'>
                            {
                                props.sunday.map(({ name, time, description }) => (
                                    <div key={name} className="schedule-item">
                                        <h3><img src="https://icon.now.sh/access_time/ffffff/20" style={{paddingRight: '10px', transform: 'translateY(3px)'}} alt=""/>{time}</h3>
                                        <h4><img src="https://icon.now.sh/triangleRight/ffffff/15" style={{paddingRight: '10px'}} alt="" />{name}</h4>
                                        <p>{description}</p>
                                    </div>
                                ))
                            }
                        </Flex>
                    </Box>
                </Flex>
            </Box>
            <style jsx>{`
            
            .title {
                color: ${colors["gray"][1]};
                text-transform: uppercase;
                margin: unset;
                text-align: center;
                font-family: "Overpass Mono", monospace;
            }

            .schedule-item {
                border: solid;
                border-color: ${colors["white"]} ${colors["base"]} ${colors["base"]} ${colors["white"]};
                border-width: 3px 1px 1px 3px;
                margin: 10px;
                padding: 15px;
                transition: 0.3s ease-in-out;
            }

            .schedule-item:hover {
                background-color: ${colors["base"]};
                transform: scale(1.05);
            }

            .schedule-item h3 {
                margin: 10px auto 0 auto;
                font-family: "Overpass Mono", monospace;
                font-weight: normal;
            }

            .schedule-item h4 {
                font-family: "Overpass Mono", monospace;
                font-weight: normal;
                margin: 10px 0;
            }

            .day-name {
                text-align: center;
                margin-bottom: 0;
                font-family: "Overpass Mono", monospace;
                font-weight: normal;
            }
        `}</style>
        </div>
    )
}

export default Schedule;
import { Flex, Box } from "rebass";
import { Element } from "react-scroll";
import {
  title,
  friday,
  saturday,
  dayOne,
  dayTwo
} from "../content/newCalendar";
import colors from "../styles/colors.json";

const Calendar = () => (
  <Element name="calendar">
    <Box bg="#e89e9ea0" color="#9F5A58" py={3} >
      <Box mx={5} px={3} pt={4}>
        <h2 className="title">{title}</h2>
      </Box>
      <Flex my={1} pb={4} mx={5} flexWrap="wrap">
        <Box px={3} width={[1, 1 / 2]}>
          <h2 className="dayName">{dayOne}</h2>
          <ul className="dayContent">
            {friday.map(({ key, title, time, detail }) => (
              <li key={key} className="dayItem">
                <span className="itemTitle">{title}</span>
                <span className="itemTime">{time}</span>
                <span className="itemDetail">{detail}</span>
              </li>
            ))}
          </ul>
        </Box>
        <Box px={3} width={[1, 1 / 2]}>
          <h2 className="dayName">{dayTwo}</h2>
          <ul className="dayContent">
            {saturday.map(({ key, title, time, detail }) => (
              <li key={key} className="dayItem">
                <span className="itemTitle">{title}</span>
                <span className="itemTime">{time}</span>
                <span className="itemDetail">{detail}</span>
              </li>
            ))}
          </ul>
        </Box>
      </Flex>
      <style jsx>{`
        h1,
        h2 {
          font-family: "Overpass Mono", monospace;
        }

        .title {
          display: inline-block;
          text-transform: uppercase;
          color: ${colors["white"]};
          background: #9F5A58;
          padding: 2px 10px;
        }

        .dayName {
          font-size: 1.2em;
          font-weight: bold;
          color: #fff;
          text-transform: uppercase;
        }

        .dayContent {
          display: inline-block;
          vertical-align: top;
          width: 48%;
          float: left;
          margin: 0px;
          list-style-type: none;
          padding: 0;
          width: 100%;
        }

        .dayItem {
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: #f6b8b878;
          color: #9F5A58;
          padding: 8px 10px;
          transition: border 0.3s ease-in-out, background 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
            transform 0.3s ease-in-out;
          margin-bottom: 1em;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          align-items: center;
        }

        .dayItem:hover {
          background: #f6b8b8;
          border: 1px solid #9F5A58;
          box-shadow: 0px 3px 5px 2px rgba(97, 100, 178, 0.05);
          transform: scale(1.05);
        }

        .dayContent ul li {
          justify-content: space-between;
          flex-flow: row wrap;
          align-content: center;
        }

        .itemTime {
          display: block;
          margin-top: 2px;
          font-size: 0.8em;
          font-family: "Overpass Mono";
        }

        .itemTitle {
          margin-top: 5px;
          display: inline-block;
          font-size: 0.8em;
          font-weight: 400;
          font-family: "Overpass Mono";
          background: rgba(255, 255, 255, 0.3);
          padding: 2px 5px;
          color: #9F5A58;
        }

        .itemDetail {
          clear: both;
          display: block;
          flex: 1 1 100%;
          font-size: 0.8em;
          margin-top: 0.5em;
        }
      `}</style>
    </Box>
  </Element>
);

export default Calendar;

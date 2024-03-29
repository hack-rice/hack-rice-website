import { Flex, Box } from "rebass";
import { Element } from "react-scroll";
import {
  title,
  note,
  friday,
  saturday,
  sunday,
  dayOne,
  dayTwo,
  dayThree
} from "../content/calendar";
import colors from "../styles/colors.json";

const Calendar = () => (
  <Element name="calendar">
    <Box bg={colors["base"]} color={colors["black"]}>
      <Box mx={4} px={3} pt={4} mt={2} mb={2} style={{display: "flex", justifyContent: "space-around"}}>
        <h2 className="title">{title}</h2>
      </Box>
      <Flex my={1} pb={4} mx={4} flexWrap="wrap">
        <Box px={3} width={[1, 1 / 3]}>
          <h2 className="dayName">{dayOne}</h2>
          <ul className="dayContent">
            {friday.map(({ key, title, time, detail, href }) => (
              <li key={key} className="dayItem">
                <a href={href} className="itemTitle">{title}</a>
                <span className="itemTime">{time}</span>
                <span className="itemDetail">{detail}</span>
              </li>
            ))} 
          </ul>
        </Box>
        <Box px={3} width={[1, 1 / 3]}>
          <h2 className="dayName">{dayTwo}</h2>
          <ul className="dayContent">
            {saturday.map(({ key, title, time, detail, href }) => (
              <li key={key} className="dayItem">
                <a href={href} className="itemTitle">{title}</a>
                <span className="itemTime">{time}</span>
                <span className="itemDetail">{detail}</span>
              </li>
            ))}
          </ul>
        </Box>
        <Box px={3} width={[1, 1 / 3]}>
          <h2 className="dayName">{dayThree}</h2>
          <ul className="dayContent">
            {sunday.map(({ key, title, time, detail, href }) => (
              <li key={key} className="dayItem">
                <a href={href} className="itemTitle">{title}</a>
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
          color: ${colors["black"]};
          background: ${colors["base"]};
          padding: 2px 10px;
          text-align: center;
          font-size: 1.7em;
        }

        .dayName {
          font-size: 1.2em;
          font-weight: 600;
          color: ${colors["black"]};
          text-transform: uppercase;
          padding: 0px;
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
          border: 1px solid rgba(0, 0, 0, 0.1);
          background: rgba(245, 255, 255, 0.2);
          color: ${colors["black"]};
          padding: 8px 10px;
          transition: border 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
            transform 0.3s ease-in-out;
          margin-bottom: 1em;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          align-items: center;
        }

        .dayItem:hover {
          border: 1px solid ${colors["black"]};
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
          font-size: 0.9em;
          font-weight: 400;
          font-family: "Overpass Mono";
          padding: 1px 2px;
          color: ${colors["black"]};
        }

        .itemDetail {
          clear: both;
          display: block;
          flex: 1 1 100%;
          font-size: 0.8em;
          margin-top: 0.5em;
          padding-left: 0px;
        }

        .note {
          font-size: .8em;
        }
      `}</style>
    </Box>
  </Element>
);

export default Calendar;

import Link from "next/link";
import CardNav from "./cardNav";
import Calendar from "./newCalendar";
import Tracks from "./newTracks";
import Prizes from "./prizes.js"
import Questions from "./newFaqs";
import { Box, Image } from "rebass";

import { newbase } from "../styles/colors.json";
import { links } from "../content/links";
import { cards } from "../content/newIntro";

const NewIntro = () => (
  <Box bg={newbase}>
    <Image
      src="../static/hr85.png"
      css={{
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "10%",
        marginBottom: "10%",
        width: "40%"
      }}
    />
    <div className="cards">
      <CardNav cards={cards} />
    </div>
    <div className="calendar">
        <Calendar />
    </div>
    <div className="tracks">
      <Tracks />
    </div>
    <div className='prizes'>
      <Prizes/>
    </div>
    <div className="faqs">
      <Questions/>
    </div>
    <div className="social">
      {links.map(({ key, href, icon }) => (
        <Link href={href} key={key}>
          <a>
            <img src={icon} className="icon" />
          </a>
        </Link>
      ))}
    </div>
    <style jsx global>{`
      a {
        display: inline !important;
      }

      a.img {
        margin-right: 0px !important;
      }

      .icon {
        padding: 4px 13px;
      }

      .social {
        text-align: center;
        margin-top: 10em;
      }

      .calendar {
        margin-top: 3em;
      }

      .tracks {
        margin-top: 2em;
      }
    `}</style>
  </Box>
);

export default NewIntro;
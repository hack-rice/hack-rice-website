import Link from "next/link";
import CardNav from "./cardNav";
import { Box, Image } from "rebass";
import { intro, bullets, cards } from "../content/tempIntro";
import { base9 } from "../styles/colors.json";
import { links } from "../content/links";
import colors from "../styles/colors.json";

import About from "../components/about.js"
import Questions from "../components/faq9.js"

const TempIntro = () => (
  <Box bg={base9}>
    <Image
      src="../static/blueH.png"
      css={{
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "10%",
        marginBottom: "10%",
        width: "25%"
      }}
    />

   <Box width="auto" px={2}>
      <h1 className="introText">{intro}</h1>
      {bullets.map(({ key, href, button, note, icon }) => (
        <div key={key} className="introItem">
          <img className="icon" src={icon} />
          <a href={href} className="styledlink">
            {button}
          </a>
          <span className="spacer" />
          <span className="note">{note}</span>
        </div>
      ))}
    </Box>

    <div className="cards">
      <CardNav cards={cards} />
    </div>

    <About />

    <Questions />

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
      .introText {
        font-family: "Overpass Mono";
        font-size: 1.5em;
        font-weight: 700;
        text-transform: uppercase;
      }

      .introItem {
        margin-bottom: 10px;
      }

      a.styledlink {
        color: #fff;
        text-decoration: none;
        background: rgba(255, 255, 255, 0.1);
        transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
        padding: 3px 5px;
        margin: 3px;
        text-transform: uppercase;
        font-size: 0.85em;
        font-weight: 500;
      }

      a.styledlink:hover {
        color: #60b2b2;
        background: rgba(255, 255, 255, 1);
      }

      .icon {
        padding: 4px 13px;
      }

      .social {
        text-align: center;
        margin-top: 10em;
      }

      .note {
        text-transform: uppercase;
        font-size: 0.8em;
        font-weight: 300;
        font-family: "Overpass Mono";
      }

      .spacer {
        margin-right: 5px;
      }

      .card {
        border: 1px solid ${colors["gray"][1]};
        color: ${colors["gray"][1]};
        font-family: "Overpass Mono", monospace;
        margin: 10px;
        min-height: 110px !important;
        padding: 18px 18px 18px;
        text-align: left;
        text-decoration: none;
        transition: border-color 0.3s ease-in-out, background 0.3s ease-in-out;
      }

      .cardTitle {
        text-transform: uppercase;
      }

      .card:hover {
        background: rgba(255, 255, 255, 0.1);
        cursor: pointer;
      }

      .card h3 {
        margin: 0;
        font-size: 18px;
      }

      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        font-weight: 300;
      }

      @media (max-width: 575px) {
        .note {
          display: block;
          margin-top: 1em;
        }
      }
    `}</style>
  </Box>
);

export default TempIntro;

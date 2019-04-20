/**
 * This page exists to redirect to the sponsorship package.
 */

import { Provider } from "rebass";
import { injectGlobal } from "styled-components";

import colors from "../styles/colors.json";
import RedirectHead from "../components/redirectHead";
import CenterImage from "../components/centerImage";
import RedirectText from "../components/redirectText";

// Set global body styling.
injectGlobal`
  * { box-sizing: border-box; }
  body { max-width: 900px; margin: 2% auto; color: #fff;}
`;

// Variables for <head>
let title = "HackRice 9";
let url = "https://hack.rice.edu";
let ogImage = "../static/blueH.png";
let description = "The premier hackathon of the south.";

// this 
const Home = () => (
  <Provider
    theme={{
      fonts: {
        sans: "'Open Sans', sans-serif",
        mono: "'Overpass Mono', monospace"
      }
    }}
  >
    <RedirectHead title={title} description={description} url={url} ogImage={ogImage} />
    <CenterImage />
    <RedirectText />
    <style jsx global>{`
      html {
        background: ${colors["base"]} !important;
      }
    `}</style>
  </Provider>
);

export default Home;

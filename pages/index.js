import { Provider } from "rebass";
import { injectGlobal } from "styled-components";
import colors from "../styles/colors.json";

import Head from "../components/head";
import CenterImage from "../components/centerImage";
import IntroText from "../components/introText";
import CardNav from "../components/cardNav";
import About from "../components/about";
import Questions from "../components/faq";
import Links from "../components/links";

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

const Home = () => (
  <Provider
    theme={{
      fonts: {
        sans: "'Open Sans', sans-serif",
        mono: "'Overpass Mono', monospace"
      }
    }}
  >
    <Head title={title} description={description} url={url} ogImage={ogImage} />
    <CenterImage />
    <IntroText />
    <CardNav />
    <About />
    <Questions />
    <Links />
    <style jsx global>{`
      html {
        background: ${colors["base"]} !important;
      }
    `}</style>
  </Provider>
);

export default Home;

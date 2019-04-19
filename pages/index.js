import { Provider } from "rebass";
import { injectGlobal } from "styled-components";
import { base9 } from "../styles/colors.json";

import Head from "../components/head";
import TempIntro from "../components/tempIntro";
import Questions from "../components/faq9";

// Set global body styling.
injectGlobal`
  * { box-sizing: border-box; }
  body { max-width: 900px; margin: 2% auto; color: #fff;}
`;

// Variables for <head>
let title = "HackRice 9";
let url = "https://hack.rice.edu";
let ogImage = "../static/og.png";
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
    <TempIntro />
    <style jsx global>{`
      html {
        background: #60b2b2 !important;
      }
    `}</style>
  </Provider>
);

export default Home;

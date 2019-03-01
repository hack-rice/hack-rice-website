import { Provider, Heading } from "rebass";
import { injectGlobal } from "styled-components";

import Head from "../components/head";
import NewIntro from "../components/newintro";

// Set global body styling.
injectGlobal`
  * { box-sizing: border-box; }
  body { max-width: 900px; margin: 2% auto; color: #fff;}
`;

// Variables for <head>
let title = "HackRice 8.5";
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
    <NewIntro />
    <style jsx global>{`
      html {
        background: #a95656 !important;
      }
    `}</style>
  </Provider>
);

export default Home;

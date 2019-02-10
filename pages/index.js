import { Provider, Heading } from "rebass";
import { injectGlobal } from "styled-components";

import Head from "../components/head";
import Nav from "../components/nav";
import Intro from "../components/intro";
import About from "../components/about";
import Calendar from "../components/calendar";
import Questions from "../components/faq";
import Judging from "../components/judging";
import Sponsors from "../components/sponsors";
import Tracks from "../components/tracks";
import Map from "../components/map";
import NewIntro from "../components/newintro";
import { newbase } from "../styles/colors.json";

// Ensure `grid-styled` Box and Flex components work properly.
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
    {/* <Nav />
    <Intro />
    <About />
    <Calendar />
    <Questions />
    <Judging />
    <Tracks />
    <Map />
    <Sponsors /> */}
    <style jsx global>{`
            html {
                background: #A95656 !important;
            }
        `}</style>
  </Provider>
);

export default Home;

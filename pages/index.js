import { Provider } from "rebass";
import { injectGlobal } from "styled-components";
import colors from "../styles/colors.json";

// import necessary components
import Head from "../components/head";
import CenterImage from "../components/centerImage";
import IntroText from "../components/introText";
import CardNav from "../components/cardNav";
import About from "../components/about";
import Questions from "../components/faq";
import Links from "../components/links";
import Mlh from "../components/mlh";

// import necessary contents
import { title as aboutTitle, lines } from "../content/about";
import { cards } from "../content/cardNav";
import { title as questionsTitle, questions } from "../content/faq";
import { intro, bullets } from "../content/introText";
import { links } from "../content/links";

// Set global body styling.
injectGlobal`
  * { box-sizing: border-box; }
  body { max-width: 900px; margin: auto; color: #fff; margin-bottom: 2%;}
`;

// Variables for <head>
let title = "HackRice 9";
let url = "https://hack.rice.edu";
let ogImage = "../static/blueH.png";
let description = "The premier hackathon of the south.";

/**
 * This is the react component that makes up most of the web page. It also functions
 * as a "controller" that unites our code in /components and /content and promotes
 * maximum decoupling.
 *
 * @returns {React.Component}
 * @constructor
 */
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
    <Mlh />
    <CenterImage pathToImage="../static/blueH.png" />
    <IntroText intro={intro} bullets={bullets} />
    <CardNav cards={cards} />
    <About lines={lines} title={aboutTitle} />
    <Questions title={questionsTitle} questions={questions} />
    <Links links={links} />
    <style jsx global>{`
      html {
        background: ${colors["base"]} !important;
      }
    `}</style>
  </Provider>
);

export default Home;

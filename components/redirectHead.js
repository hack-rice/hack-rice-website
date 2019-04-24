import React from "react";
import NextHead from "next/head";
import { string } from "prop-types";

/**
 * React component that populates the head of the web page, and then
 * redirects to the sponsorship packet. This is necessary because we want
 * the /sponsors route to link to the packet.
 *
 * @param props
 * @returns {React.Component}
 * @constructor
 */
const RedirectHead = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title}</title>
    <meta name="description" content={props.description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />
    <meta property="og:url" content={props.url} />
    <meta property="og:title" content={props.title} />
    <meta property="og:description" content={props.description} />
    <meta name="twitter:site" content={props.url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage} />
    <meta property="og:image" content={props.ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta http-equiv="refresh" content="0; URL='../static/sponsorships.pdf'" />
    <link
      href="https://fonts.googleapis.com/css?family=Overpass+Mono:300,400,600,700"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
      rel="stylesheet"
    />
  </NextHead>
);

/**
 *
 * @type {{description: string, title: string, ogImage: string, url: string}}
 */
RedirectHead.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};

RedirectHead.defaultProps = {
  title: "",
  description: "",
  url: "",
  ogImage: ""
};

export default RedirectHead;

import React from "react";

const linkStyle = {
    display : "block",
    maxWidth : "100px",
    minWidth : "60px",
    position : "fixed",
    right : "50px",
    top : "0",
    width : "10%",
    zIndex : "10000"
};

const imgStyle = {
    width : "100%"
};

/**
 * React component that places an MLH logo in the top right corner of the
 * screen. Provided by mlh. See: https://mlh.io/brand-guidelines
 *
 * @returns {React.Component}
 * @constructor
 */
const Mlh = () => (
    <a id="mlh-trust-badge"
      style="display:block;max-width:100px;min-width:60px;position:fixed;right:50px;top:0;width:10%;z-index:10000"
      href="https://mlh.io/seasons/2022/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=white"
      target="_blank">
        <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-white.svg"
          alt="Major League Hacking 2022 Hackathon Season"
          style="width:100%">
    </a>
);

export default Mlh;

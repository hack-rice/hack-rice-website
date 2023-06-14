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
        style={linkStyle} href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white"
        target="_blank">
        <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-black.svg"
            alt="Major League Hacking 2024 Hackathon Season"
            style={imgStyle} />
    </a>
    
);

export default Mlh;

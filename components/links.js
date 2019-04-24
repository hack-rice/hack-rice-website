import Link from "next/link";
import { Box } from "rebass";

/**
 * React component that represents the social media links in a webpage.
 * @param props
 * @returns {React.Component}
 * @constructor
 */
const Links = props => (
  <Box>
    <div className="social">
      {props.links.map(({ key, href, icon }) => (
        <Link href={href} key={key}>
          <a>
            <img src={icon} className="icon" alt="icon" />
          </a>
        </Link>
      ))}
    </div>
    <style>{`
      .icon {
        padding: 4px 13px;
      }

      .social {
        text-align: center;
        margin-top: 10em;
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

export default Links;
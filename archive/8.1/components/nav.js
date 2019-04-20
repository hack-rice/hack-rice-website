import React from "react";
import Link from "next/link";

import { Image } from "rebass";

const links = [
  {
    href: "https://facebook.com/hackrice",
    label: "Facebook",
    icon: "https://icon.now.sh/facebook/ffffff"
  },
  {
    href: "https://medium.com/@hackrice",
    label: "Medium",
    icon: "https://icon.now.sh/medium/ffffff"
  },
  {
    href: "https://twitter.com/hackingrice",
    label: "Twitter",
    icon: "https://icon.now.sh/twitter/ffffff"
  },
  {
    href: "mailto:officialhackrice@gmail.com",
    label: `Email`,
    icon: "https://icon.now.sh/email/ffffff"
  },
  {
    href: "https://hackrice8.devpost.com/",
    label: "Devpost",
    icon: "https://icon.now.sh/build/ffffff"
  }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul>
      <ul>
        <li>
          <Image
            src="../static/hr8.svg"
            css={{
              height: "175px !important",
              paddingRight: "20px"
            }}
            ml={10}
          />
        </li>
      </ul>
      <ul>
        <Image src="../static/mlh.svg"
          css={{
            height: "105px !important",
            paddingRight: "20px"
          }}
          ml={10}
        />
        {links.map(({ key, href, label, icon }) => (
          <li key={key}>
            <Link href={href}>
              <a>
                <img src={icon} className="icon" />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </ul>
    <style jsx>{`
      :global(body) {
        background-color: #6164b2;
        font-family: "Open Sans";
      }

      nav {
        text-align: center;
      }

      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 0px;
      }

      nav > ul {
        padding: 6px;
      }

      li {
        display: flex;
        flex: 1;
        padding: 6px;
      }

      .icon {
        padding: 2px 5px;
      }
    `}</style>
  </nav>
);

export default Nav;

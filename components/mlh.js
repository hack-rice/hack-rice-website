import React from "react";

import { Image } from "rebass";

const Mlh = () => (
    <nav>
        <ul>
            <ul>
                <li>
                    {/* a hack, but it gets the job done */}
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
            </ul>
        </ul>
        <style jsx>{`
      nav {
        text-align: center;
        margin-top: 0px;
      }

      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 0px;
        margin-top: 0px;
      }

      li {
        display: flex;
        flex: 1;
        margin-top: 0px;
      }
    `}</style>
    </nav>
);

export default Mlh;

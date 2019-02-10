import Link from "next/link";
import { Box, Image } from "rebass";
import { isAbsolute } from "path";
import { newbase } from "../styles/colors.json"; 

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

const NewIntro = () => (
    <Box bg={newbase} className="contain">
        <Image
            src="../static/hr85.png"
            css={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "25%",
                width: "50%"
            }}
            /> 
        <div>
        <a href="/8" className="special"><Image src="../static/btn.svg" /></a>
        <a href="https://goo.gl/forms/0p6Jf974trcf1Qc92" className="special2">Sign up now →</a>
        </div>
        <div className="social">
        {links.map(({ key, href, label, icon }) => (
            <Link href={href} key={key}>
                <a>
                <img src={icon} className="icon" />
                </a>
            </Link>
        ))}
        </div>
        <style jsx>{`
            .special {
                display: inline-block;
                margin-left: 40%;
                margin-right: 35%;
                margin-top: 1.5em;
                color: #E89E9E;
                font-size: 1.5em !important;
            }

            .special2 {
                display: inline-block;
                margin-left: 40%;
                margin-right: 35%;
                color: #fff;
                font-size: 1.5em !important;
            }

            @media only screen and (max-width: 770px) {
                .special, .special2 {
                    font-size: 1em !important;
                }
            }
            
            .icon {
                padding: 4px 13px;
            }

            .social {
                text-align: center;
                position: absolute;
                bottom: 5%;
                left: 41%;
            }
        `}</style>
    </Box>
);

export default NewIntro;
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
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "10%",
                width: "50%"
            }}
            /> 
        <div className="buttons">
          <Link href="/8"><Image className="special2" src="../static/btn2.svg" /></Link>
          <a href="https://goo.gl/forms/0p6Jf974trcf1Qc92"><Image className="special" src="../static/btn.svg" /></a>
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
        <style jsx global>{`
            a.img {
              margin-right: 0px !important;
            }

            a {
              display: inline !important;
            }

            .buttons {
              display: flex;
              flex-flow: column nowrap;
              align-items: center;
              justify-content: center;
              margin-top: 3em;
            }

            img.special { cursor: pointer; display: inline; padding-top: 2em; height: 100px; }
            img.special2 { cursor: pointer; display: inline; padding-top: 2em; height: 50px !important; }

            .icon {
                padding: 4px 13px;
            }

            .social {
                text-align: center;
                margin-top: 10em;
            }
        `}</style>
    </Box>
);

export default NewIntro;
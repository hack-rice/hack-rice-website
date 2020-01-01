/**
 * A list of objects that describe our social media links.
 * Each object needs (1) a link, (2) a label, and (3) an
 * icon from "https://icon.now.sh/"
 * @type {{href:string, label:string, icon:string}[]}
 */
export const links = [
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
      href: "mailto:hack@rice.edu",
      label: `Email`,
      icon: "https://icon.now.sh/email/ffffff"
    },
    // {
    //   href: "https://hackrice-9.devpost.com/",
    //   label: "Devpost",
    //   icon: "https://icon.now.sh/build/ffffff"
    // }
  ].map(link => {
    link.key = `nav-link-${link.href}-${link.label}`;
    return link;
  });
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
    {
      href: "https://hackrice8.devpost.com/",
      label: "Devpost",
      icon: "https://icon.now.sh/build/ffffff"
    }
  ].map(link => {
    link.key = `nav-link-${link.href}-${link.label}`;
    return link;
  });
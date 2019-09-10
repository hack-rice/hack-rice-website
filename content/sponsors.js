export const title = "Generously Sponsored by";

export const files = [
  {
    name: "bill.png",
    height: "50px",
    link: "https://www.bill.com/",
    blurb:
        "More info coming soon!"
  },
  {
    name: "schlumberger.svg",
    height: "30px",
    link: "https://www.slb.com/",
    blurb:
      "Schlumberger is the world's leading provider of technology for reservoir \n characterization, drilling, production, and processing to the oil and gas industry. Working in more than 85 countries and employing approximately 100,000 people who represent over 140 nationalities, Schlumberger supplies the industry's most comprehensive range of products and services, from exploration through production and integrated pore-to-pipeline solutions for hydrocarbon recovery that optimize reservoir performance."
  },
  {
    name: "jpmorgan.svg",
    height: "20px",
    link: "https://www.jpmorgan.com/country/US/en/jpmorgan",
    blurb:
      "J.P. Morgan is a leader in financial services, offering solutions to clients in more than 100 countries with one of the most comprehensive global product platforms available. We have been helping our clients to do business and manage their wealth for more than 200 years. Our business has been built upon our core principle of putting our clients’ interests first. J.P. Morgan is a leader in asset management, investment banking, private banking, treasury and securities services, and commercial banking. Our broad global platform and strength enable us to create long-lasting value for clients."
  },
  {
    name: "ge.png",
    height: "60px",
    link: "https://www.ge.com/",
    blurb: "More info coming soon!"
  },
  {
    name: "facebook.svg",
    height: "30px",
    link: "https://www.facebook.com/",
    blurb:
      "People are at the heart of every connection we build. We design products and deliver services that bring the world closer together — one connection at a time."
  },
  {
    name: "twosigma.svg",
    height: "30px",
    link: "https://www.twosigma.com/"
  },
  {
    name: "capital.svg",
    height: "35px",
    link: "https://www.capitalone.com/"
  },
  {
    name: "chevron.svg",
    height: "60px",
    link: "https://www.chevron.com/"
  },
  {
    name: "ricecs.svg",
    height: "40px",
    link: "https://csweb.rice.edu/"
  },
  {
    name: "mlh.svg",
    height: "40px",
    link: "https://mlh.io/"
  }
].map(item => {
  item.key = `image-${item.name}`;
  return item;
});

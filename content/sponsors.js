export const title = "Sponsored by";

export const files = [
  {
    name: "twosigma.svg",
    height: "30px",
    link: "https://www.twosigma.com/"
  },
  {
    name: "facebook.svg",
    height: "30px",
    link: "https://www.facebook.com/"
  },
  {
    name: "jpmorgan.svg",
    height: "20px",
    link: "https://www.jpmorgan.com/country/US/en/jpmorgan"
  },
  {
    name: "bp.svg",
    height: "40px",
    link: "https://www.bp.com/"
  },
  {
    name: "capital.svg",
    height: "35px",
    link: "https://www.capitalone.com/"
  },
  {
    name: "chevron.svg",
    height: "40px",
    link: "https://www.chevron.com/"
  },
  {
    name: "extrahop.svg",
    height: "30px",
    link: "https://www.extrahop.com/"
  },
  {
    name: "hbk.svg",
    height: "30px",
    link: "https://www.hbk.com"
  },
  {
    name: "hcss.svg",
    height: "30px",
    link: "https://www.hcss.com/"
  },
  {
    name: "indeed.svg",
    height: "30px",
    link: "https://www.indeed.com/"
  },
  {
    name: "ricecs.svg",
    height: "30px",
    link: "https://csweb.rice.edu/"
  },
  {
    name: "schlumberger.svg",
    height: "30px",
    link: "https://www.slb.com/"
  },
  {
    name: "tech.svg",
    height: "30px",
    link: "https://get.tech/"
  },
  {
    name: "tiffs.svg",
    height: "40px",
    link: "https://www.cookiedelivery.com/"
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

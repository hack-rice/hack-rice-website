export const title = "Sponsored by:";

export const files = [
  {
    name: "bill.png",
    height: "60px",
    link: "https://www.bill.com/",
    blurb: "Bill.com is a leading provider of cloud-based software that simplifies, digitizes, and automates back-office financial processes for small and mid-sized businesses. Our customers come from all industries, ranging from startups to established brands and nonprofits to franchises."
  },
  {
    name: "ricecs.png",
    height: "80px",
    link: "https://csweb.rice.edu/"
  },
  {
    name: "schlumberger.svg",
    height: "30px",
    link: "https://www.slb.com/",
    blurb: "Schlumberger is the leading provider of technology and services to the energy industry across the world."
  },
  {
    name: "d2k.png",
    height: "70px",
    link: "https://d2k.rice.edu/"
  },
  {
    name: "chevron.png",
    height: "80px",
    link: "https://www.chevron.com/",
    blurb: "Chevron is a global energy company aspiring to be most admired for its people, partnership and performance."
  },
  {
    name: "mlh.svg",
    height: "40px",
    link: "https://mlh.io/"
  },
  {
    name: "googlecloud.png",
    height: "40px",
    link: "https://cloud.google.com/"
  },
  {
    name: "meta.png",
    height: "50px",
    link: "https://about.facebook.com/",
    blurb: "At Meta, we are constantly iterating, solving problems and working together to connect people all over the world. That’s why it’s important that our workforce reflects the diversity of the people we serve. Hiring people with different backgrounds and points of view helps us make better decisions, build better products and create better experiences for everyone. Our mission is to give people the power to build community and bring the world closer together, and today our products reach 3 billion people!"
  },
  {
    name: "livenova.png",
    height: "50px",
    link: "https://www.livanova.com/en-us"
  },
  {
    name: "scm.png",
    height: "50px",
    link: "https://www.scm-lp.com/"
  },


].map(item => {
  item.key = `image-${item.name}`;
  return item;
});
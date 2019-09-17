export const title = "Generously Sponsored by";

export const files = [
  {
    name: "bill.png",
    height: "50px",
    link: "https://www.bill.com/",
    blurb:
        "Here at Bill.com, our mission is to make it simple to connect and do business. We are a cloud-based, collaborative business payments platform that makes life easier for businesses of all sizes. As the industry leader in B2B payments, we manage over $70 billion annually and work with some of the top financial institutions and accounting firms in the country."
  },
  {
    name: "schlumberger.svg",
    height: "30px",
    link: "https://www.slb.com/",
    blurb:
      "Do you thrive on software, data, science, and innovation? Schlumberger drives technological advancements in one of the world’s most dynamic industries, continually pushing the limits of what is possible in a work environment that brings out the best in each team member. Our multidisciplinary team has an insatiable appetite for innovation, and we help them explore their passions through continuous research, learning, training, and development opportunities."
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
    blurb: "GE Healthcare is the $19 billion healthcare business of GE (NYSE: GE). We are a leading provider of medical imaging, monitoring, and enterprise medical software. Software engineering plays a huge role in our development of intelligent devices, data analytics, applications and services. With over 100 years of experience in the healthcare industry and more than 50,000 employees globally, the company helps improve outcomes more efficiently for patients, healthcare providers, researchers and life sciences companies around the world. Registration link: https://jobs.gecareers.com/global/en/event/5d657a374cedfd00086dd371/HackRice-9"
  },
  {
    name: "cognite.png",
    height: "50px",
    link: "https://www.cognite.com/",
    blurb: "Cognite is a global software company supporting the full-scale digital transformation of heavy-asset industries around the world. With Cognite Data Fusion (CDF), we supply contextualized data to drive industrial applications that increase safety and efficiency and drive revenue. We are currently around 250 employees spread on offices in Oslo, Norway (HQ), US (Austin and Houston), Austria and New Zealand. We're always looking for new talent to join our team, and offer both year-round internships and graduate positions within software engineering, design, 3D, project management, customer success, solution architecture and many more!"
  },
  {
    name: "facebook.svg",
    height: "30px",
    link: "https://www.facebook.com/",
    blurb: "Founded in 2004, Facebook's mission is to give people the power to build community and bring the world closer together. People use Facebook to stay connected with friends and family, to discover what's going on in the world, and to share and express what matters to them."
  },
  {
    name: "twosigma.svg",
    height: "30px",
    link: "https://www.twosigma.com/"
  },
  {
    name: "foreflight.png",
    height: "55px",
    link: "https://www.foreflight.com/"
  },
  {
    name: "nov.png",
    height: "30px",
    link: "https://www.nov.com/"
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
    name: "d2k.png",
    height: "70px",
    link: "https://d2k.rice.edu/"
  },
  {
    name: "mlh.svg",
    height: "40px",
    link: "https://mlh.io/"
  },
  {
    name: "kind.png",
    height: "40px",
    link: "https://www.kindsnacks.com/"
  }
].map(item => {
  item.key = `image-${item.name}`;
  return item;
});

export const title = "Sponsored by:";

export const files = [
  {
    name: "cs_department_black.png",
    height: "90px",
    link: "https://csweb.rice.edu/",
    blurb: "Rice University's computer science department is a leading hub for innovative research and education in computer science."
  },
  {
    name: "SLB_Black.png",
    height: "200px",
    link: "https://www.slb.com/",
    blurb: "Schlumberger is the leading provider of technology and services to the energy industry across the world."
  },
  {
    name: "Chevron_Black.png",
    height: "100px",
    link: "https://www.chevron.com/",
    blurb: "Chevron is a global energy company aspiring to be most admired for its people, partnership and performance."
  },
  {
    name: "Capital_One_Black.png",
    height: "80px",
    link: "https://www.capitalone.com/tech/",
    blurb: "Capital One is a leading financial institution celebrated for its innovative technology-driven banking and credit card services."
  },
  {
    name: "MLH_Black.png",
    height: "60px",
    link: "https://mlh.io/",
    blurb: "Major League Hacking (MLH) is a prominent organization at the forefront of fostering innovation and collaboration in the global student technology community."
  },
  {
    name: "ForeFlight_Black.png",
    height: "60px",
    link: "https://foreflight.com/",
    blurb: "ForeFlight is a leading aviation software company renowned for its innovative flight planning and navigation solutions."
  },
  {
    name: "D2K_Black.png",
    height: "120px",
    link: "https://d2k.rice.edu/",
    blurb: "Data to Knowledge at Rice University is a pioneering initiative dedicated to unlocking insights and advancing human understanding through cutting-edge data analysis and research."
  },
  {
    name: "Nord_Security_Black.png",
    height: "70px",
    link: "https://nordsecurity.com/",
    blurb: "Nord Security is a cybersecurity company known for its commitment to protecting digital privacy and providing top-tier online security solutions."
  },
  {
    name: "echo3d_black.png",
    height: "40px",
    link: "https://www.echo3d.com/",
    blurb: "Echo3D is a prominent platform for creating and deploying immersive 3D and augmented reality experiences with ease and efficiency."
  },
  


].map(item => {
  item.key = `image-${item.name}`;
  return item;
});
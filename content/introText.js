/**
 * The text that appears at the top of the hackrice web page.
 * @type {string}
 */
export const intro = "HackRice X";

/**
 * A list of bullet points that introduce the event.
 * @type {{icon : string, button : string, href : string, note : string}[]}
 */
export const bullets = [
  // {
  //   icon: "https://icon.now.sh/compose/ffffff",
  //   button: "view opening slideshow",
  //   href: "https://docs.google.com/presentation/d/13nDqdmwK4NWyTBz4_O8f1gm7KlQJN_QAd4FeqJN4ac8/edit?usp=sharing",
  //   note: "view the slides from the opening ceremony!"
  // },

  // {
  //   icon: "https://icon.now.sh/compose/ffffff",
  //   button: "Sign up for updates",
  //   href: "https://forms.gle/ggfHhPSYHVD3WEFT8",
  //   note: "We'll let you know when applications are open!"
  // },

  {
    icon: "https://icon.now.sh/compose/ffffff",
    button: "Apply here",
    href: "https://hrx-registration.herokuapp.com/",
    note: "applications are now open!"
  },

  {
    icon: "https://icon.now.sh/calendar/ffffff",
    button: "September 18–20, 2020",
    href:
      "https://calendar.google.com/event?action=TEMPLATE&tmeid=Mm0zMTU5bHJqbzJ0b2ZxNnJ0MnJndHJqaTMgY3c3NEByaWNlLmVkdQ&tmsrc=cw74%40rice.edu",
    note: "36 hours of non-stop building"
  },

  {
    icon: "https://icon.now.sh/wb_sunny/ffffff",
    button: "held virtually",
    href: "https://maps.google.com/",
    note: "participate from anywhere and everywhere"
  }
  
].map(bullet => {
  bullet.key = `bullet-${bullet.button}`;
  return bullet;
});
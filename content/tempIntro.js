export const intro = "HackRice 9: Coming Soon...";

export const bullets = [
  {
    icon: "https://icon.now.sh/calendar/ffffff",
    button: "September 20–22, 2019",
    href:
      "https://calendar.google.com/event?action=TEMPLATE&tmeid=MnN1MjB1bWdiMGt2cWFtbWl1dXE1aWt0Z3AgYXZzN0ByaWNlLmVkdQ&tmsrc=achal%40rice.edu",
    note: "36 hours of non-stop building"
  },
  {
    icon: "https://icon.now.sh/wb_sunny/ffffff",
    button: "held @ rice memorial center",
    href: "https://goo.gl/maps/mnRG8hDRQj52",
    note: "on our majestic campus in houston"
  }
].map(bullet => {
  bullet.key = `bullet-${bullet.button}`;
  return bullet;
});

export const cards = [
  {
      icon: "https://icon.now.sh/compose/ffffff",
      title: "Registration...",
      href: "#",
      text: "Hasn't opened yet! Please check in later."
  },
  {
    icon: "https://icon.now.sh/send/ffffff",
    title: "Sponsors",
    href: "../static/sponsorPacket.pdf",
    text: "Thanks for your interest! Check out our sponsorship packet →"
  },
  {
    icon: "https://icon.now.sh/phone/ffffff",
    title: "Contact",
    href: "mailto:hack@rice.edu",
    text: "Have a question? Reach out via email →"
  }
].map(card => {
  card.key = `card-${card.title}`;
  return card;
});

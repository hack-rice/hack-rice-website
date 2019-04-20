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
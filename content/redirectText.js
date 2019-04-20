export const intro = "HackRice 9: Redirecting to sponsorship package...";

export const bullets = [
  {
    icon: "https://icon.now.sh/calendar/ffffff",
    button: "Click here",
    href: "../static/sponsorships.pdf",
    note: "If you haven't been redirected to the sponsorship package."
  }
].map(bullet => {
  bullet.key = `bullet-${bullet.button}`;
  return bullet;
});
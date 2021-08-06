/**
 * The heading that appears while a user is being redirected.
 * @type {string}
 */
export const intro = "HackRice 11: Redirecting to sponsorship package...";

/**
 * A list of bullet points that help a user if the page doesn't redirect.
 * @type {{button: string, note: string, icon: string, href: string}[]}
 */
export const bullets = [
  {
    icon: "../static/bulletPoint.png",
    button: "Click here",
    href: "../static/sponsorPacket.pdf",
    note: "If you haven't been redirected to the sponsorship package."
  }
].map(bullet => {
  bullet.key = `bullet-${bullet.button}`;
  return bullet;
});

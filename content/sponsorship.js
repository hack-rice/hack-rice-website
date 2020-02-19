/**
 * The title of our sponsoship info section.
 *
 * @type {string} title
 */
export const title = "Interested in Sponsoring?";

/**
 * Bullet list for sponsorship info.
 * @type {{icon : string, button : string, href : string, note : string}[]}
 */
export const bullets = [
    {
      icon: "https://icon.now.sh/assessment/ffffff",
      button: "Sponsorship Prospectus",
      href: "../static/hrxprospectus.pdf",
    },
  
    {
      icon: "https://icon.now.sh/tag/ffffff",
      button: "Sponsorship Brochure",
      href: "../static/hrxbrochure.pdf",
    },
  ].map(bullet => {
    bullet.key = `bullet-${bullet.button}`;
    return bullet;
  });
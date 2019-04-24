/**
 * The list that contains all of the card data.
 * @type {{icon : string, title : string, href : string, text : string}[]}
 */
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
    href: "../static/sponsorships.pdf",
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
/**
 * The list that contains all of the card data.
 * @type {{icon : string, title : string, href : string, text : string}[]}
 */
export const cards = [
  {
    icon: "https://icon.now.sh/compose/ffffff",
    title: "Rice Student Registration",
    href: "https://forms.gle/wLN8cmDXp9nnJ18q6",
    text: "Are you a Rice student? Register for HackRice 9 →"
  },
  {
    icon: "https://icon.now.sh/compose/ffffff",
    title: "(Outside of Rice) Portal",
    href: "https://hr9-registration.herokuapp.com",
    text: "Registration has closed for students outside Rice! Visit our registration portal →"
  },
  {
    icon: "https://icon.now.sh/send/ffffff",
    title: "Sponsor",
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
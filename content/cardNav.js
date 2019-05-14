/**
 * The list that contains all of the card data.
 * @type {{icon : string, title : string, href : string, text : string}[]}
 */
export const cards = [
  {
    icon: "https://icon.now.sh/compose/ffffff",
    title: "Register",
    href: "https://hr9-registration.herokuapp.com",
    text: "Registration is open for students outside of Rice! Apply now →"
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
  },
  {
    icon: "https://icon.now.sh/check/ffffff",
    title: "Subscribe",
    href: "https://forms.gle/qhbkpBJdJT59Tj3T8",
    text: "Follow HackRice and receive updates, reminders, and more →"
  }
].map(card => {
  card.key = `card-${card.title}`;
  return card;
});
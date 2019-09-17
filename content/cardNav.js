/**
 * The list that contains all of the card data.
 * @type {{icon : string, title : string, href : string, text : string}[]}
 */
export const cards = [
  {
    icon: "https://icon.now.sh/compose/ffffff",
    title: "Rice Registration",
    href: "https://forms.gle/wLN8cmDXp9nnJ18q6",
    text: "Are you a Rice student? Register for HackRice 9 →"
  },
  {
    icon: "https://icon.now.sh/external/ffffff",
    title: "(Non-Rice) Portal",
    href: "https://hr9-registration.herokuapp.com",
    text: "Registration has closed for students outside Rice! Visit our registration portal →"
  },
  {
    icon: "https://icon.now.sh/attach_money/ffffff",
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
    icon: "https://icon.now.sh/slack/ffffff",
    title: "Slack",
    href: "https://join.slack.com/t/hackrice9/shared_invite/enQtNzUwMjg3MzAyMjQ2LWExOGI4YjQ0NTk3ZWMzZThiNzczMTgxMTAxYjhiMTkzYTVlZWQ5ODU2NDllM2YyNmM5NGYzZmZlODYyZmJkOGY",
    text: "Want to stay connected with the event? Join our Slack channel →"
  },
  {
    icon: "https://icon.now.sh/lightbulb_outline/ffffff",
    title: "Forum",
    href: "https://rice-forum.herokuapp.com",
    text: "Have an awesome hackathon idea? Share it on Forum →"
  }
].map(card => {
  card.key = `card-${card.title}`;
  return card;
});
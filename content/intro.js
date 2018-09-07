export const intro = "HackRice 8: the premier hackathon of the south.";

export const bullets = [
  {
    icon: "https://icon.now.sh/compose/ffffff",
    button: "apply now",
    href: "",
    note: "out-of-rice applications have closed!"
  },
  {
    icon: "https://icon.now.sh/calendar/ffffff",
    button: "september 14–16, 2018",
    href: "",
    note: "36 hours of non-stop building"
  },
  {
    icon: "https://icon.now.sh/wb_sunny/ffffff",
    button: "held @ rice memorial center",
    href: "",
    note: "on our majestic campus in houston"
  }
].map(bullet => {
  bullet.key = `bullet-${bullet.button}`;
  return bullet;
});

export const cards = [
  {
    icon: "https://icon.now.sh/calendar/ffffff",
    title: "Schedule",
    to: "calendar",
    text: "Find out when hacking begins and ends, and more →"
  },
  {
    icon: "https://icon.now.sh/question_answer/ffffff",
    title: "FAQs",
    to: "faq",
    text: "First timer? Most of your inquiries are answered →"
  },
  {
    icon: "https://icon.now.sh/bitcoin/ffffff",
    title: "Sponsors",
    href: "../static/sponsors.pdf",
    text: "Want to recruit & mentor our hackers? View tiers →"
  },
  {
    icon: "https://icon.now.sh/format_shapes/ffffff",
    title: "Judging",
    to: "judging",
    text: "How will your project be evaluated? Read on →"
  },
  {
    icon: "https://icon.now.sh/insert_comment/ffffff",
    title: "About",
    to: "about",
    text: "Read about the mission behind HackRice →"
  },
  {
    icon: "https://icon.now.sh/phone/ffffff",
    title: "Contact",
    href: "mailto:achal@rice.edu",
    text: "Have a question? Reach out via email →"
  },
  {
    icon: "https://icon.now.sh/casino/ffffff",
    title: "Prizes",
    to: "faq",
    text: "What can you win at HackRice? Worth a look →"
  },
  {
    icon: "https://icon.now.sh/map/ffffff",
    title: "Maps",
    href: "https://www.rice.edu/maps/Rice-University-Color-Campus-Map.pdf",
    text: "Need help finding your way around Rice? →"
  },
  {
    icon: "https://icon.now.sh/slack/ffffff",
    title: "Slack",
    href: "https://hackrice8.slack.com",
    text: "Join our Slack to meet hackers & receive updates →"
  }
].map(card => {
  card.key = `card-${card.title}`;
  return card;
});

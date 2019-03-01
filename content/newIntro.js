export const cards = [
  {
    icon: "https://icon.now.sh/send/ffffff",
    title: "Submissions",
    href: "https://hackrice8.devpost.com/",
    text: "Submit your project through the HackRice Devpost →"
  },
  {
    icon: "https://icon.now.sh/calendar/ffffff",
    title: "Schedule",
    to: "calendar",
    text: "Find out when hacking begins and ends, and more →"
  },
  {
    icon: "https://icon.now.sh/question_answer/FFFFFF/",
    title: "FAQs",
    to: "faq",
    text: "First timer? Most of your inquiries are answered →"
  },
  {
    icon: "https://icon.now.sh/done_all/ffffff",
    title: "Tracks",
    to: "tracks",
    text: "Complete a track to win a prize →"
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
].map(card => {
  card.key = `card-${card.title}`;
  return card;
});

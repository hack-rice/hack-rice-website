export const cards = [
  {
      icon: "https://icon.now.sh/compose/ffffff",
      title: "Register",
      href: "https://www.google.com/maps?safe=strict&rlz=1C1CHBF_enUS799US799&q=lilie+idea+lab&um=1&ie=UTF-8&sa=X&ved=0ahUKEwj9m8aBrL_gAhVIlKwKHUpFDzAQ_AUIESgE",
      text: "If you haven't registered, now is the time! →"
  },
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
    icon: "https://icon.now.sh/question_answer/ffffff",
    title: "FAQs",
    to: "faq",
    text: "First timer? Most of your inquiries are answered →"
  },
  {
    icon: "https://icon.now.sh/format_shapes/ffffff",
    title: "Judging",
    to: "judging",
    text: "How will your project be evaluated? Read on →"
  },
  {
    icon: "https://icon.now.sh/done_all/ffffff",
    title: "Tracks & Challenges",
    to: "tracks",
    text: "Complete a track or compete to win a sponsor challenge →"
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
  }
].map(card => {
  card.key = `card-${card.title}`;
  return card;
});

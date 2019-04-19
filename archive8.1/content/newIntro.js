export const cards = [
  {
      icon: "https://icon.now.sh/compose/ffffff",
      title: "Register",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSfIFYOps4mVOVhfhgxmW4kzR3yxviEFc5zATsugW3ITEUrjfQ/viewform?usp=sf_link",
      text: "If you haven't registered, now is the time! →"
  },
  {
    icon: "https://icon.now.sh/send/ffffff",
    title: "Submissions",
    href: "http://hackrice-8-5.devpost.com",
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
    icon: "https://icon.now.sh/call_split/ffffff",
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
    icon: "https://icon.now.sh/monetization_on/ffffff",
    title: "Prizes",
    to: "prizes",
    text: "What can you win at HackRice? Worth a look →"
  },
  {
    icon:"https://icon.now.sh/person_pin_circle/ffffff",
    title: "Find a Mentor",
    href: "https://hackrice-helpq.herokuapp.com/",
    text: "Looking for a mentor? Find one here! →"
  }
].map(card => {
  card.key = `card-${card.title}`;
  return card;
});

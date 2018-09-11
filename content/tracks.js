export const title = "Tracks & Challenges";

export const cards = [
  {
    icon: "https://icon.now.sh/bubble_chart/ffffff",
    type: "track",
    title: "Build a bot!",
    href: "https://github.com/jpa99/HR8-First-Timers-Track",
    text:
      "Hackers will create a bot integrated with an existing platform (e.g. Facebook Messenger, Slack, Alexa, Twitter, Reddit, etc.). First-time hackers can follow the provided walkthrough to set up a basic bot, and then extend it to provide additional functionality. Examples include connecting to a DB and storing user information, integrating ML/NLP for contextual rather than rules-based conversation, creating a specific service (e.g. pizza delivery), allowing users to play a game, etc. Judges will evaluate the project on its technical difficulty, effectiveness, creativity, and quality of user experience."
  },
  {
    icon: "https://icon.now.sh/timeline/ffffff",
    type: "track",
    title: "Play with data!",
    href: "https://github.com/abhmul/DataScienceTrack",
    text: "Have you ever looked for shoes online and found related advertisements on facebook and other websites continuously for a week? Or say, you’re chatting with your best friend and the keyboard suggests you the exact words that you want to use in your sentence? How does YouTube show all your favourite videos on your homescreen?\nWell these are all applications of Data Science. Over the last few years Data Science has really changed our concept of technology. Our lives are a lot easier as compared to 10yrs ago, and this is all because of data science. Data Science has really pulled the ends between fiction and technology. Right from LinkedIn to Tinder, data science is being used everywhere.\nThis tutorial will give you a brief introduction into some basic applications of machine learning and data science along with example prompts to compete in this track. To compete though, any data science project will do."
  },
  {
    icon: "https://icon.now.sh/border_color/ffffff",
    type: "track",
    title: "Design a beautiful app!",
    href: "https://github.com/jpa99/HR8-Design-Track",
    text: "Accessibility and visual appeal are vital attributes of any app or website’s user interface. While still remaining functional on the back end, many apps and websites on many different platforms have deplorable user interfaces that needs lots of work.  This year’s HackRice “reDesign” track hopes to improve those interfaces.  Using your knowledge of design and graphics, you will be tasked with redesigning the user interface of an app or website used by the public today that you believe needs overhaul."
  }
].map(card => {
  card.key = `card-${card.title}`;
  return card;
});

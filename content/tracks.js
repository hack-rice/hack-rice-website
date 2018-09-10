export const title = "Tracks & Challenges";

export const cards = [
  {
    icon: "https://icon.now.sh/bubble_chart/ffffff",
    type: "track",
    title: "Build a bot!",
    href: "",
    text:
      "Hackers will create a bot integrated with an existing platform (e.g. Facebook Messenger, Slack, Alexa, Twitter, Reddit, etc.). First-time hackers can follow the provided walkthrough to set up a basic bot, and then extend it to provide additional functionality. Examples include connecting to a DB and storing user information, integrating ML/NLP for contextual rather than rules-based conversation, creating a specific service (e.g. pizza delivery), allowing users to play a game, etc. Judges will evaluate the project on its technical difficulty, effectiveness, creativity, and quality of user experience."
  },
  {
    icon: "https://icon.now.sh/timeline/ffffff",
    type: "track",
    title: "Play with data!",
    href: "",
    text: "Information about this track is coming soon!"
  },
  {
    icon: "https://icon.now.sh/border_color/ffffff",
    type: "track",
    title: "Design a beautiful app!",
    href: "",
    text: "Information about this track is coming soon!"
  }
].map(card => {
  card.key = `card-${card.title}`;
  return card;
});

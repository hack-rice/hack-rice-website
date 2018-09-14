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
    title: "Make sense of data!",
    href: "https://github.com/abhmul/DataScienceTrack",
    text:
      "Have you shopped online and found advertisements on Facebook and Google for the same item? Or, say you’re chatting with your best friend and the keyboard suggests to you the exact words that you want to use in your sentence? How does YouTube recommend such great videos?\nData science & machine learning have changed the usability of technology. This track will give you a brief introduction into some basic applications of machine learning and data science along with example prompts to compete in this track."
  },
  {
    icon: "https://icon.now.sh/border_color/ffffff",
    type: "track",
    title: "(re)Design a beautiful app!",
    href: "https://github.com/jpa99/HR8-Design-Track",
    text:
      "Accessibility and visual appeal are vital attributes of any app or website’s user interface. While still remaining functional on the back end, many apps and websites on many different platforms have deplorable user interfaces that needs lots of work.  This year’s HackRice “reDesign” track hopes to improve those interfaces.  Using your knowledge of design and graphics, you will be tasked with redesigning the user interface of an app or website used by the public today that you believe needs overhaul"
  },
  {
    icon: "https://icon.now.sh/chevron/ffffff",
    type: "challenge",
    title: "Chevron",
    text:
      "Optimize the work order process in Chevrons complex process facilities (refineries and liquified natural gas production facilities).  The idea is to optimize work order completions by having a system that tracks (1) the orders that are submitted and (2) the workers that are completing them (including any necessary certifications / qualifications) to optimize how they are assigned and completed."
  },
  {
    icon: "https://icon.now.sh/local_gas_station/ffffff",
    type: "challenge",
    title: "Schlumberger",
    href: "https://github.com/Schlumberger/hackathon/",
    text:
      "Ask an engineer how to improve an application, and they will likely say, 'give me a way to see more data'. Surveillance engineers may analyze output from a dozen or more sensors in the same visualization.​ Line charts are the default choice for this workflow, but they are cumbersome, especially if the data streams have different scaling and units. And as IIoT becomes pervasive at the wellsite, this problem will only grow.​ Show us how to do it better! Deliver a web application to display/query/analyze time-series data from downhole equipment in innovative ways.​​"
  },
  {
    icon: "https://icon.now.sh/poll/ffffff",
    type: "challenge",
    title: "HBK",
    text:
      "The winner of this project will demonstrate the best use of technology for a financially driven problem."
  },
  {
    icon: "https://icon.now.sh/microsoft/ffffff",
    type: "challenge",
    title: "Microsoft",
    text:
      "The winner of this challenge will best utilize Microsoft API’s in their hackathon project."
  },
  {
    icon: "https://icon.now.sh/web/ffffff",
    type: "challenge",
    href:
      "https://docs.google.com/document/d/1yKpxWSMUDDJjBQIiDxlCc3Fta7OwZ9GbHRpQ0fC1y_U/edit?usp=sharing",
    title: ".TECH",
    text:
      "Feature your cool hackathon project on your free .tech domain name. Make sure to make your full .tech domain your official team name and mention the URL while submitting your project! Click through for more details."
  },
  {
    icon: "https://icon.now.sh/domain/ffffff",
    type: "challenge",
    title: "Capital One",
    text:
      "The winner of this challenge will best answer the following question: how will you reimagine banking?"
  },
  {
    icon: "https://icon.now.sh/merge_type/ffffff",
    type: "challenge",
    title: "Indeed",
    text:
      " We would like to see innovative projects and solutions that tackle societal problems. This could be anything from connecting unemployed jobseekers to jobs to linking hurricane victims to disaster relief resources."
  },
  {
    icon: "https://icon.now.sh/report_problem/ffffff",
    type: "challenge",
    title: "JP Morgan Chase",
    text: "Information about this challenge is coming soon."
  },
  {
    icon: "https://icon.now.sh/report_problem/ffffff",
    type: "challenge",
    title: "LILIE Center Challenge",
    text: "Information about this challenge is coming soon."
  }
].map(card => {
  card.key = `card-${card.title}`;
  return card;
});

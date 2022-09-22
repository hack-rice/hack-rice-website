export const title = "Schedule";
export const note = "Please refer to your Hacker Handbook (emailed to you) for passwords and more details."

export const dayOne = "Friday 9/23";
export const dayTwo = "Saturday 9/24";
export const dayThree = "Sunday 9/25";

export const friday = [
  {
    time: "4 PM",
    title: "Check-in + Team Mixer",
    detail: "Check in, and meet other hackers to form teams (if you haven't already)!"
  },
  {
    time: "5 PM",
    title: "Sponsor networking",
    detail: "Meet our sponsors!"
  },
  {
    time: "7 PM",
    title: "Opening Ceremony",
    detail:
      "The event will formally begin with a bit about rules & guidelines, and a word from sponsors."
  },
  {
    time: "7:30 PM",
    title: "Dinner",
    detail:
      "Indulge in some delicious Indian food catered by Aga's!"
  },
  {
    time: "8 PM",
    title: "Hacking Begins!",
    detail: "Start building your project!"
  },
  {
    time: "8:30 PM",
    title: "Intro to Git/GitHub Workshop",
    detail:
        "Learn the basis of Git and GitHub to start collaborating efficiently with your team!"
  },
  {
    time: "9:30 PM",
    title: "First Timer's Workshop",
    detail:
      "Workshop for our first time hackathon attendees. Located in Willy's Pub."
  },
  {
    time: "9:30 PM",
    title: "Data Science Workshop",
    detail: "A crash course in the basics of data science. Located in Farnsworth Pavilion."
  },
  {
    time: "11:30 PM",
    title: "Late Night Snack",
    detail:
        "Join us for a surprise late night snack!"
  }
].map(item => {
  item.key = `item-${item.title}`;
  return item;
});

export const saturday = [
  {
    time: "10 AM",
    title: "Resume Review Workshop",
    detail: "Get some helpful tips on your resume to bring you one step closer to your dream job!"
  },
  {
    time: "12:30 PM",
    title: "Lunch and Panel",
    detail: "Grab some banh mi catered by Oui Banh Mi!"
  },
  {
    time: "2 PM",
    title: "Diversity in Tech Panel",
    detail: "Our panelists will share and discuss their experiences, advice, and more!"
  },
  {
    time: "4 PM",
    title: "MLH Activity",
    detail: "A capture the flag activity hosted by MLH!"
  },
  {
    time: "7:30 PM",
    title: "Dinner",
    detail: "Fuel up for the night with Thai food catered by Thai Village!"
  },
  {
    time: "10:00 PM",
    title: "Raffle",
    detail: "Enter our raffle to win some cool merch!"
  },
  {
    time: "11:00 PM",
    title: "Late Night Activity",
    detail: "Surprise late night activity!"
  }
].map(item => {
  item.key = `item-${item.detail}`;
  return item;
});

export const sunday = [
    {
        time: "8:30 AM",
        title: "Breakfast",
        detail: "Early morning snack provided by Kolache Factory."
    },
  {
    time: "9 AM",
    title: "Hacking Ends!",
    detail: "Submissions close on Devpost."
  },
  {
    time: "9:30 AM",
    title: "Judging Begins",
    detail: "Judges begin reviewing your submissions!"
  },
  {
    time: "2 PM",
    title: "Top 5 Teams Present",
    detail: "We'll announce the top 5 finalists and invite them to present live in front of our judges!"
  },
  {
    time: "3 PM",
    title: "Closing Ceremony",
    detail: "Winners will be announced and prizes awarded"
  }
].map(item => {
  item.key = `item-${item.detail}`;
  return item;
});

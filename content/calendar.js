export const title = "Schedule";
export const note = "Please refer to your Hacker Handbook (emailed to you) for more details!"

export const dayOne = "Friday 9/22";
export const dayTwo = "Saturday 9/23";
export const dayThree = "Sunday 9/24";

export const friday = [
  {
    time: "4:00 PM",
    title: "Rice Student Check-in",
    detail: "Check in for Rice students!"
  },
  {
    time: "4:15 PM",
    title: "Non-Rice Student Check-in",
    detail: "Check in for Non-Rice students!"
  },
  {
    time: "4:15 - 5:45 PM",
    title: "MatLab Workshop",
    detail:
      "An introduction to machine learning with MatLab at Farnsworth Pavilion."
  },
  {
    time: "5:00 - 7:00 PM",
    title: "Sponsorship Networking",
    detail:
      "Network with our sponsors at Sammy's!"
  },
  {
    time: "7:00 PM",
    title: "Opening Ceremony!",
    detail: "We will be detailing the tracks/challenges, prizes, sponsorship, and more!"
  },
  {
    time: "7:30 PM",
    title: "Dinner!",
    detail: "Come to Ray Courtyard for La Tapatia: al Pastor/beef street tacos, spinach enchiladas, and chips/salsa!"
  },
  {
    time: "7:30-8:00 PM",
    title: "Form teams and hang out.",
    detail: "Meet or find your teammates during this time, and prepare for the hackathon!"
  },
  {
    time: "8:00 PM",
    title: "Hacking begins!",
    detail: "The hackathon begins! Start hacking!"
  },
  {
    time: "8:30 - 9:30 PM",
    title: "Intro to Git/GitHub Workshop",
    detail: "Learn the basis of Git and GitHub to start collaborating efficiently with your team at Farnsworth Pavilion!"
  },
  {
    time: "9:30 - 10:30 PM",
    title: "First Timer's Workshop",
    detail:
        "Learn the basis of the First Timer's track (Discord Bot) with our committee members at Farnsworth Pavilion!."
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
    time: "10:30 - 12:00 PM",
    title: "Chevron Workshop",
    detail: "Join Chevron Software Engineer, Syed Husain, in building an app that measures vehicular carbon emissions in Angular."
  },
  {
    time: "12:00 PM",
    title: "Lunch!",
    detail: "Grab some thai food catered by Thai Village!"
  },
  {
    time: "1:00 - 2:00 PM",
    title: "Data Science Workshop",
    detail: "Come to see Anthony Yan talk about sentiment analysis and how to use it in your hack at Farnsworth Pavilion!"
  },
  {
    time: "2:00 - 3:00 PM",
    title: "Resume Workshop",
    detail: "Start or get help with your resume from two Peer Career Advisors: Katharine Bonilla and Phillip Tran!"
  },
  {
    time: "4:00 PM",
    title: "MLH Activity",
    detail: "Join MLH for a Bob Ross MS mini-event!"
  },
  {
    time: "7:00 PM",
    title: "Dinner!",
    detail: "Come and grab some Aga's for dinner!"
  },
  {
    time: "8:00 PM",
    title: "Raffle",
    detail: "Join in our raffle, and win the secret prize!"
  },
  {
    time: "11:00 PM",
    title: "Late Night Snack",
    detail: "Feeling hungry late at night? Grab some of our late night food options!"
  }
].map(item => {
  item.key = `item-${item.detail}`;
  return item;
});

export const sunday = [
  {
      time: "8:30 AM",
      title: "Breakfast!",
      detail: "Early morning snack provided by Le Donut."
  },
  {
    time: "9:00 AM",
    title: "Hacking Ends!",
    detail: "Submissions close on Devpost."
  },
  {
    time: "9:30 AM",
    title: "Judging Begins",
    detail: "Judges begin reviewing your submissions!"
  },
  {
    time: "2:00 - 2:30 PM",
    title: "Top 5 Teams Present",
    detail: "We'll announce the top 5 finalists and invite them to present live in front of our judges!"
  },
  {
    time: "3:00 - 3:30 PM",
    title: "Closing Ceremony",
    detail: "Winners will be announced and prizes awarded!"
  }
].map(item => {
  item.key = `item-${item.detail}`;
  return item;
});

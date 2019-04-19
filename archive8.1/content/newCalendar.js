export const title = "Schedule";

export const dayOne = "Friday, 3/1";
export const dayTwo = "Saturday, 3/2";

export const friday = [
  {
    time: "5 - 7:00 PM",
    title: "Registration",
    detail: "Check into the hackathon with your team! If you have not signed up, now's the time to do it."
  },
  {
    time: "7-7:15 PM",
    title: "Opening Ceremonies",
    detail: "Hear the rules around the hackathon, and some other useful information."
  },
  {
    time: "7:15 PM",
    title: "Hacking Begins!",
    detail: "Start building your projects!"
  },
  {
    time: "8:30 PM",
    title: "GCP Workshop",
    detail:
      "Learn about Google Cloud Platform from your campus representatives."
  },
  {
    time: "11 PM",
    title: "Late Night Grub",
    detail:
      "Taco Bell will arrive around 11..."
  }
].map(item => {
  item.key = `item-${item.title}`;
  return item;
});

export const saturday = [
  {
    time: "8 AM",
    title: "Breakfast",
    detail: "To be announced."
  },
  {
    time: "12 PM",
    title: "Lunch",
    detail: "To be announced."
  },
  {
    time: "5 PM",
    title: "Dinner",
    detail: "To be announced."
  },
  {
    time: "5:30 PM",
    title: "Presentation Workshop",
    detail: "Not sure how to talk about your project to an impartial observer? Learn more here."
  },
  {
      time: "7:15 PM",
      title: "Hacking Ends",
      detail: "No more coding! No more designing! All final touches should be complete."
  },
  {
    time: "7:30 PM",
    title: "Judging Begins",
    detail: "Judges will be walking around to projects to evaluate their excellence."
  },
  {
    time: "8:30 PM",
    title: "Judging Ends",
    detail: "Judges will submit their evaluations of projects at this time."
  },{
    time: "8:30 PM",
    title: "Final Presentations",
    detail: "Watch the final teams present their projects, followed by winding down with our closing ceremonies."
  }
].map(item => {
  item.key = `item-${item.detail}`;
  return item;
});
export const title = "Schedule";

export const dayOne = "Friday, 3/1";
export const dayTwo = "Saturday, 3/2";

export const friday = [
  {
    time: "5-7:00 PM",
    title: "Check-In and Walk Ins",
    detail: "Walk in registration begins."
  },
  {
    time: "7-7:15 PM",
    title: "Opening Ceremonies",
    detail: "Come to the lilie to check into the event."
  },
  {
    time: "7:15 PM",
    title: "Hacking Begins!",
    detail: "Start building your project!"
  },
  {
    time: "8:30 PM",
    title: "Google Cloud Workshop",
    detail:
      "Learn about google cloud platform."
  },
  {
    time: "11 PM",
    title: "Late Night Food Arrives",
    detail:
      "Taco Bell..."
  }
].map(item => {
  item.key = `item-${item.title}`;
  return item;
});

export const saturday = [
  {
    time: "8 AM",
    title: "Breakfast",
    detail: ""
  },
  {
    time: "12 PM",
    title: "Lunch",
    detail: "Can't be worse than north saturday lunch."
  },
  {
    time: "5 PM",
    title: "Dinner",
    detail: ""
  },
  {
    time: "5:30 PM",
    title: "Hackathon Presentation Workshop",
    detail: ""
  },
  {
      time: "7:15 PM",
      title: "Hacking Ends",
      detail: ""
  },
  {
    time: "7:30 PM",
    title: "Judging Begins",
    detail: ""
  },
  {
    time: "8:30 PM",
    title: "Judging Ends",
    detail: ""
  },{
    time: "8:30 PM",
    title: "Final Presentations and Closing Ceremonies",
    detail: ""
  }
].map(item => {
  item.key = `item-${item.detail}`;
  return item;
});
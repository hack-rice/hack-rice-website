export const title = "Schedule";

export const dayOne = "Friday, 9/18";
export const dayTwo = "Saturday, 9/19";
export const dayThree = "Sunday, 9/20";

export const friday = [
  {
    time: "5:00–6:55 PM CT",
    title: "Check-in & Networking",
    detail: "Check in and hang out with fellow hackers and our sponsors!"
  },
  {
    time: "7 PM CT",
    title: "Opening Ceremony",
    detail:
      "The event will formally begin with a bit about rules & guidelines, and a word from sponsors."
  },
  {
    time: "7:30 PM CT",
    title: "Dinner & Form Teams",
    detail:
      "Grab a bite together virtually, and meet other hackers to form teams (if you haven't already)."
  },
  {
    time: "8 PM CT",
    title: "Hacking Begins!",
    detail: "Start building your project!"
  },
  {
    time: "9 PM CT",
    title: "First-Timers Track Workshop",
    detail:
      "Our first workshop for the First-Timers track."
  },
  {
    time: "10 PM CT",
    title: "Workshop 2",
    detail:
        "Description"
  }
].map(item => {
  item.key = `item-${item.title}`;
  return item;
});

export const saturday = [
  {
    time: "9 AM CT",
    title: "Breakfast",
    detail: "Hop on for a virtual breakfast and a raffle!"
  },
  {
    time: "10 AM CT",
    title: "Workshop",
    detail: "Come to Farnsworth Pavilion to hear representatives from GE Healthcare talk about ..."
  },
  {
    time: "12 PM CT",
    title: "Lunch and Speaker",
    detail: "Come hear about X from Y."
  },
  {
    time: "1 PM CT",
    title: "Workshop",
    detail: "Description"
  },
  {
    time: "7:30 PM CT",
    title: "Dinner",
    detail: "Description."
  }
].map(item => {
  item.key = `item-${item.detail}`;
  return item;
});

export const sunday = [
  {
    time: "9:00 AM",
    title: "Hacking Ends!",
    detail: "Submissions close on DevPost."
  },
  {
    time: "9:30 AM",
    title: "Judging Begins",
    detail: "Judging commences!"
  },
  {
    time: "11 AM",
    title: "Brunch",
    detail: "Get some yummy food and tune in for our final raffle!"
  },
  {
    time: "11:30 AM",
    title: "Finalists Judging",
    detail: "The top 5 projects will present live!"
  },
  {
    time: "1 PM",
    title: "Closing Ceremony",
    detail: "Winners will be announced and prizes awarded"
  },
  {
    time: "2 PM",
    title: "Finale!",
    detail: "Hope you had a wonderful event, and we look forward to HackRice 11 :)"
  }
].map(item => {
  item.key = `item-${item.detail}`;
  return item;
});

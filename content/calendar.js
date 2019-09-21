export const title = "Schedule";

export const dayOne = "Friday, 9/20";
export const dayTwo = "Saturday, 9/21";
export const dayThree = "Sunday, 9/22";

export const friday = [
  {
    time: "5:30–6:55 PM",
    title: "Hacker Check in",
    detail: "Come to the Grand Hall to check into the event."
  },
  {
    time: "5–7:00 PM",
    title: "Sponsor Setup",
    detail: "Sponsors will arrive, register & set up their tables."
  },
  {
    time: "7 PM",
    title: "Opening Ceremonies",
    detail:
      "The event will formally begin with a bit about rules & guidelines, and a word from sponsors."
  },
  {
    time: "7:30 PM",
    title: "Dinner & Form Teams",
    detail:
      "Enjoy food from Thai Cottage and meet other hackers to form teams (if you haven't already)."
  },
  {
    time: "8 PM",
    title: "Hacking Begins!",
    detail: "Start building your project!."
  },
  {
    time: "9 PM",
    title: "First-Timers Track Workshop",
    detail:
      "Come to Farnsworth Pavilion to walk through the first workshop for the First-Timers track."
  },
  {
    time: "10 PM",
    title: "Bill.com Workshop",
    detail:
        "Come to Farnsworth Pavilion to hear representatives from Bill.com talk about their challenge and best practices."
  }
].map(item => {
  item.key = `item-${item.title}`;
  return item;
});

export const saturday = [
  {
    time: "9 AM",
    title: "Breakfast",
    detail: "Bagels from Einstein Bros!"
  },
  {
    time: "9:30 AM",
    title: "GE Healthcare Workshop",
    detail: "Come to Farnsworth Pavilion to hear representatives from GE Healthcare talk about ..."
  },
  {
    time: "9:30 AM",
    title: "JP Morgan Workshop",
    detail: "Come to Farnsworth Pavilion to hear representatives from JP Morgan talk about ..."
  },
  {
    time: "12 PM",
    title: "Lunch",
    detail: "Potbelly Sandwiches for lunch."
  },
  {
    time: "1 PM",
    title: "Schlumberger Workshop",
    detail: "Come to Farnsworth Pavilion to hear representatives from Schlumberger talk about ..."
  },
  {
    time: "7:30 PM",
    title: "Dinner",
    detail: "More details to come..."
  }
].map(item => {
  item.key = `item-${item.detail}`;
  return item;
});

export const sunday = [
  {
    time: "8:30 AM",
    title: "Judges Arrive",
    detail: "Judges will have arrived, prepared to evaluate hackers & projects."
  },
  {
    time: "9:00 AM",
    title: "Hacking Ends!",
    detail: "Submissions close on DevPost."
  },
  {
    time: "9:30 AM",
    title: "Judging Begins",
    detail: "Judging commences at the tables in the Grand Hall."
  },
  {
    time: "11 AM",
    title: "Brunch",
    detail: "More details to come..."
  },
  {
    time: "11:30 AM",
    title: "Presentation Judging",
    detail: "The top 5 projects will present in the RMC."
  },
  {
    time: "1 PM",
    title: "Closing Ceremony",
    detail: "Winners will be announced and prizes awarded"
  },
  {
    time: "2 PM",
    title: "Finale!",
    detail:
      "Hope you had a wonderful event, and we look forward to HackRice 10 :)"
  }
].map(item => {
  item.key = `item-${item.detail}`;
  return item;
});

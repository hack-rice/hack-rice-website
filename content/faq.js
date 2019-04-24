/**
 * The title of the section.
 * @type {string}
 */
export const title = "QUESTIONS & ANSWERS";

/**
 * A list of questions and answers.
 * @type {{question : string, answer : string}[]}
 */
export const questions = [
  {
    question: "How long is HackRice?",
    answer:
      "The event is held from Friday, September 20th to Sunday, September 22th. Students hack for 36 hours. Stay tuned for more info."
  },
  {
    question: "How many hackers attend HackRice? Where are they from?",
    answer:
      "We expect around 400 hackers from schools around the country, including (but not limited to) UT Austin, Berkeley, USC, University of Waterloo, Georgia Tech, University of Washington, and many more."
  },
  {
    question: "How many hackers per team are permitted?",
    answer:
      "Team are limited to 4 hackers. That being said, you don't have to have 4 hackers to compete."
  },
  {
    question: "Is there a HackRice Facebook page?",
    answer: (
      <>
        Yes there is! Click{" "}
        <a className="styledlink" href="https://www.facebook.com/hackrice/">
          here
        </a>{" "}
        to access it!
      </>
    )
  },
  {
    question: "Who is eligible to participate in HackRice?",
    answer: (
      <>
        Any current student over the age of 18 is eligible to apply to HackRice.
        Since we are an MLH member event, participants must also accept the{" "}
        <a
          className="styledlink"
          href="http://static.mlh.io/docs/mlh-code-of-conduct.pdf"
        >
          MLH Code of Conduct.
        </a>
      </>
    )
  },
  {
    question: "Will my travel be reimbursed?",
    answer: (
      <>
        Yes! Stay tuned for more information as we finalize the details for HackRice 9.
      </>
    )
  },
  {
    question: "Will there be food?",
    answer:
      "Yes! We will provide catered meals during the day along with snacks and free caffeine through the night to keep you going."
  },
  {
    question: "What are the acceptance criteria?",
    answer:
      "Rice students, alumni, and University of Houston undergraduates are guaranteed acceptance. For Non-Rice students, we ask for some background information so that we can invite people who have demonstrated interest and skill. The admission process will be competitive and rolling! We also will take into account people who have never been to a hackathon before, so please apply!"
  },
  {
    question: "What do I need to bring?",
    answer:
      "Please bring a student and legal ID so we can verify and register you on-site! You'll also need to bring a computer, whatever software you feel might be necessary for development, a sleeping bag, and a pillow. We also recommend that you bring power strips for convenience. Teammates are free to share equipment with each other."
  },
  {
    question: "What if I'm not very experienced?",
    answer:
      "We do our best to point people in the right direction and use tools and languages with a low barrier to entry. There will also be upperclassmen participating in the hackathon who can guide you in the right direction. We will also be having workshops the week before the hackathon!"
  },
  {
    question: "Can Rice alumni attend?",
    answer:
      "Rice alumni are eligible to attend the event to hack or mentor other students, but alumni submissions will not be eligible for prizes. We will not be able to reimburse alumni for travel."
  },
  {
    question: "What if I don't have a team before the event?",
    answer:
      "You don't have to form a team before the event, or at all. At the start of the event, we will provide plenty of time to break out and form a new one if you choose to."
  },
  {
    question: "Do I need to stay the whole time?",
    answer:
      "Nope, we are not a lock-in. We realize that 36 hours is a long time, and that some people might need fresh air or to tend to other commitments. You may leave and go as you deem necessary, though we prefer you to stay!"
  }
].map(item => {
  item.key = `faq-${item.question}`;
  return item;
});

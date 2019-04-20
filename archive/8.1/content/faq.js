export const title = "QUESTIONS & ANSWERS";

export const questions = [
  {
    question: "How long is HackRice?",
    answer:
      "The event is held from Friday, September 14th to Sunday, September 16th. Students hack for 36 hours. View the schedule for more info."
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
    question: "How do I submit my project? Is there a Devpost?",
    answer: (
      <>
        You can submit your project on{" "}
        <a className="styledlink" href="https://hackrice8.devpost.com/">
          this Devpost link
        </a>
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
        Yes! Hackers who ride in team cars or take buses or trains to HackRice
        will receive reimbursement for their travel costs up to $100. <br />
        <br /> Hackers who fly in will recieve reimbursement on a first-come,
        first-served basis. Initially, up to $200 will be provided. As funds are
        exhausted, up to $100 reimbursement will be provided. <br /> <br />{" "}
        Tickets must be standard economy or lower.
      </>
    )
  },
  {
    question: "Will international travel be reimbursed?",
    answer: (
      <>
        We cannot reimburse hackers flying internationally any more than is
        listed above, and international hackers should contact us at{" "}
        <a className="styledlink" href="mailto:officialhackrice@gmail.com">
          officialhackrice@gmail.com
        </a>
      </>
    )
  },
  {
    question: "How do I file for a reimbursement?",
    answer: (
      <>
        To recieve your reimbursement, please fill out the reimbursement section
        of the admission form <b>within one week</b>. There will be a
        reimbursment booth at the event where you will be able to finalize your
        reimbursment details!
      </>
    )
  },
  {
    question: "What prizes can I win?",
    answer: (
      <>
        <table>
          <tr>
            <th>Achievement</th>
            <th>Prize</th>
          </tr>
          <tr>
            <td>Grand Prize</td>
            <td>Juiced Electric Skateboard</td>
          </tr>
          <tr>
            <td>Second Place</td>
            <td>Nintendo Switch</td>
          </tr>
          <tr>
            <td>Third Place</td>
            <td>Fancy Coffee Machine</td>
          </tr>
          <tr>
            <td>New Hackers Track Winner</td>
            <td>Sunrise Alarm Clock</td>
          </tr>
          <tr>
            <td>Data Science Track Winner</td>
            <td>Amazon Echo Plus</td>
          </tr>
          <tr>
            <td>Design Track Winner</td>
            <td>Polaroid Cube</td>
          </tr>
        </table>
      </>
    )
  },
  {
    question: "Will there be free food?",
    answer:
      "Yes! We will provide catered meals during the day along with snacks and free caffeine through the night to keep you going."
  },
  {
    question: "What are the acceptance criteria?",
    answer:
      "Rice students and alumni are guaranteed acceptance. For Non-Rice students, we ask for their previous hackathon and coding experiences, so that we can invite people who have demonstrated interest and skill. The admission process will be competitive and rolling! We also will take into account people who have never been to a hackathon before, so please apply!"
  },
  {
    question: "What do I need to bring?",
    answer:
      "Please bring a student ID so we can verify and register you on-site! You'll also need to bring a computer, whatever software you feel might be necessary for development, sleeping bag, and pillow. We also recommend that you bring power strips for convenience. Teammates are free to share equipment with each other."
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

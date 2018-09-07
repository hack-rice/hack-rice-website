export const title = "Judging Criteria";

export const criteria = [
  {
    subtitle: "Technical Difficulty",
    description:
      "Solutions should address technically challenging problems while falling anywhere between being beautifully simple to implementing complex, cutting-edge technologies."
  },
  {
    subtitle: "Creativity",
    description:
      "Solutions should be original and either (1) define a new method for solving an unaddressed problem, or (2) present a new approach to a proven solution for a known problem. Solutions should demonstrate that intentional and appropriate design decisions have been made."
  },
  {
    subtitle: "Design & Polish",
    description:
      "We are looking for aesthetically and functionally pleasing projects with an intuitive and polished user experience."
  },
  {
    subtitle: "Practicality & Usefulness",
    description:
      "Projects will be evaluated based on their utility and applicability to a set of problems experienced by people in the real world. Emphasis is placed on ensuring solutions can be extrapolated meaningfully outside of the demonstrated use case."
  }
].map(item => {
  item.key = `item-${item.subtitle}`;
  return item;
});

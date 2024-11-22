import { CardStack } from "../components/ui/CardStack";

const FAQPanel = () => {
  return (
    <div className="h-[35rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
};

export default FAQPanel;

const CARDS = [
  {
    id: 0,
    question: "What is Numerology?",
    answer: (
      <p>
        Numerology is an ancient method of finding meaning in numbers to
        understand personality, relationships, and life paths. It helps you
        discover more about yourself and grow as a person.
      </p>
    ),
  },
  {
    id: 1,
    question: "How Does Numerology Work?",
    answer: (
      <p>
        Numerology simplifies big numbers into single digits, each with its own
        unique meaning. By looking at your birth date and name, it reveals your
        strengths, personality, and purpose.
      </p>
    ),
  },
  {
    id: 2,
    question: "Can Numerology Predict the Future?",
    answer: (
      <p>
        Numerology can guide you about future possibilities and opportunities,
        but it's not an exact prediction tool. Your choices and actions shape
        what happens next.
      </p>
    ),
  },
  {
    id: 3,
    question: "Is Numerology Accurate?",
    answer: (
      <p>
        The accuracy of numerology depends on the numerologist's skill, but many
        find it insightful and helpful. It's based on patterns and symbols, not
        science.
      </p>
    ),
  },
];

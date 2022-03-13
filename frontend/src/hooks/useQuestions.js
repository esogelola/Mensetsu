import { useState, useContext, useEffect } from "react";

import { GlobalContext } from "../contexts/GlobalContext";

const useQuestions = () => {
  const [questions, setQuestions] = useState([
    {
      topic: "Algorithms",
      shortDescription:
        "Develop a deep knowledge of data structures. You should understand and be able to talk about different data structures and their strengths, weaknesses, and how they compare to each other",
      Questions: [
        "How can we compare between two algorithms written for the same problem?",
        "What do you understand by the best case, worst case and average case scenario of an algorithm? ",
        "What do you understand by the Asymptotic Notations?",
        "Explain the Divide and Conquer Algorithmic Paradigm.",
      ],
    },
    {
      topic: "Data Structures",
      shortDescription:
        " DS provides different ways of data organization so we have options to store the data in different data structures based on the requirement.",
      Questions: [
        "Can you explain the difference between file structure and storage structure?",
      ],
    },
    {
      topic: "Behavioral",
      shortDescription:
        "Questions based on how you acted in a specific situation. They're meant to gauge how you react to stress, what's your skill-level, and how you conduct yourself in a professional environment.",
      Questions: [
        "Give us an example of a goal you failed to meet, and how you handled the situation.",
      ],
    },
    {
      topic: "Database",
      shortDescription:
        "Database interview questions are open-ended questions asked by an interviewer to assess your expertise in database management.",
      Questions: ["What is the different between NOSQL & SQL"],
    },
    {
      topic: "A.I",
      shortDescription:
        "AI technology is important because it enables human capabilities – understanding, reasoning, planning, communication and perception – to be undertaken by software increasingly effectively, efficiently and at low cost. ",
      Questions: ["Give an example of an AI project."],
    },
    {
      topic: "Shell",
      shortDescription:
        "Using a shell script is most useful for repetitive tasks that may be time consuming to execute by typing one line at a time. ",
      Questions: ["What is shell?"],
    },
  ]);
  const [selectedTopic, setSelectedTopic] = useState(questions[0]);
  const { setsuAI } = useContext(GlobalContext);

  useEffect(() => {
    setSelectedTopic(questions[setsuAI.topicId]);
  }, [setsuAI]);

  return { questions, selectedTopic };
};

export default useQuestions;

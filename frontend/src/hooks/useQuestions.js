import { useState, useContext, useEffect } from "react";

import { GlobalContext } from "../contexts/GlobalContext";

const useQuestions = () => {
  const [questions, setQuestions] = useState([
    { topic: "Behavioral", Questions: ["You so good"] },
    { topic: "Algorithms", Questions: ["You so algorithmy"] },
  ]);
  const [selectedTopic, setSelectedTopic] = useState(questions[0]);
  const { setsuAI } = useContext(GlobalContext);

  useEffect(() => {
    setSelectedTopic(questions[setsuAI.topicId]);
  }, [setsuAI]);

  return { selectedTopic };
};

export default useQuestions;

import GLOBAL_ACTIONS from "./actions/GlobalActions";
import { createContext, useReducer } from "react";
import GlobalReducer from "./Reducers/GlobalReducer";

const initialState = {
  setsuAI: {
    topicId: 0,
    emotion: "",

    aiResponses: [],
    currentIndex: 0,
    whatDo: "Do this",
  },
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const setTopicID = (token) => {
    dispatch({ type: GLOBAL_ACTIONS.SET_TOPIC_ID, payload: token });
  };
  const setEmotion = (token) => {
    dispatch({ type: GLOBAL_ACTIONS.SET_EMOTION, payload: token });
  };
  const setAIResponses = (token) => {
    dispatch({ type: GLOBAL_ACTIONS.SET_AI_RESPONSES, payload: token });
  };

  const setNextIndex = (token) => {
    console.log(token);
    dispatch({ type: GLOBAL_ACTIONS.SET_NEXT_INDEX, payload: token });
  };

  return (
    <GlobalContext.Provider
      value={{
        setTopicID,
        setEmotion,
        setAIResponses,
        setNextIndex,
        setsuAI: state.setsuAI,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

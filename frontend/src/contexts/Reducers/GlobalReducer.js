import GLOBAL_ACTIONS from "../actions/GlobalActions";

const GlobalReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case GLOBAL_ACTIONS.SET_TOPIC_ID:
      return {
        ...state,
        setsuAI: { ...state.setsuAI, topicId: action.payload },
      };
    case GLOBAL_ACTIONS.SET_EMOTION:
      return {
        ...state,
        setsuAI: { ...state.setsuAI, emotion: action.payload },
      };
    case GLOBAL_ACTIONS.SET_AI_RESPONSES:
      return {
        ...state,
        setsuAI: { ...state.setsuAI, aiResponses: action.payload },
      };
    case GLOBAL_ACTIONS.SET_NEXT_INDEX:
      return {
        ...state,
        setsuAI: { ...state.setsuAI, currentIndex: action.payload },
      };

    default:
      return state;
  }
};

export default GlobalReducer;

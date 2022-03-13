import { useState, useContext, useEffect } from "react";
import { Grid, Paper, Box, Stack } from "@mui/material";

import { styled } from "@mui/material/styles";

import catLogo from "../../assets/solo-cat.svg";

import "./index.scss";
import Video from "../../components/Video";
import { GlobalContext } from "../../contexts/GlobalContext";
import useQuestions from "../../hooks/useQuestions";
import { useHistory } from "react-router-dom";
import useRecorder from "../../hooks/useRecorder";
import { CircularProgress, LinearProgress } from "@material-ui/core";

function SetsuAIPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setsuAI } = useContext<any>(GlobalContext);
  const { selectedTopic } = useQuestions();
  let [audioURL, isRecording, startRecording, stopRecording, transcript] =
    useRecorder();
  const [questionsAsked, setQuestionsAsked] = useState<any>([]);
  const [userResponses, setUserResponses] = useState<any>([]);

  const history = useHistory();
  const toggleRecording = () => {
    if (isRecording) {
      if (transcript.trim() !== "") {
        const newUserResponses = userResponses;
        userResponses[currentIndex] = transcript;
        setUserResponses(newUserResponses);
        const usedQuestions = questionsAsked;
        usedQuestions[currentIndex] = selectedTopic.Questions[currentIndex];
        setQuestionsAsked(usedQuestions);
      }

      stopRecording();
    } else startRecording();
  };

  const handleNextQuestion = () => {
    const newIndex = currentIndex + 1;

    if (
      newIndex < selectedTopic.Questions.length &&
      userResponses[currentIndex]
    ) {
      setCurrentIndex(newIndex);
    } else {
      // Submit here go to

      history.push("/setsu/stats");
    }
  };
  return (
    <Grid container direction="row" spacing={2} className="ms-setsu">
      <Grid item container direction="column" xs={2} spacing={2}>
        <Stack spacing={2}>
          <div className="ms-setsu__container containerTall catLogoContainer">
            <img src={catLogo} className="catLogo" alt="cat logo" />
          </div>
          <div className="ms-setsu__container containerSmall ">
            <p className="containerHeading">Topic</p>
            <p className={`topicText bg-${setsuAI.topicId + 1}`}>
              {selectedTopic.topic}
            </p>
          </div>

          <div className="ms-setsu__container containerSmall ">
            <p className="containerHeading">Expression</p>
            <p className={`topicText emotion-${setsuAI.emotion}`}>
              {setsuAI.emotion}
              {setsuAI.setLoadingNet && <LinearProgress />}
            </p>
          </div>
          <button className="btn-stop" onClick={toggleRecording}>
            {isRecording
              ? "Stop Recording"
              : questionsAsked.length > userResponses.length - 1
              ? "Start Recording"
              : "Redo Recording"}
          </button>
        </Stack>
      </Grid>
      <Grid item container direction="column" xs={7} spacing={2}>
        <Grid item xs>
          <div className="ms-setsu__interviewContainer">
            <div className="inner">
              {selectedTopic.Questions.map((_, idx) => {
                if (idx <= currentIndex) {
                  return (
                    <>
                      <div className="aiQuestionContainer">
                        <p className="text">{selectedTopic.Questions[idx]}</p>
                      </div>

                      {idx < questionsAsked.length && (
                        <div className="userAnswerContainer">
                          <p className="text">{userResponses[idx]}</p>
                        </div>
                      )}
                    </>
                  );
                }
              })}

              {isRecording && (
                <div className="recording_loading">
                  <img
                    src="https://pharmacia.pensoft.net/i/simple_loading.gif"
                    className="loadingImage"
                  />
                </div>
              )}
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <div className="ms-setsu__container video__section">
          <div className="video-container">
            <Video />
          </div>
          <div className="btn_group">
            <button className="btn__next" onClick={handleNextQuestion}>
              {currentIndex === selectedTopic.Questions.length - 1
                ? "Submit"
                : "Next"}
            </button>
            <button className="btn">Pause</button>
          </div>
          <div className="question_box">
            <p>Notes</p>
            <textarea
              className="noteSection"
              placeholder="write notes here..."
            ></textarea>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default SetsuAIPage;

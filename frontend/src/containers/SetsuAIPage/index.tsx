import { useState, useContext, useEffect } from "react";
import { Grid, Paper, Box, Stack } from "@mui/material";

import { styled } from "@mui/material/styles";

import catLogo from "../../assets/solo-cat.svg";

import "./index.scss";
import Webcam from "react-webcam";
import Video from "../../components/Video";
import { GlobalContext } from "../../contexts/GlobalContext";
import useQuestions from "../../hooks/useQuestions";
import { useHistory } from "react-router-dom";
import useRecorder from "../../hooks/useRecorder";
import Navigation from "../../components/Navigation";

function SetsuAIPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setsuAI } = useContext<any>(GlobalContext);
  const { selectedTopic } = useQuestions();
  let [audioURL, isRecording, startRecording, stopRecording, blob] =
    useRecorder();
  const [questionsAsked, setQuestionsAsked] = useState([]);
  const [userResponses, setUserResponses] = useState([]);

  const history = useHistory();
  const toggleRecording = () => {
    if (isRecording) stopRecording();
    else startRecording();
  };

  return (
    <Grid container direction="row" spacing={2} className="ms-setsu">
      <Navigation />
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
            <p className="containerHeading">Emotion</p>
            <p className={`topicText emotion-${setsuAI.emotion}`}>
              {setsuAI.emotion}
            </p>
          </div>
          <button
            className="btn-stop"
            onClick={toggleRecording}
            disabled={questionsAsked.length < userResponses.length}
          >
            {isRecording ? "Stop Recording" : "Start Recording"}
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
                        <p className="text">
                          {selectedTopic.Questions[currentIndex]}
                        </p>
                      </div>

                      {userResponses.length > 0 && (
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
            <button
              className="btn"
              onClick={() => {
                setCurrentIndex(currentIndex + 1);
              }}
            >
              Next
            </button>
            <button className="btn">Pause</button>
          </div>
          <div className="question_box">
            <p>What do</p>
            {setsuAI.whatDo}
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default SetsuAIPage;

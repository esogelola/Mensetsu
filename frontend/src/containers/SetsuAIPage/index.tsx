import { useState, useContext, useEffect } from "react";
import { Grid, Paper, Box } from "@mui/material";

import { styled } from "@mui/material/styles";

import catLogo from "../../assets/solo-cat.svg";

import "./index.scss";
import Webcam from "react-webcam";
import Video from "../../components/Video";
import { GlobalContext } from "../../contexts/GlobalContext";
import useQuestions from "../../hooks/useQuestions";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  minHeight: "100vh",
}));

function SetsuAIPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setsuAI } = useContext<any>(GlobalContext);
  const { selectedTopic } = useQuestions();

  return (
    <Grid container direction="row" spacing={2} className="ms-setsu">
      <Grid item container direction="column" xs={2} spacing={2}>
        <Grid item xs>
          <div className="ms-setsu__container containerTall catLogoContainer">
            <img src={catLogo} className="catLogo" alt="cat logo" />
          </div>
        </Grid>
        <Grid item xs>
          <Paper className="ms-setsu__container containerTall">
            <p>Topic: {selectedTopic.topic}</p>
            <p>{selectedTopic.Questions[currentIndex]}</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className="ms-setsu__container containerTall">
            <p>Emotion</p>
            <p>{setsuAI.emotion.expression}</p>
          </Paper>
        </Grid>
      </Grid>
      <Grid item container direction="column" xs={7} spacing={2}>
        <Grid item xs>
          <div className="ms-setsu__interviewContainer">
            <div className="inner">
              {[10, 10, 10].map((quest) => {
                return (
                  <div className="question_pill">
                    <h4 className="text">{quest}</h4>
                  </div>
                );
              })}
            </div>
            <div className="interviewAnswers">
              <h4 className="text">x</h4>
            </div>

            <div className="recording_loading">
              <img
                src="https://pharmacia.pensoft.net/i/simple_loading.gif"
                className="loadingImage"
              />
            </div>
          </div>
          <button>Start Recording</button>
          <button>Stop Recording</button>
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

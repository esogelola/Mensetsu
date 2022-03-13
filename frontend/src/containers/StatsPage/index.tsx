import { useState, useContext, useEffect } from "react";
import { Grid, Paper, Box, Stack } from "@mui/material";

import { styled } from "@mui/material/styles";

import catLogo from "../../assets/solo-cat.svg";
import { GlobalContext } from "../../contexts/GlobalContext";
import "./index.scss";
import useQuestions from "../../hooks/useQuestions";
import Navigation from "../../components/Navigation";

function SetsuAIPage() {
  const { setsuAI } = useContext<any>(GlobalContext);
  const { selectedTopic } = useQuestions();

  return (
    <Grid container direction="row" spacing={2} className="ms-setsu">
      <Navigation />
      <Grid item container direction="column" xs={2} spacing={2}>
        <h1>Your Results</h1>
        <Stack spacing={2}>
          <div className="ms-setsu__container containerSmall ">
            <p className="containerHeading">Topic</p>
            <p className={`topicText bg-${setsuAI.topicId + 1}`}>
              {selectedTopic.topic}
            </p>
          </div>

          <div className="ms-setsu__container containerSmall ">
            <p className="containerHeading">Expression</p>
            <p className={`topicText emotion-${setsuAI.emotion}`}>
              {setsuAI.emotion ? setsuAI.emotion : "Nothing"}
            </p>
          </div>
          <div className="ms-setsu__container containerTall catLogoContainer">
            <img src={catLogo} className="catLogo" alt="cat logo" />
          </div>
          <button className="btn-stop">Home</button>
        </Stack>
      </Grid>
      <Grid item container direction="column" xs={7} spacing={2}>
        <Grid item container direction="row" xs={5} spacing={2}>
          <Grid item xs>
            <div className="ms-setsu__container containerTall">
              <p className="containerHeading">Confidence</p>
              <p>55%</p>
            </div>
          </Grid>
          <Grid item xs>
            <div className="ms-setsu__container containerTall">
              <p className="containerHeading">Confidence</p>
              <p>55%</p>
            </div>
          </Grid>
        </Grid>
        <Grid item xs>
          <div className="ms-setsu__container containerTall">
            <p className="containerHeading">Tone Average</p>
            <p>55%</p>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SetsuAIPage;

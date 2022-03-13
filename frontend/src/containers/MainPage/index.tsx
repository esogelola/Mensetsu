import { Container, Grid } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CatLogo from "../../assets/solo-cat.svg";
import "./index.scss";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import useQuestions from "../../hooks/useQuestions";
function MainPage() {
  let history = useHistory();
  const { questions } = useQuestions();

  const { setTopicID } = useContext<any>(GlobalContext);
  const handleToSetsu = (id: Number) => {
    setTopicID(id);
    history.push("/setsu");
  };
  return (
    <div className="ms-main">
      <Grid container className="hero">
        <Grid item xs={4} className="ms-main__leftSide">
          <div className="wrapper">
            <h1 className="heading">Start honing your interview skills</h1>
            <p className="subheading">
              Start honing your interview skills by either requesting a
              ProKitten or selecting a topic with SetsuAI nyaaa~
            </p>
            <button className="btn">Request ProKitten</button>
          </div>
        </Grid>
        <Grid item xs className="ms-main__catLogoSide">
          <img src={CatLogo} />
        </Grid>
      </Grid>
      <div className="ms-main__topics">
        <h1 className="heading">SetsuAI Topics</h1>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          maxWidth="xl"
        >
          {questions.map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <button
                className="topicButton"
                onClick={() => {
                  handleToSetsu(index);
                }}
              >
                <div className={`topicItem bg-${index + 1}`}>
                  <p className="heading">{_.topic}</p>
                  <p className="content">{_.shortDescription}</p>
                </div>
              </button>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default MainPage;

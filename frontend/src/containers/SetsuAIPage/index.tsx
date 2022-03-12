import React from "react";
import { Grid, Paper, Box } from "@mui/material";

import { styled } from "@mui/material/styles";

import catLogo from "../../assets/solo-cat.svg";
import "./index.scss";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  minHeight: "100vh",
}));

function MainPage() {
  return (
    <Grid container direction="row" spacing={2} className="ms-setsu">
      <Grid item xs>
        <div className="__container">1</div>
      </Grid>
      <Grid item container direction="column" xs spacing={2}>
        <Grid item xs>
          <div className="__container">2</div>
        </Grid>
        <Grid item xs>
          <div className="__container containerTall">3</div>
        </Grid>
      </Grid>
      <Grid item xs>
        <div className="container">4</div>
      </Grid>
    </Grid>
  );
}

export default MainPage;

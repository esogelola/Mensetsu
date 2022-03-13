import { Container } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Circles from "../../components/Circles";
import CirclesSignup from "../../components/Circles-signup";
import Description from "../../components/Description";
import SignIn from "../../components/Landing";

 
import "./index.scss";

function LandingPage() {
  return (
    <div className="App">
      <SignIn />
      <Circles />
      <Description />
    </div>
  );
}

export default LandingPage;

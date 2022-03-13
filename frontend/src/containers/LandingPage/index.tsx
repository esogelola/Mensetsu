import { Container } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Circles from "../../components/Circles";
import Description from "../../components/Description";
import SignIn from "../../components/Landing";
import LandingNav from '../../components/LandingNav';

 
import "./index.scss";

function LandingPage() {
  return (
    <div className="App">
      <LandingNav />
      <SignIn />
      <Circles />
      <Description />
    </div>
  );
}

export default LandingPage;

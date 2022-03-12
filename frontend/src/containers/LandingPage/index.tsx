import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "../../components/Landing";
 
import "./index.scss";

function LandingPage() {
  return (
    <div className="App">
      <SignIn />
    </div>
  );
}

export default LandingPage;

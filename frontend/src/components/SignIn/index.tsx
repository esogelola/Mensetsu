import { Checkbox, Container } from "@mui/material";
import { ReactComponent as Google } from "../../assets/akar-icons_google-fill.svg";
import { ReactComponent as Facebook } from "../../assets/akar-icons_facebook-fill.svg";
import { ReactComponent as Apple } from "../../assets/ant-design_apple-filled.svg";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import React from "react";

import "./index.scss";

function SignIn() {
  return (
    <Container maxWidth="md">
      <form className="signin-form">
        <h1>Sign in to Mensetsu</h1>
        <p>Enter the details below.</p>
        <button><Google /></button>
        <button><Facebook /></button>
        <button><Apple /></button>
        <span className="divider">
          <div className="line" />
          <span>OR</span>
          <div className="line" />
        </span>
        <input type="email" name="" id="" placeholder="Email..."/>
        <input type="password" placeholder='Password...' />
        <div className="check-and-label">
          <input type='checkbox' className="checkbox" value='Remember Me' id="checkbox"/>
          <label htmlFor="checkbox">Remember me</label>
        </div>
        <span>Forgot password?</span>
        <Link to={ ROUTES.APP }>
          <input type="submit" value='Log in'/>
        </Link>
        <Link to={ROUTES.SIGN_UP} className="no-underline">
          <div className="signup-link">Don't have an account?</div>
        </Link>
      </form>
    </Container>
  );
}

export default SignIn;

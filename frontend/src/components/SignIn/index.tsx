import { Checkbox, Container } from "@mui/material";
import React from "react";

import "./index.scss";

function SignIn() {
  return (
    <Container maxWidth="md">
      <form className="signin-form">
        <h1>Sign in to Mensetsu</h1>
        <p>Enter the details below.</p>
        <button>google</button>
        <button>facebook</button>
        <button>apple</button>
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
        <input type="submit" value='Log in'/>
      </form>
    </Container>
  );
}

export default SignIn;

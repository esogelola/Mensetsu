import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import "./index.scss";

function SignIn() {
  return (
    <div className='signin-hero'>
      <form>
        <h1>Get Started Today!</h1>
        <input type="text" className="signin-hero-input" placeholder="Name..."/>
        <input type="password" className="signin-hero-input" placeholder="Password..."/>
        <input type='email' className="signin-hero-input" placeholder="Email..."/>
        <Link to={ ROUTES.SIGN_UP}>
          <input type='submit' value='Get Started' className="signin-hero-button get-started"/>
        </Link>
        <Link to={ROUTES.APP}>
          <button className="signin-hero-button demo">Demo</button>
        </Link>
      </form> 
    </div>
  );
}

export default SignIn;

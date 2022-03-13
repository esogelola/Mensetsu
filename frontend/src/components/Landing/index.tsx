import React from "react";

import "./index.scss";

function SignIn() {
  return (
    <div className='signin-hero'>
      <form>
        <h1>Get Started Today!</h1>
        <input type="text" className="signin-hero-input" placeholder="Name..."/>
        <input type="password" className="signin-hero-input" placeholder="Password..."/>
        <input type='email' className="signin-hero-input" placeholder="Email..."/>
        <input type="submit" value="Get Started" className="signin-hero-button get-started"/>
        <button className="signin-hero-button demo">Demo</button>
      </form> 
    </div>
  );
}

export default SignIn;

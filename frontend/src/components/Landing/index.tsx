import React from "react";
import { Container } from '@mui/material';
import "./index.scss";

function SignIn() {
  return (
    <Container maxWidth='xs' className='signin-hero'>
      <form >
        <h1>Get Started Today!</h1>
        <input type="text" className="signin-hero-input" placeholder="Name..."/>
        <input type="password" className="signin-hero-input" placeholder="Password..."/>
        <input type='email' className="signin-hero-input" placeholder="Email..."/>
        <input type="submit" value="Get Started" className="signin-hero-button get-started"/>
        <button className="signin-hero-button demo">Demo</button>
      </form> 
    </Container>
  );
}

export default SignIn;

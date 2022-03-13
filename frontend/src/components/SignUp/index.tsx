import { Checkbox, Container } from "@mui/material";
import { ReactComponent as Google } from "../../assets/akar-icons_google-fill.svg";
import { ReactComponent as Facebook } from "../../assets/akar-icons_facebook-fill.svg";
import { ReactComponent as Apple } from "../../assets/ant-design_apple-filled.svg";

import "./index.scss";

function SignUp() {
  return (
    <Container maxWidth="md">
      <form className="signin-form">
        <h1>Sign up for Mensetsu</h1>
        <p>Enter the details below.</p>
        <button><Google /></button>
        <button><Facebook /></button>
        <button><Apple /></button>
        <span className="divider">
          <div className="line" />
          <span>OR</span>
          <div className="line" />
        </span>
        <input type="text" name="name" id="name" placeholder="Name..."/>
        <input type="email" name="email" id="email" placeholder="Email..."/>
        <input type="password" name='password' id='password' placeholder='Password...' />
        <input type="submit" value='Sign up' name='signup' id="signup"/>
      </form>
    </Container>
  );
}

export default SignUp;

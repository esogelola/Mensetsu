import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import "./index.scss";
import * as ROUTES from "../../constants/routes";


const barStyle ={ 
  background: '#F5EEEE'
 };
 const linkStyle={
  textTransform: 'lowercase'
 };

const Navigation = () => {
  return (
    <AppBar style={barStyle} className="ms-nav" position="static">
      <Toolbar>
      <b className="ms-nav__logo">
        MENSETSU
      </b>
      <small className="ms-nav__stacked">
        Interview Practicing Platform
      </small>
      <Typography sx={{ flexGrow: 1 }}></Typography>
        <Button color="inherit" >
          <Link style={linkStyle} className="ms-nav__link" to={ROUTES.APP}>
            home
          </Link>
        </Button>
        <Button color="inherit">
          <Link style={linkStyle} className="ms-nav__link" to={ROUTES.ABOUT}>
            about
          </Link>
        </Button>
        <Button color="inherit">
          <Link style={linkStyle} className="ms-nav__link" to={ROUTES.PRIVACY}>
            privacy
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;

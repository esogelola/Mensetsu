import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";

import "./index.scss";
import * as ROUTES from "../../constants/routes";

const Navigation = () => {
  return (
    <></>
    // <AppBar className="cn-nav" position="static">
    //   <Toolbar>
    //     <Button color="inherit">
    //       <Link className="cn-nav__link" to={ROUTES.SIGN_IN}>
    //         Sign In
    //       </Link>
    //     </Button>
    //     <Button color="inherit">
    //       <Link className="cn-nav__link" to={ROUTES.LANDING}>
    //         Landing
    //       </Link>
    //     </Button>
    //     <Button color="inherit">
    //       <Link className="cn-nav__link" to={ROUTES.HOME}>
    //         Home
    //       </Link>
    //     </Button>
    //     <Button color="inherit">
    //       <Link className="cn-nav__link" to={ROUTES.ACCOUNT}>
    //         Account
    //       </Link>
    //     </Button>
    //     <Button color="inherit">
    //       <Link className="cn-nav__link" to={ROUTES.ADMIN}>
    //         Admin
    //       </Link>
    //     </Button>
    //   </Toolbar>
    // </AppBar>
  );
};

export default Navigation;

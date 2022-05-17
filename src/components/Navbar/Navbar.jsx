import React from "react";
import { AppBar, Toolbar, MenuItem, Menu, Typography } from "@mui/material";
import useStyles from "./styles";

import logo from "../../assets/logo.png";

const Navbar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.root} posstion="fixed" color="inherit">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            <img src={logo} alt="logo" height="39px" width="96px" />
            Albums
          </Typography>
          <div />
          <div></div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

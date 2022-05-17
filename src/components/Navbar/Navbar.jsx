import React from "react";
import { AppBar, Toolbar, MenuItem, Menu, Typography } from "@mui/material";

import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <AppBar posstion="fixed" color="inherit">
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

import React from "react";
import {
  AppBar as MaterialAppBar,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";
import { Menu as MenuIcon, Settings as SettingsIcon } from "@material-ui/icons";

import { useStyles } from "./AppBar.styles";

export const AppBar = ({ toggleSideBarHandler }) => {
  const classes = useStyles();

  return (
    <MaterialAppBar position="sticky" className={classes.root}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleSideBarHandler}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="h1" className={classes.title}>
          Todoist Clone
        </Typography>
        <IconButton edge="end" color="inherit" aria-label="settings">
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </MaterialAppBar>
  );
};

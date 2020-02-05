import React from "react";
import {
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import {
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon
} from "@material-ui/icons";

import { useStyles } from "./SideBar.styles";

import { defaultProjects } from "../../constants";

import { Projects } from "../Projects/Projects";

import { useToggle } from "../../hooks";
import { useSelectedProjectContext } from "../../contexts/selectedProjectContext";

export const SideBar = ({ open, onClose }) => {
  const classes = useStyles();

  const [openProjects, toggleOpenProjects] = useToggle(false);
  const { setSelectedProject } = useSelectedProjectContext();

  const drawer = (
    <>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {defaultProjects.map(project => {
          const { id, name, icon } = project;
          return (
            <ListItem
              button
              key={id}
              onClick={() => setSelectedProject(project)}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        <ListItem button onClick={toggleOpenProjects}>
          {openProjects ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          <ListItemText
            primary="Projects"
            primaryTypographyProps={{ variant: "h6" }}
          />
        </ListItem>
        <Projects open={openProjects} />
      </List>
    </>
  );

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="left"
          open={open}
          onClose={onClose}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

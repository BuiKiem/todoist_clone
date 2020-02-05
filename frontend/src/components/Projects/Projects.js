import React from "react";
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { FiberManualRecord as FiberManualRecordIcon } from "@material-ui/icons";

import { useProjects } from "../../hooks";
import { useSelectedProjectContext } from "../../contexts/selectedProjectContext";

export const Projects = ({ open }) => {
  const { data: projects, loading, error } = useProjects();
  const { setSelectedProject } = useSelectedProjectContext();

  return (
    <Collapse in={open} timeout="auto">
      {error && <p>Something went wrong</p>}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <List component="div" disablePadding>
          {projects.map(project => {
            const { id, name, color } = project;
            return (
              <ListItem
                button
                key={id}
                onClick={() => setSelectedProject(project)}
              >
                <ListItemIcon>
                  <FiberManualRecordIcon style={{ color }} />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            );
          })}
        </List>
      )}
    </Collapse>
  );
};

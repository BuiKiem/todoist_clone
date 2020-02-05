import React from "react";
import { List, ListItem } from "@material-ui/core";

import { useStyles } from "./Tasks.styles";

import { Task } from "../Task/Task";
import { TasksSkeleton } from "./Tasks.skeleton";

import { useTasks } from "../../hooks";
import { useSelectedProjectContext } from "../../contexts/selectedProjectContext";

export const Tasks = () => {
  const { selectedProject } = useSelectedProjectContext();
  const { data: tasks, loading, error } = useTasks(selectedProject);
  const classes = useStyles();

  return (
    <List subheader={<h2>{selectedProject.name}</h2>} className={classes.root}>
      {error && <p>Something went wrong</p>}
      {loading ? (
        <TasksSkeleton />
      ) : (
        tasks.map(task => (
          <ListItem key={task.id} alignItems="flex-start" divider>
            <Task task={task} />
          </ListItem>
        ))
      )}
    </List>
  );
};

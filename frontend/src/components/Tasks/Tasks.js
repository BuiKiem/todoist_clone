import React from "react";
import { List, ListItem } from "@material-ui/core";

import { Task } from "../Task/Task";
import { TasksSkeleton } from "./Tasks.skeleton";

import { useTasks } from "../../hooks";

export const Tasks = () => {
  const { data: tasks, loading, error } = useTasks();

  return (
    <List subheader={<h2>[Project Name]</h2>}>
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

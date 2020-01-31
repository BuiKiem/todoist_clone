import React, { useEffect, useState } from "react";
import { List, ListItem } from "@material-ui/core";

import { axiosConn } from "../../axios";

import { Task } from "../Task/Task";
import { TasksSkeleton } from "./Tasks.skeleton";

export const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      const result = await axiosConn.get("api/tasks/");
      setTasks(result.data);
      setLoading(false);
    };

    fetchTasks();
  }, []);

  return (
    <List subheader={<h2>[Project Name]</h2>}>
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

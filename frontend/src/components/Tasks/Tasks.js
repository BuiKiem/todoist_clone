import React, { useEffect, useState } from "react";

import { axiosConn } from "../../axios";
import { Task } from "../Task/Task";

export const Tasks = () => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const result = await axiosConn.get("api/tasks/");
      console.log(result);
      setTasks(result.data);
    };

    fetchTasks();
  }, []);

  if (!tasks) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

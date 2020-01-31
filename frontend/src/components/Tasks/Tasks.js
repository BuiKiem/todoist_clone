import React, { useEffect, useState } from "react";

import { axiosConn } from "../../axios";
import { Task } from "../Task/Task";

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
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        tasks.map(task => <Task key={task.id} task={task} />)
      )}
    </div>
  );
};

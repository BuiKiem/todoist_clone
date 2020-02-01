import { useEffect, useState } from "react";

import { axiosConn } from "../axios";

export const useTasks = () => {
  const url = "tasks/";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      setError(false);
      try {
        const result = await axiosConn.get(url);
        setData(result.data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return {data, loading, error}
};

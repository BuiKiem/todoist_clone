import { useEffect, useState } from "react";

import { axiosConn } from "../axios";

export const useTasks = ({ id }) => {
  const baseUrl = "/tasks";
  let url = "";
  switch (id) {
    case "INBOX":
      url = `${baseUrl}/inbox`;
      break;
    case "TODAY":
      url = `${baseUrl}/?due_day=today`;
      break;
    case "NEXT7":
      url = `${baseUrl}/?due_day=week`;
      break;
    default:
      url = `${baseUrl}/?project=${id}`;
      break;
  }

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
  }, [url]);

  return { data, loading, error };
};

export const useProjects = () => {
  const url = "projects/";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
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

    fetchProjects();
  }, []);

  return { data, loading, error };
};

export const useToggle = initialValue => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => setValue(prevValue => !prevValue);

  return [value, toggleValue];
};

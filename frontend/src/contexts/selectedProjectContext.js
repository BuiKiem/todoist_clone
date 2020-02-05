import React, { createContext, useContext, useState } from "react";

import { defaultProjects } from "../constants";

export const SelectedProjectContext = createContext();

export const SelectedProjectProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(defaultProjects[0]);

  return (
    <SelectedProjectContext.Provider
      value={{ selectedProject, setSelectedProject }}
    >
      {children}
    </SelectedProjectContext.Provider>
  );
};

export const useSelectedProjectContext = () =>
  useContext(SelectedProjectContext);

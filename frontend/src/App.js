import React from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

import { theme } from "./theme";

import { AppBar } from "./components/AppBar/AppBar";
import { Task } from "./components/Task/Task";

function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <AppBar />
        <Task />
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;

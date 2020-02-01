import React from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

import { theme } from "./theme";

import { AppBar } from "./components/AppBar/AppBar";
import { Tasks } from "./components/Tasks/Tasks";

function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <AppBar />
        <Tasks />
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;

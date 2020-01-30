import React from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

import { theme } from "./theme";

import { AppBar } from "./components/AppBar/AppBar";

function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <AppBar />
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;

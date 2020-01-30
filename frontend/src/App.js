import React from "react";
import { CssBaseline, Typography, ThemeProvider } from "@material-ui/core";

import { theme } from "./theme";

function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Typography variant="h1">Todoist Clone</Typography>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;

import React from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

import { theme } from "./theme";

import { Layout } from "./components/Layout/Layout";
import { Tasks } from "./components/Tasks/Tasks";
import { SelectedProjectProvider } from "./contexts/selectedProjectContext";

function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <SelectedProjectProvider>
          <Layout>
            <Tasks />
          </Layout>
        </SelectedProjectProvider>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;

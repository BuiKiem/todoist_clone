import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#DB4C3F"
    },
    secondary: {
      main: "#B8B8B8"
    }
  }
});

theme = responsiveFontSizes(theme);

export { theme };

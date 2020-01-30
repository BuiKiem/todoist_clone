import React from "react";
import { Grid, Typography, Tooltip } from "@material-ui/core";

export const Task = () => {
  return (
    <Grid container>
      <Grid item xs={1}>
        <input type="checkbox" />
      </Grid>
      <Grid item xs={5}>
        <Typography variant="subtitle2" component="p">
          [Task name]
        </Typography>
        <Tooltip color="primary" title="31 Jan" arrow placement="bottom-start">
          <Typography variant="body2" component="p">[Due day]</Typography>
        </Tooltip>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body2" component="p">[Project name]</Typography>
      </Grid>
    </Grid>
  );
};

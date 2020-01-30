import React from "react";
import {Grid, Typography} from "@material-ui/core";

export const Task = () => {
  return (
    <Grid container>
      <Grid item xs={1}>
        <input type="checkbox"/>
      </Grid>
      <Grid item xs={5}>
        <Typography variant="subtitle2" component="p">
          [Task name]
        </Typography>
        <Typography>
          [Due date]
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>
          [Project name]
        </Typography>
      </Grid>
    </Grid>
  );
};
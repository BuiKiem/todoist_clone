import React from "react";
import { Grid, Typography, Tooltip } from "@material-ui/core";
import { FiberManualRecord as RadioButtonUncheckedIcon } from "@material-ui/icons";

export const Task = ({ task }) => {
  return (
    <Grid container>
      <Grid item xs={1}>
        <input type="checkbox" />
      </Grid>
      <Grid item xs={5}>
        <Typography variant="subtitle2" component="p">
          {task.name}
        </Typography>
        <Tooltip color="primary" title="31 Jan" arrow placement="bottom-start">
          <Typography variant="body2" component="p">
            {task.due_time}
          </Typography>
        </Tooltip>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body2" component="p">
          {task.project}
          <RadioButtonUncheckedIcon
            color="primary"
            fontSize="small"
            viewBox="0 0 24 24"
          />
        </Typography>
      </Grid>
    </Grid>
  );
};

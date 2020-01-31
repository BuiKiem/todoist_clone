import React from "react";
import { ListItem, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

export const TasksSkeleton = () => {
  return (
    <>
      {[...Array(5).keys()].map(el => (
        <ListItem key={el}>
          <Grid container>
            <Grid item xs={2}>
              <Skeleton variant="circle" width={40} height={40} />
            </Grid>
            <Grid item xs={5}>
              <Skeleton variant="text" width="90%" />
              <Skeleton variant="text" width="90%" />
            </Grid>
            <Grid item xs={5}>
              <Skeleton variant="text" width="90%" />
            </Grid>
          </Grid>
        </ListItem>
      ))}
    </>
  );
};

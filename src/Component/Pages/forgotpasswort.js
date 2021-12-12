import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    padding: 10,
  },
  subdiv: {
    width: 500,
    background: "#f1e7c7",
    padding: 10,
  },
}));

export default function Forgotpasswort() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.subdiv}>
        <Grid
          container
          spacing={2}
        >
          <Grid item xs={12} sm={6}>
            <h3>Forgot Password</h3>
            <TextField
              fullWidth
              label="Email Address"
              required
              margin="normal"
              name="email"
              type="email"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Button variant="contained" fullWidth color="primary">
            Reset
          </Button>
        </Grid>
      </div>
    </div>
  );
}

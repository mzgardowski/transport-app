import React from "react";
import { Avatar, Box, Grid, Toolbar, Typography } from "@mui/material";
import GlobalColors from "src/styles/GlobalColors";

const Dashboard = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            height: "80px",
            marginTop: "-4px",
            backgroundColor: GlobalColors.backgroundColor.thrid,
          }}
        >
          <Grid container ml={4} pt={4}>
            <Grid item>
              <Avatar sx={{ width: 88, height: 88 }} />
            </Grid>
            <Grid item ml={2} mt={1}>
              <Typography variant="h4">Mateusz Zgardowski</Typography>
              <Typography variant="h6">Worker</Typography>
            </Grid>
          </Grid>
        </Box>
        <Toolbar />
      </Box>
      <Grid container xs={13} sm={12} spacing={1} pl={1}>
        <Grid container item xs={12} sm={12} spacing={1}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4">Routes</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4">Clients</Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={12} spacing={1}>
          <Grid item xs={12} sm={5}>
            <Typography variant="h4">Messages</Typography>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Typography variant="h4">Tracks with Workers</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;

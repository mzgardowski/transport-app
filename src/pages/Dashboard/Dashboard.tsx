import React from "react";
import { Grid } from "@mui/material";
import DashboardHeader from "src/components/Dashboard/DasboardHeader";
import ListTrips from "src/components/Dashboard/ListTrips";
import LastClients from "src/components/Dashboard/LastClients";
import Messages from "src/components/Dashboard/Messages";
import TracksAndWorkers from "src/components/Dashboard/TracksAndWorkers";

const Dashboard = () => {
  return (
    <>
      <DashboardHeader />
      <Grid container xs={13} sm={12} rowSpacing={2} mt={2}>
        <Grid container item xs={12} sm={12} columnSpacing={2} rowSpacing={2}>
          <Grid item xs={12} sm={6}>
            <ListTrips />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LastClients />
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={12} columnSpacing={2} rowSpacing={2}>
          <Grid item xs={12} sm={5}>
            <Messages />
          </Grid>
          <Grid item xs={12} sm={7}>
            <TracksAndWorkers />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;

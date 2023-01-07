import React from "react";
import { Grid } from "@mui/material";
import DashboardHeader from "src/components/Dashboard/DasboardHeader";
import ListTrips from "src/components/Dashboard/ListTrips";
// import LastClients from "src/components/Dashboard/LastClients";
import Messages from "src/components/Dashboard/Messages";
import TracksAndWorkers from "src/components/Dashboard/TrucksAndWorkers";

const Dashboard = () => {
  return (
    <>
      <DashboardHeader />
      <Grid container rowSpacing={2} mt={2}>
        <Grid container xs={12} item>
          <Grid item xs={12}>
            <ListTrips />
          </Grid>
        </Grid>
        <Grid container item xs={12} rowSpacing={2}>
          <Grid item xs={12} sm={6}>
            <TracksAndWorkers />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Messages />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;

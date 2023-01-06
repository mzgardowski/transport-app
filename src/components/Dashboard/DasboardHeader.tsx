import React from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import CustomBox from "../CustomBox/CustomBox";

const DashboardHeader = () => (
  <CustomBox>
    <Grid container>
      <Grid item>
        <Avatar
          sx={{
            width: { xs: 44, sm: 88 },
            height: { xs: 44, sm: 88 },
          }}
        />
      </Grid>
      <Grid item ml={2}>
        <Typography variant="h5">Mateusz Zgardowski</Typography>
        <Typography variant="h6">Worker</Typography>
      </Grid>
    </Grid>
  </CustomBox>
);

export default DashboardHeader;

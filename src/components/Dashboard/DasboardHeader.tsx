import React from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import GlobalColors from "src/styles/GlobalColors";
import CustomBox from "../CustomBox/CustomBox";

const DashboardHeader = () => (
  <CustomBox
    mt={1}
    mx={1}
    sx={{
      background: `linear-gradient(0deg, #FFF 50%, ${GlobalColors.backgroundColor.primary} 50%)`,
    }}
  >
    <Grid container alignItems="center" alignContent="center">
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
        <Typography variant="h6" sx={{ color: GlobalColors.text.grey }}>
          Worker
        </Typography>
      </Grid>
    </Grid>
  </CustomBox>
);

export default DashboardHeader;

import {
  AccessTime,
  CalendarMonth,
  InfoOutlined,
  Person,
  Route,
} from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { ExpanderComponentProps } from "react-data-table-component";
import CustomBox from "src/components/CustomBox/CustomBox";
import { ColumnsProps } from "./generateColumns";

const ExpandedComponent = ({ data }: ExpanderComponentProps<ColumnsProps>) => {
  const {
    id,
    title,
    date,
    tripTime,
    startingPoint,
    destination,
    client,
    worker,
    tripStatus,
  } = data;
  console.log(
    id,
    title,
    date,
    tripTime,
    startingPoint,
    destination,
    client,
    worker,
    tripStatus,
  );
  return (
    <CustomBox height="200px" sx={{ borderRadius: 0 }}>
      <Grid container flexDirection="row" flex={1}>
        <Grid container item xs={3}>
          <Box
            sx={{
              width: "200px",
              height: "200px",
              backgroundColor: "orange",
              borderRadius: 4,
            }}
          />
        </Grid>
        <Grid container item xs={9}>
          <Grid item xs={11}>
            <Typography variant="h4">
              {title} - {client}
            </Typography>
          </Grid>
          <Grid container item>
            <Grid item xs={4}>
              <CalendarMonth />
              {date}
            </Grid>
            <Grid item xs={6}>
              <AccessTime />
              {tripTime}
            </Grid>
          </Grid>
          <Grid container item>
            <Grid item xs={4}>
              <Route />
              {startingPoint} {destination}
            </Grid>
            <Grid container item xs={6}>
              <Person />
              <Grid item>{worker}</Grid>
            </Grid>
          </Grid>
          <Grid container item>
            <Grid item xs={4}>
              <InfoOutlined />
              details
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CustomBox>
  );
};

export default ExpandedComponent;

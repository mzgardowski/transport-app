import {
  AccessTime,
  CalendarMonth,
  InfoOutlined,
  Person,
  Route,
} from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { ExpanderComponentProps } from "react-data-table-component";
import CustomBox from "src/components/CustomBox/CustomBox";
import ListItemWithIcon from "src/components/ListItemWithIcon";
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
              <ListItemWithIcon icon={<CalendarMonth />} text={date} />
            </Grid>
            <Grid item xs={6}>
              <ListItemWithIcon icon={<AccessTime />} text={tripTime} />
            </Grid>
          </Grid>
          <Grid container item>
            <Grid item xs={4}>
              <ListItemWithIcon
                icon={<Route />}
                text={`${startingPoint} ${destination}`}
              />
            </Grid>
            <Grid item xs={6}>
              <ListItemWithIcon icon={<Person />} text={worker} />
            </Grid>
          </Grid>
          <Grid container item justifyContent="flex-end">
            <Grid item justifySelf="flex-end" alignSelf="center" mr={2}>
              {/* ! TODO : create fetch function to link with details */}
              <Button
                sx={{
                  border: "1px solid rgba(0,0,0, 0.10)",
                  "&:hover": {
                    border: "1px solid rgba(0,0,0, 0.25)",
                  },
                }}
              >
                <ListItemWithIcon icon={<InfoOutlined />} text="details" />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CustomBox>
  );
};

export default ExpandedComponent;

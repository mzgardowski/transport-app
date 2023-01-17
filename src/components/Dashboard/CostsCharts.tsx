import React from "react";
import { RadialBarChart, RadialBar } from "recharts";
import { Box, Grid, Typography } from "@mui/material";
import AnimatedCustomBox from "src/components/AnimatedCustomBox/AnimatedCustomBox";
import BoxHeader from "../CustomBox/BoxHeader";

const data = [
  {
    name: "Costs",
    value: 5000,
    pv: 200,
    fill: "#EA5545",
  },
  {
    name: "Income",
    value: 15000,
    pv: 4567,
    fill: "#EDBF33",
  },
  {
    name: "Profit",
    value: 10000,
    pv: 1398,
    fill: "#87BC45",
  },
];

const CostsCharts = () => {
  return (
    <AnimatedCustomBox mx={1}>
      <BoxHeader>Billing this month : February 2023</BoxHeader>
      <Grid container>
        <Grid container item justifyContent="center">
          <RadialBarChart
            width={300}
            height={200}
            cx={150}
            cy={170}
            innerRadius={40}
            outerRadius={150}
            barSize={30}
            startAngle={180}
            endAngle={0}
            data={data}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#FFF" }}
              background
              dataKey="value"
            />
          </RadialBarChart>
        </Grid>
        <Grid container item justifyContent="center">
          <Box>
            <ul style={{ margin: 0, padding: 0 }}>
              {data.map((obj) => {
                return (
                  <li
                    style={{
                      display: "inline-block",
                      paddingLeft: 4,
                    }}
                  >
                    <Typography color={`${obj.fill}`}>{obj.name}</Typography>
                  </li>
                );
              })}
            </ul>
          </Box>
        </Grid>
      </Grid>
    </AnimatedCustomBox>
  );
};

export default CostsCharts;

import React from "react";
import { Drawer, Box } from "@mui/material";
import { Link } from "react-router-dom";

const SideNavigation = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 250, boxSizing: "border-box" },
      }}
    >
      <Box sx={{ marginTop: "80px" }}>
        <Link to="/">DashBoard</Link>
        <Link to="/customers">Customers</Link>
      </Box>
    </Drawer>
  );
};

export default SideNavigation;

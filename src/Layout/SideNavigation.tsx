import React from "react";
import { Drawer, Box, List, Toolbar } from "@mui/material";
import {
  People,
  Dashboard,
  Badge,
  LocalShipping,
  Settings,
  ManageAccounts,
  ListAlt,
} from "@mui/icons-material";
import LinkListItem from "../components/LinkListItem";

const SideNavigation = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: "20vw",
        minWidth: "200px",
        maxWidth: "250px",
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: "20vw",
          minWidth: "200px",
          maxWidth: "250px",
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          height: "100%",
        }}
      >
        <List
          sx={{
            width: "100%",
          }}
        >
          <nav style={{ marginTop: 10 }}>
            <LinkListItem icon={<Dashboard />} link="/" textLink="Dashboard" />
            <LinkListItem
              icon={<Badge />}
              link="/customers"
              textLink="Customers"
            />
            <LinkListItem
              icon={<People />}
              link="/employees"
              textLink="Employees"
            />
            <LinkListItem
              icon={<LocalShipping />}
              link="/trucks"
              textLink="Trucks"
            />
            <LinkListItem icon={<ListAlt />} link="/orders" textLink="Orders" />
          </nav>
        </List>
        <List sx={{ alignSelf: "flex-end", width: "100%" }}>
          <nav>
            <LinkListItem
              icon={<Settings />}
              link="/settings"
              textLink="Settings"
            />
            <LinkListItem
              icon={<ManageAccounts />}
              link="/account"
              textLink="Account"
            />
          </nav>
        </List>
      </Box>
    </Drawer>
  );
};

export default SideNavigation;

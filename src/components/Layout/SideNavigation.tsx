import React from "react";
import { Drawer, Box, List } from "@mui/material";
import {
  People,
  Dashboard,
  Badge,
  LocalShipping,
  Settings,
  ManageAccounts,
  ListAlt,
} from "@mui/icons-material";
import LinkListItem from "../LinkListItem";

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
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "80px",
          width: "100%",
          height: "100%",
        }}
      >
        <List
          sx={{
            width: "100%",
          }}
        >
          <nav>
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

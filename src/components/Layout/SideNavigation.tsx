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
import LinkListItem from "../LinkListItem/LinkListItem";

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
            <LinkListItem
              icon={<Dashboard fontSize="large" />}
              link="/"
              textLink="Dashboard"
            />
            <LinkListItem
              icon={<Badge fontSize="large" />}
              link="/customers"
              textLink="Customers"
            />
            <LinkListItem
              icon={<People fontSize="large" />}
              link="/employees"
              textLink="Employees"
            />
            <LinkListItem
              icon={<LocalShipping fontSize="large" />}
              link="/trucks"
              textLink="Trucks"
            />
            <LinkListItem
              icon={<ListAlt fontSize="large" />}
              link="/orders"
              textLink="Orders"
            />
          </nav>
        </List>
        <List sx={{ alignSelf: "flex-end", width: "100%" }}>
          <nav>
            <LinkListItem
              icon={<Settings fontSize="large" />}
              link="/settings"
              textLink="Settings"
            />
            <LinkListItem
              icon={<ManageAccounts fontSize="large" />}
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

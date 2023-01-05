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
import GlobalColors from "src/styles/GlobalColors";
import LinkListItem from "../components/LinkListItem";

const SideNavigation = ({ menuOpen }: { menuOpen: boolean }) => {
  return (
    <Drawer
      variant="persistent"
      open={menuOpen}
      sx={{
        width: { xs: 0, sm: "200px" },
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          border: "none",
          width: { xs: "100%", sm: "200px" },
          boxSizing: "border-box",
          backgroundColor: GlobalColors.backgroundColor.secondary,
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

import React from "react";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import {
  People,
  Dashboard,
  Badge,
  LocalShipping,
  Settings,
  ManageAccounts,
  ListAlt,
} from "@mui/icons-material";
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
            <ListItem sx={{ padding: 1 }}>
              <ListItemButton>
                <ListItemIcon>
                  <Dashboard />
                </ListItemIcon>
                <Link to="/">Dashboard</Link>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: 1 }}>
              <ListItemButton>
                <ListItemIcon>
                  <Badge />
                </ListItemIcon>
                <Link to="/customers">Customers</Link>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: 1 }}>
              <ListItemButton>
                <ListItemIcon>
                  <People />
                </ListItemIcon>
                <Link to="/employees">Employees</Link>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: 1 }}>
              <ListItemButton>
                <ListItemIcon>
                  <LocalShipping />
                </ListItemIcon>
                <Link to="/trucks">Trucks</Link>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: 1 }}>
              <ListItemButton>
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <Link to="/orders">Orders</Link>
              </ListItemButton>
            </ListItem>
          </nav>
        </List>
        <List sx={{ alignSelf: "flex-end", width: "100%" }}>
          <nav>
            <ListItem sx={{ padding: 1 }}>
              <ListItemButton>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <Link to="/settings">Settings</Link>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: 1 }}>
              <ListItemButton>
                <ListItemIcon>
                  <ManageAccounts />
                </ListItemIcon>
                <Link to="/account">Account</Link>
              </ListItemButton>
            </ListItem>
          </nav>
        </List>
      </Box>
    </Drawer>
  );
};

export default SideNavigation;

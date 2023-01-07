import React from "react";
import { Box, Toolbar } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Header from "./Layout/Header";
import SideNavigation from "./Layout/SideNavigation";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Customers from "./Pages/Customers/Customers";
import Employees from "./Pages/Employees/Employees";
import Trucks from "./Pages/Trucks/Trucks";
import Orders from "./Pages/Orders/Orders";
import Settings from "./Pages/Settings/Settings";
import Account from "./Pages/Account/Account";
import NoPage from "./Pages/NotFound/NoPage";
import useOpenMenu from "./hooks/useOpenMenu";

const App = () => {
  const { menuOpen, handleOpenMenu } = useOpenMenu();

  return (
    <Box sx={{ display: "flex" }}>
      <Header handleOpenMenu={handleOpenMenu} />
      <SideNavigation menuOpen={menuOpen} />
      <Box
        component="main"
        m={2}
        sx={{
          width: "100%",
        }}
      >
        <Toolbar sx={{ height: "67px" }} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/trucks" element={<Trucks />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;

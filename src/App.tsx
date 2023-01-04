import React from "react";
import { Box } from "@mui/material";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Layout/Header";
import SideNavigation from "./components/Layout/SideNavigation";
import Dashboard from "./Pages/Home/Dashboard";
import Customers from "./Pages/Customers/Customers";
import Employees from "./Pages/Employees/Employees";
import Trucks from "./Pages/Trucks/Trucks";
import Orders from "./Pages/Orders/Orders";
import Settings from "./Pages/Settings/Settings";
import Account from "./Pages/Account/Account";

const App = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <SideNavigation />
      <Box
        component="main"
        sx={{
          boxShadow: "inset 8px 8px 20px -20px rgba(66, 68, 90, 1)",
          borderStartStartRadius: 20,
          marginTop: "82px",
          height: "93vh",
          width: "100%",
        }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/trucks" element={<Trucks />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;

import React from "react";
import { Box, Toolbar } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import SideNavigation from "./components/Layout/SideNavigation";
import Dashboard from "./pages/Home/Dashboard";

const App = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <SideNavigation />
      <Box component="main">
        <Toolbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customers" element={<Dashboard />} />
          <Route path="/employees" element={<Dashboard />} />
          <Route path="/trucks" element={<Dashboard />} />
          <Route path="/orders" element={<Dashboard />} />
          <Route path="/settings" element={<Dashboard />} />
          <Route path="/account" element={<Dashboard />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;

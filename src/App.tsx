import React from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import SideNavigation from "./components/Layout/SideNavigation";
import Dashboard from "./pages/Home/Dashboard";

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

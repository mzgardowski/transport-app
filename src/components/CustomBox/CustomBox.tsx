import React, { ReactNode } from "react";
import { Box } from "@mui/material";

interface CustomBoxProps {
  children: ReactNode;
}

const CustomBox = ({ children }: CustomBoxProps) => {
  return (
    <Box m={2} p={2} boxShadow={5} borderRadius={4}>
      {children}
    </Box>
  );
};

export default CustomBox;

import React, { ReactNode } from "react";
import { Typography, Box } from "@mui/material";

interface CustomBoxHeader {
  children: ReactNode;
}

const BoxHeader = ({ children }: CustomBoxHeader) => {
  return (
    <Box>
      <Typography variant="button" fontWeight="bold">
        {children}
      </Typography>
    </Box>
  );
};

export default BoxHeader;

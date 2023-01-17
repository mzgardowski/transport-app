import React, { ReactNode } from "react";
import { Typography, Box } from "@mui/material";
import GlobalColors from "src/styles/GlobalColors";

interface CustomBoxHeader {
  children: ReactNode;
}

const BoxHeader = ({ children }: CustomBoxHeader) => {
  return (
    <Box>
      <Typography
        variant="button"
        fontWeight="bold"
        sx={{ color: GlobalColors.text.grey }}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default BoxHeader;

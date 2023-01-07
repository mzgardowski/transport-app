import React, { ReactNode } from "react";
import { Box, BoxProps } from "@mui/material";

interface CustomBoxProps extends BoxProps {
  children: ReactNode;
}

const CustomBox = ({ children, ...restProps }: CustomBoxProps) => {
  return (
    <Box borderRadius={3} p={2} boxShadow={3} {...restProps}>
      {children}
    </Box>
  );
};

export default CustomBox;

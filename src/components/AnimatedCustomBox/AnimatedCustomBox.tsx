import React, { ReactNode } from "react";
import { Box, BoxProps } from "@mui/material";
import { motion } from "framer-motion";

interface CustomBoxProps extends BoxProps {
  children: ReactNode;
}

const CustomBox = ({ children, ...restProps }: CustomBoxProps) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, scale: 0.95, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      borderRadius={3}
      p={2}
      boxShadow={3}
      {...restProps}
    >
      {children}
    </Box>
  );
};

export default CustomBox;

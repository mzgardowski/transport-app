import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";

const LogoContainer = ({ handleOpenMenu }: { handleOpenMenu: () => void }) => {
  return (
    <Box
      sx={{
        width: "200px",
        minWidth: "200px",
        maxWidth: "250px",
        textAlign: { xs: "start", sm: "center" },
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        "& p": {
          color: "black",
          textAlign: "center",
        },
      }}
    >
      <IconButton
        onClick={handleOpenMenu}
        sx={{ display: { sm: "none" }, padding: "8px", marginLeft: 1 }}
      >
        <Menu fontSize="large" />
      </IconButton>
      <Typography variant="button" sx={{ display: { xs: "none", sm: "flex" } }}>
        Company name
      </Typography>
    </Box>
  );
};

export default LogoContainer;

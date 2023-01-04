import React, { FC } from "react";
import { AppBar, CssBaseline, Toolbar } from "@mui/material";
import GlobalColors from "src/styles/GlobalColors";

const Header: FC = () => {
  return (
    <>
      <CssBaseline />
      <AppBar
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          padding: 1,
          backgroundColor: GlobalColors.backgroundColor.primary,
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <h3>Text</h3>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

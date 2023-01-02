import React, { FC } from "react";
import { AppBar, CssBaseline, Toolbar } from "@mui/material";

const Header: FC = () => {
  return (
    <>
      <CssBaseline />
      <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, padding: 1 }}>
        <Toolbar>
          <h3>Text</h3>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

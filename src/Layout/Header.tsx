import React, { FC } from "react";
import { AppBar } from "@mui/material";
import GlobalColors from "src/styles/GlobalColors";
import LogoContainer from "src/components/LogoContainer";
import HeaderUserInfo from "src/components/HeaderUserInfo";

const Header: FC = () => {
  return (
    <AppBar
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        padding: 1,
        backgroundColor: GlobalColors.backgroundColor.primary,
        boxShadow: "none",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 0,
      }}
    >
      <LogoContainer />
      <HeaderUserInfo />
    </AppBar>
  );
};

export default Header;

import React from "react";
import { AppBar } from "@mui/material";
import GlobalColors from "src/styles/GlobalColors";
import LogoContainer from "src/components/Header/LogoContainer";
import HeaderUserInfo from "src/components/Header/HeaderUserInfo";

const Header = ({ handleOpenMenu }: { handleOpenMenu: () => void }) => {
  return (
    <AppBar
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        padding: 1,
        height: "67px",
        backgroundColor: GlobalColors.backgroundColor.primary,
        boxShadow: "none",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 0,
      }}
    >
      <LogoContainer handleOpenMenu={handleOpenMenu} />
      <HeaderUserInfo />
    </AppBar>
  );
};

export default Header;

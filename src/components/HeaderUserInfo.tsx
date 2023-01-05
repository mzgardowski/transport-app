import React from "react";
import {
  Box,
  Avatar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
} from "@mui/material";
import {
  People,
  PersonOffOutlined,
  Logout,
  EmojiTransportation,
} from "@mui/icons-material";

const HeaderUserInfo = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        width: "250px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <IconButton
          onClick={handleClick}
          sx={{
            padding: "6px",
            borderRadius: 8,
            border: "1px solid rgba(0,0,0, 0.10)",
            "&:hover": {
              border: "1px solid rgba(0,0,0, 0.25)",
            },
          }}
        >
          <Typography
            px={1}
            variant="body1"
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            Mateusz Zgardowski
          </Typography>
          <Avatar sx={{ width: 32, height: 32 }}>
            <People />
          </Avatar>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 6px 8px rgba(0,0,0,0.32))",
              width: 250,
              mt: 1.5,
              //   "&:before": {
              //     content: '""',
              //     display: "block",
              //     position: "absolute",
              //     top: 0,
              //     right: 22,
              //     width: 10,
              //     height: 10,
              //     bgcolor: "background.paper",
              //     transform: "translateY(-50%) rotate(45deg)",
              //     zIndex: 0,
              //   },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PersonOffOutlined />
            </ListItemIcon>
            Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <EmojiTransportation />
            </ListItemIcon>
            Company
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default HeaderUserInfo;

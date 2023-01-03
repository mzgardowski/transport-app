import React, { FC } from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItem,
  Typography,
} from "@mui/material";
import GlobalColors from "src/styles/GlobalColors";
import { Link } from "react-router-dom";

interface LinkListItemInterface {
  icon?: JSX.Element;
  link: string;
  textLink: string;
}

const LinkListItem: FC<LinkListItemInterface> = ({ icon, link, textLink }) => {
  return (
    <ListItem sx={{ padding: 1 }}>
      <Link
        role="link"
        to={link}
        style={{ textDecoration: "none", width: "100%" }}
      >
        <ListItemButton
          sx={{
            borderRadius: 2,
            color: "rgba(0, 0, 0, 0.54)",
            textDecoration: "none",
            "&:hover": {
              color: GlobalColors.text.hover,
              backgroundColor: GlobalColors.backgroundColor.primary,
              "& .MuiSvgIcon-root": {
                color: GlobalColors.text.hover,
              },
            },
          }}
        >
          {icon && <ListItemIcon>{icon}</ListItemIcon>}
          <Typography variant="button">{textLink}</Typography>
        </ListItemButton>
      </Link>
    </ListItem>
  );
};

export default LinkListItem;

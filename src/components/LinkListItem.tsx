import React, { FC } from "react";
import { ListItemButton, ListItemIcon, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

interface LinkListItemInterface {
  icon?: JSX.Element;
  link: string;
  textLink: string;
}

const LinkListItem: FC<LinkListItemInterface> = ({ icon, link, textLink }) => {
  return (
    <ListItem sx={{ padding: 1 }}>
      <Link role="link" to={link} style={{ width: "100%" }}>
        <ListItemButton>
          {icon && <ListItemIcon>{icon}</ListItemIcon>}
          {textLink}
        </ListItemButton>
      </Link>
    </ListItem>
  );
};

export default LinkListItem;

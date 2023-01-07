import React from "react";
import { ListItem, ListItemIcon, Typography } from "@mui/material";

interface ListItemWithIconInterface {
  icon: JSX.Element;
  text: string;
}

const ListItemWithIcon = ({ icon, text }: ListItemWithIconInterface) => {
  return (
    <ListItem sx={{ padding: 0 }}>
      {icon && (
        <ListItemIcon sx={{ padding: 0, marginRight: -3, color: "black" }}>
          {icon}
        </ListItemIcon>
      )}
      <Typography variant="button">{text}</Typography>
    </ListItem>
  );
};

export default ListItemWithIcon;

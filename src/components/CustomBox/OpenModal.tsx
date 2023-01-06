import React from "react";
import { Launch } from "@mui/icons-material";
import { ListItemButton, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";

interface LinkBoxHeaderProps {
  link: string;
  text: string;
}

const LinkBoxHeader = ({ link, text }: LinkBoxHeaderProps) => {
  return (
    <Link to={link}>
      <ListItemButton>
        {text}
        <ListItemIcon>
          <Launch />
        </ListItemIcon>
      </ListItemButton>
    </Link>
  );
};

export default LinkBoxHeader;

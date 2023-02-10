import React from "react";
import { Link } from "react-router-dom";

const NavbarItems = ({ name, icon, path }) => {
  return (
    <Link to={path} style={{ textDecoration: "none", color: "white" }}>
      <li>
        {icon}
        <span>{name}</span>
      </li>
    </Link>
  );
};

export default NavbarItems;

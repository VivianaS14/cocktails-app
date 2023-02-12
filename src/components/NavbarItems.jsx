import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarItems = ({ name, icon, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
    document.querySelector(".Navbar__menu").classList.toggle("none");
  };

  return (
    <li onClick={handleClick}>
      {icon}
      <span>{name}</span>
    </li>
  );
};

export default NavbarItems;

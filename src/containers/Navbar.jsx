import React from "react";
import { grey } from "@mui/material/colors";
import { Menu, Logout } from "@mui/icons-material";
import NavbarItems from "../components/NavbarItems";
import { app } from "../firebase";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navbar = ({ menu }) => {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const showMenu = () => {
    document.querySelector(".Navbar__menu").classList.toggle("none");
  };

  const onSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <nav className="Navbar">
      <div className="Navbar__hamburger">
        <Menu
          sx={{ color: grey[300], fontSize: 45, cursor: "pointer" }}
          onClick={showMenu}
        />
      </div>
      <div className="Navbar__menu none">
        <ul>
          {menu.map((item) => (
            <NavbarItems
              key={item.id}
              name={item.name}
              icon={item.icon}
              path={item.path}
            />
          ))}
        </ul>
        <button type="button" onClick={onSignOut}>
          <Logout /> Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

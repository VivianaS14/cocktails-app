import React from "react";
import logo from "../assets/images/img-logo.png";
import { grey } from "@mui/material/colors";
import { Person, Key } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const onLogin = () => navigate("/");

  return (
    <div className="Register">
      <div className="Register__image">
        <img src={logo} alt="Cocktail Logo" width="200px" />
      </div>
      <div className="Register__form">
        <h2>¡Registrate!</h2>
        <form>
          <label htmlFor="email">
            <span>
              <Person sx={{ color: grey[800], fontSize: 45 }} />
            </span>
            <input type="text" name="email" placeholder="Correo Electrónico" />
          </label>
          <label htmlFor="name">
            <span>
              <Person sx={{ color: grey[800], fontSize: 45 }} />
            </span>
            <input type="text" name="name" placeholder="Nombre Completo" />
          </label>
          <label htmlFor="password">
            <span>
              <Key sx={{ color: grey[800], fontSize: 45 }} />
            </span>
            <input type="password" name="password" placeholder="Contraseña" />
          </label>
        </form>
        <div className="Register__button">
          <button type="submit">Registrarse</button>
        </div>
      </div>
      <div className="Register__footer">
        <p>
          ¿Ya tienes cuenta? <span onClick={onLogin}>¡Inicia Sesión!</span>
        </p>
      </div>
    </div>
  );
};

export default Register;

import React, { useEffect, useState } from "react";
import logo from "../assets/images/img-logo.png";
import { Person, Key } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const onRegister = () => navigate("/register");

  const onLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  if (isLoading)
    return (
      <div className="Login">
        <div className="Login__image">
          <img src={logo} alt="Cocktail Logo" width="200px" />
        </div>
      </div>
    );
  return (
    <div className="Login">
      <div className="Login__image">
        <img src={logo} alt="Cocktail Logo" width="200px" />
      </div>
      <div className="Login__form">
        <h2>Iniciar Sesión</h2>
        <form>
          <label htmlFor="email">
            <span>
              <Person sx={{ color: grey[800], fontSize: 45 }} />
            </span>
            <input type="text" name="email" placeholder="Correo Electrónico" />
          </label>
          <label htmlFor="password">
            <span>
              <Key sx={{ color: grey[800], fontSize: 45 }} />
            </span>
            <input type="password" name="password" placeholder="Contraseña" />
          </label>
        </form>
        <div className="Login__button">
          <button type="submit" onClick={onLogin}>
            Iniciar Sesión
          </button>
        </div>
      </div>
      <div className="Login__footer">
        <p>
          ¿Aun no tienes una cuenta?{" "}
          <span onClick={onRegister}>¡Registrate!</span>
        </p>
      </div>
    </div>
  );
};

export default Login;

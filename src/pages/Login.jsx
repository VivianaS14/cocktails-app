import React, { useEffect, useState } from "react";
import logo from "../assets/images/img-logo.png";
import { Person, Key } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

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
            <input type="text" name="email" />
          </label>
          <label htmlFor="password">
            <span>
              <Key sx={{ color: grey[800], fontSize: 45 }} />
            </span>
            <input type="password" name="password" />
          </label>
        </form>
        <div className="Login__button">
          <button type="submit">Iniciar Sesión</button>
        </div>
      </div>
      <div className="Login__footer">
        <p>
          ¿Aun no tienes una cuenta? <span>¡Registrate!</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
